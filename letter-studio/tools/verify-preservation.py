#!/usr/bin/env python3
import hashlib,json,pathlib
root=pathlib.Path(__file__).resolve().parents[1]
records=json.loads((root/'original-manifest.json').read_text())
failures=[r for r in records if 'error' in r]
assert not failures,failures
paths=set()
for r in records:
 p=root/r['local_file'];data=p.read_bytes();paths.add(p)
 assert len(data)==r['size_bytes'] and hashlib.sha256(data).hexdigest()==r['sha256'],p
 if p.suffix=='.wasm':assert data[:8]==b'\0asm\x01\0\0\0',p
 if p.suffix=='.ttf':assert data[:4] in (b'\0\1\0\0',b'OTTO',b'ttcf'),p
 if p.suffix=='.webp':assert data[:4]==b'RIFF' and data[8:12]==b'WEBP',p
 if p.suffix=='.mp4':assert data[4:8]==b'ftyp',p
 if p.suffix in ('.js','.css'):assert not data.lstrip().lower().startswith(b'<!doctype'),p
assert len(list((root/'original').glob('*.ttf')))==43
print(f'PASS: {len(paths)} immutable files; hashes, lengths, WASM/font/image/video signatures; no missing downloads.')
