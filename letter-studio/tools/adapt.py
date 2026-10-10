#!/usr/bin/env python3
"""Rebuild the independent static edition from the immutable preserved files."""
from pathlib import Path
from urllib.parse import urlsplit
from bs4 import BeautifulSoup, Comment
import shutil,re,json
ROOT=Path(__file__).resolve().parents[1]
public=ROOT/'public'
shutil.copytree(ROOT/'original',public,dirs_exist_ok=True)
for p in public.rglob('*'):
    if p.suffix not in ('.html','.css','.js'):continue
    s=p.read_text()
    if p.suffix=='.html':
        soup=BeautifulSoup(s,'html.parser')
        soup.html['lang']='da'
        if p.name=='studio.html':
            for el in soup.select('#openFeedback'):el.decompose()
            localise=soup.new_tag('script',src='./i18n-da.js')
            soup.head.insert(0,localise)
        for comment in soup.find_all(string=lambda t:isinstance(t,Comment)):
            if 'Google tag' in comment:comment.extract()
        for el in soup.find_all('script'):
            if 'googletagmanager' in el.get('src','') or 'gtag(' in el.get_text():el.decompose()
        for el in soup.select('link[rel="canonical"],meta[property="og:url"]'):el.decompose()
        for el in soup.select('a[href]'):
            if 'docs.google.com/forms' in el['href']:el.decompose()
        for el in soup.find_all(True):
            for attr in ('href','src','poster'):
                value=el.get(attr,'')
                if value.startswith('/') and not value.startswith('//'):el[attr]='./'+value[1:]
                elif value.startswith(('http://','https://')):
                    parsed=urlsplit(value)
                    if parsed.path.startswith('/') and parsed.netloc:
                        rel='./'+parsed.path.lstrip('/')
                        if parsed.query:rel+='?'+parsed.query
                        if parsed.fragment:rel+='#'+parsed.fragment
                        el[attr]=rel
        for el in soup.select('.brand span'):
            if el.get_text().startswith('MS '):
                el.clear();el.append('Bogstavværkstedet')
        banner=soup.new_tag('div',attrs={'class':'selfhost-notice'})
        banner.append('Independent adapted edition · ')
        link=soup.new_tag('a',href='./credits.html');link.string='Credits & licences';banner.append(link)
        soup.body.insert(0,banner)
        style=soup.new_tag('style');style.string='.selfhost-notice{padding:6px 14px;background:#152537;color:#fff;font:12px/1.5 system-ui;text-align:center}.selfhost-notice a{color:#b8f34c;text-decoration:underline}'
        soup.head.append(style)
        s=str(soup)
        s=s.replace('"/images/','"./images/')
    elif p.suffix=='.css':
        s=s.replace('url(/','url(./')
    elif p.name=='app.js':
        s,n=re.subn(r'function Fi\(.*?(?=function u_\()', 'function Fi(){return false}', s, count=1, flags=re.S)
        assert n==1
        old='dn("openFeedback").onclick=()=>{T(),S.showModal()};'
        assert old in s
        s=s.replace(old,'')
        old='var WM=h_();';assert s.count(old)==1
        s=s.replace(old,'/* Self-hosted edition: no print quote service or request UI. */var WM={attach(){}};')
        old='new Worker(`/worker.js?v=${102}`,{type:"module"})';assert old in s
        s=s.replace(old,'new Worker(new URL(`./worker.js?v=${102}`,import.meta.url),{type:"module"})')
        old='fetch("/"+t+".ttf")';assert old in s
        s=s.replace(old,'fetch(new URL("./"+t+".ttf",import.meta.url))')
        s=s.replace('"/images/','"./images/')
        s=s.replace('textContent="BOGSTAVVAERKSTEDET"','textContent="Bogstavværkstedet"')
        s=s.replace('<small>BOGSTAVVAERKSTEDET ', '<small>Bogstavværkstedet ')
        # Keep the offline diagnostic report while removing the upstream Google Form.
        s,n=re.subn(r'<a id="sendFeedback".*?</a><p class="hint">.*?</p>', '<p class="hint">Independent edition. Download a diagnostic report below to share manually.</p>',s,count=1)
        assert n==1
        s=s.replace('This download does not send feedback; use the form above.','This download does not send feedback automatically.')
    elif p.name=='worker.js':
        old='locateFile:()=>"/manifold.wasm"';assert old in s
        s=s.replace(old,'locateFile:()=>new URL("./manifold.wasm",import.meta.url).href')
    p.write_text(s)
print('Adapted public/ from preserved original/; geometry and design formats unchanged.')
shutil.copytree(ROOT/'overrides',public,dirs_exist_ok=True)

translations=json.loads((ROOT/'locales/da.json').read_text())
numeric_patterns=[]
number=r"(?<![A-Za-z])[-+]?\d+(?:\.\d+)?"
for source,target in translations.items():
    source_numbers=list(re.finditer(number,source));target_numbers=list(re.finditer(number,target))
    if not source_numbers or [m.group() for m in source_numbers]!=[m.group() for m in target_numbers]:continue
    if len(source)<16:continue
    pattern='^';pos=0
    for match in source_numbers:
        pattern+=re.escape(source[pos:match.start()])+r'([-+]?\d+(?:\.\d+)?)';pos=match.end()
    pattern+=re.escape(source[pos:])+'$'
    # Python escapes spaces; remove that redundant escape for JavaScript.
    pattern=pattern.replace(r'\ ', ' ')
    parts=[];pos=0
    for index,match in enumerate(target_numbers,1):parts.extend([target[pos:match.start()],index]);pos=match.end()
    parts.append(target[pos:]);numeric_patterns.append([pattern,parts])
runtime=(ROOT/'locales/runtime.js').read_text().replace('__DICTIONARY__',json.dumps(translations,ensure_ascii=False)).replace('__NUMERIC_PATTERNS__',json.dumps(numeric_patterns,ensure_ascii=False))
(public/'i18n-da.js').write_text(runtime)
