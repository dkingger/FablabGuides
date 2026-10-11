"""Preserve upstream runtime files into public/, with hashes and retrieval provenance."""
import hashlib,json,re,urllib.request,posixpath
from pathlib import Path
from urllib.parse import urljoin,urlparse
from datetime import datetime,timezone
from bs4 import BeautifulSoup
root=Path(__file__).resolve().parents[1]
upstream_base='https://modelsplitter.com/'
queue=[upstream_base,upstream_base+'guide/',upstream_base+'how-to/']; seen=set(); manifest=[]
while queue:
 url=queue.pop(0)
 if url in seen: continue
 seen.add(url)
 print('Fetch',url,flush=True)
 with urllib.request.urlopen(url,timeout=30) as response:
  data=response.read(); mime=response.headers.get('Content-Type','')
 path=urlparse(url).path.lstrip('/')
 if not path or path.endswith('/'): path+='index.html'
 dest=root/'public'/path; dest.parent.mkdir(parents=True,exist_ok=True)
 if dest.exists() and dest.read_bytes()!=data: raise RuntimeError('Refusing to overwrite '+str(dest))
 dest.write_bytes(data)
 manifest.append(dict(url=url,path=path,bytes=len(data),sha256=hashlib.sha256(data).hexdigest(),mime=mime,retrieved=datetime.now(timezone.utc).isoformat()))
 if 'text/html' in mime:
  soup=BeautifulSoup(data,'html.parser')
  refs=[t.get(a) for t in soup.find_all(['script','link','img','video','source']) for a in ['src','href','poster'] if t.get(a) and (t.name!='link' or t.get('rel') in [['stylesheet'],['modulepreload'],['icon']])]
  refs += [a.get('href') for a in soup.find_all('a') if a.get('href','').startswith('/how-to/')]
 elif path.endswith(('.js','.css')):
  refs=re.findall(r'''["'`]((?:\./|/assets/|assets/)[^"'`\s<>]+\.(?:js|css|wasm|png|svg|webp|jpg|woff2?))["'`]''',data.decode())
 else: refs=[]
 for ref in refs:
  if ref.startswith('assets/'): ref='/'+ref
  resolved=urljoin(url,ref)
  if urlparse(resolved).netloc==urlparse(upstream_base).netloc and resolved not in seen: queue.append(resolved)
(root/'public-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('Preserved into public/:',len(manifest),'files')
