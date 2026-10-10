#!/usr/bin/env python3
"""Preserve explicitly requested public upstream assets without modifying their bytes."""
import concurrent.futures, datetime, hashlib, json, os, pathlib, urllib.request, urllib.parse, sys
ROOT=pathlib.Path(__file__).resolve().parents[1]
ORIGIN=os.environ.get('LETTER_STUDIO_ORIGIN','https://example.invalid/').rstrip('/')+'/'
ORIGIN_HOST=urllib.parse.urlsplit(ORIGIN).netloc
manifest_path=ROOT/'original-manifest.json'
records=json.loads(manifest_path.read_text()) if manifest_path.exists() else []
known={r['url'] for r in records if r.get('sha256')}
def fetch(ref):
    url=urllib.parse.urljoin(ORIGIN,ref)
    parsed=urllib.parse.urlsplit(url)
    if parsed.netloc!=ORIGIN_HOST:return None
    path=parsed.path.lstrip('/') or 'index.html'
    if '..' in pathlib.PurePosixPath(path).parts:raise ValueError(path)
    record={'url':url,'local_file':'original/'+path,'downloaded_at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
    if url in known:return None
    try:
        with urllib.request.urlopen(url,timeout=45) as response:
            data=response.read();record['content_type']=response.headers.get('Content-Type','')
        suffix=pathlib.Path(path).suffix
        if suffix=='.wasm' and data[:4]!=b'\0asm':raise ValueError('Invalid WASM signature')
        if suffix in ('.ttf','.otf','.woff','.woff2') and data[:4] not in (b'\0\1\0\0',b'OTTO',b'ttcf',b'wOFF',b'wOF2'):raise ValueError('Invalid font signature')
        if suffix not in ('.html','') and data.lstrip().lower().startswith((b'<!doctype html',b'<html')):raise ValueError('HTML fallback instead of asset')
        dest=ROOT/record['local_file'];dest.parent.mkdir(parents=True,exist_ok=True)
        if dest.exists() and dest.read_bytes()!=data:raise ValueError('Refusing to overwrite a different preserved file')
        dest.write_bytes(data)
        record.update(size_bytes=len(data),sha256=hashlib.sha256(data).hexdigest())
    except Exception as e:record['error']=str(e)
    return record
refs=sys.argv[1:] or [ORIGIN,'studio.html','help.html','updates.html','privacy.html','app.js?v=102','worker.js?v=102','style.css?v=102','studio-polish.css?v=102','launch.css?v=102-gallery2','manifold.wasm','harfbuzz.wasm']
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    for r in pool.map(fetch,dict.fromkeys(refs)):
        if r:records.append(r);print(r['local_file'],r.get('size_bytes',r.get('error')))
manifest_path.write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n')
