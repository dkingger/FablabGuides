from pathlib import Path
from bs4 import BeautifulSoup
import subprocess,re
root=Path(__file__).resolve().parents[1]
subprocess.run(['node',str(root/'tools/adapt.cjs')],check=True)
for file in (root/'public').rglob('*.html'):
 soup=BeautifulSoup(file.read_text(),'html.parser')
 # No inline analytics or signup scripts; retain only startup feature detection.
 for script in soup.find_all('script'):
  if not script.get('src'):
   text=script.string or script.get_text()
   if '__msStarted' in text:
    text=re.sub(r'          // The same endpoint.*?\n        }','          // Local test copy: startup failures are never reported.\n        }',text,flags=re.S)
    script.string=text
   else: script.decompose()
 for link in soup.select('link[rel="canonical"],link[rel="alternate"]'): link.decompose()
 for tag in soup.find_all(True):
  for attr in ['src','href','poster']:
   value=tag.get(attr,'')
   if value.startswith('/'):
    target=root/'public'/value.lstrip('/').split('#')[0]
    if target.is_dir(): target=target/'index.html'
    if target.exists():
     import os
     tag[attr]=os.path.relpath(target,file.parent)+('#'+value.split('#',1)[1] if '#' in value else '')
   if attr=='href' and (value.startswith(('/forum','/pro')) or 'kickstarter.com' in value or 'mailerlite' in value):
    tag.attrs.pop('href',None);tag['hidden']='';tag['aria-hidden']='true'
 # Keep inert DOM nodes needed by existing runtime bindings, with unconditional CSS hiding.
 ids=['countedDetails','launchInvite','launchList','say','forumOpen','proOpen','kickstarterOpenSidebar','launchOpenSidebar']
 style=soup.new_tag('style');style.string=','.join('#'+i for i in ids)+'{display:none!important}'
 soup.head.append(style)
 for id in ids:
  el=soup.find(id=id)
  if el: el['hidden']='';el['inert']='';el['aria-hidden']='true'
 if file==root/'public/index.html':
  badge=soup.find(id='betaBadge');badge.string='Privat test · FabLab Guides';badge['title']='Lokal testkopi, ikke publiceret'
  paragraph=soup.find(id='countedDetails').find_previous_sibling('p')
  paragraph.clear();paragraph.string='Privat lokal testkopi af ModelSplitter · FabLab Guides. Modeller behandles i browseren. Besøgstælling, feedback, forum og mailingliste er deaktiveret. Ikke klar til publicering.'
  meta=soup.new_tag('meta',attrs={'http-equiv':'Content-Security-Policy','content':"default-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; connect-src 'self'; worker-src 'self' blob:; form-action 'none'; base-uri 'self'"});soup.head.insert(0,meta)
  soup.head.append(soup.new_tag('meta',attrs={'name':'robots','content':'noindex, nofollow'}))
  # Root URLs used by WASM in the main bundle are relative to import.meta.url.
 file.write_text(str(soup))
print('Adapted public pages for local private testing.')
