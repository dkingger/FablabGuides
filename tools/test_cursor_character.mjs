import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(pathToFileURL(process.env.FLG_PLAYWRIGHT || '/tmp/flg-browser-check/node_modules/playwright/index.mjs').href);
const base = process.argv[2] || 'http://127.0.0.1:8080';
const browser = await chromium.launch({ executablePath:process.env.FLG_CHROMIUM || '/usr/bin/chromium', headless:true, args:['--no-sandbox'] });
const root = '[data-flg-character]';
const demo = `${base}/cursor-character-demo.html`;
const reports=[];
try {
  const page = await browser.newPage({viewport:{width:1200,height:900}});
  const errors=[],requests=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
  await page.goto(demo);
  await page.waitForFunction(()=>document.querySelector('[data-flg-character]')?.dataset.flgStatus==='ready');
  await page.waitForFunction(()=>document.querySelector('[data-flg-character]')?.dataset.flgFrame==='center');
  const decoded = await page.evaluate(async()=> {
    const paths=['center.webp',...Array.from({length:64},(_,i)=>`frame_${String(i).padStart(2,'0')}.webp`)];
    return Promise.all(paths.map(async path=>{const img=new Image();img.src=`assets/cursor-character/frames/${path}`;await img.decode();return img.naturalWidth===1280 && img.naturalHeight===720;}));
  });
  assert.equal(decoded.length,65);assert.ok(decoded.every(Boolean));
  const box=await page.locator(root).boundingBox();
  const cx=box.x+box.width*.5,cy=box.y+box.height*.36;
  const frame=()=>page.locator(root).getAttribute('data-flg-frame');
  const at=async(x,y)=>{await page.mouse.move(x,y);await page.waitForTimeout(550);return frame();};
  const right=await at(cx+250,cy),down=await at(cx,cy+220),left=await at(cx-250,cy),up=await at(cx,cy-220);
  assert.equal(new Set([right,down,left,up]).size,4);
  assert.equal(await at(cx,cy),'center');
  assert.equal(requests.filter(url=>/\.mp4(?:\?|$)/.test(url)).length,0);
  assert.equal(new Set(requests.filter(url=>/frame_\d\d.webp/.test(url))).size,64);
  await page.screenshot({path:'/tmp/flg-character-desktop.png'});
  // Shortest-path mapping remains continuous across -180/+180.
  assert.equal(await page.evaluate(async()=>{
    const m=await import('./assets/cursor-character/cursor-character.js');const manifest=await (await fetch('./assets/cursor-character/frames/manifest.json')).json();
    return m.frameForAngle(Math.PI-.00001,manifest.angleAnchors)===m.frameForAngle(-Math.PI+.00001,manifest.angleAnchors);
  }),true);
  await page.emulateMedia({reducedMotion:'reduce'});await at(cx+250,cy);assert.equal(await frame(),'center');
  await page.emulateMedia({reducedMotion:'no-preference'});assert.notEqual(await at(cx+250,cy),'center');
  // Add a second independent instance, then destroy both and verify the HTML fallback.
  await page.evaluate(async()=>{
    const m=await import('./assets/cursor-character/cursor-character.js');
    const original=document.querySelector('[data-flg-character]');const clone=original.cloneNode(true);
    clone.removeAttribute('data-flg-ready');delete clone.dataset.flgStatus;delete clone.dataset.flgFrame;
    document.querySelector('.flg-demo__stage').append(clone);m.mountCursorCharacter(clone);
  });
  await page.waitForFunction(()=>[...document.querySelectorAll('[data-flg-character]')].every(el=>el.dataset.flgStatus==='ready'));
  await page.evaluate(async()=>{const m=await import('./assets/cursor-character/cursor-character.js');document.querySelectorAll('[data-flg-character]').forEach(el=>m.mountCursorCharacter(el).destroy());});
  assert.equal(await page.locator('[data-flg-ready]').count(),0);
  assert.ok(await page.locator('.flg-cursor-character__fallback').first().isVisible());
  assert.deepEqual(errors,[]);reports.push({desktop:'pass',decoded:decoded.length,right,down,left,up,deadzone:'pass',lifecycle:'pass',videoRequests:0});
  await page.close();
  for (const mode of ['touch','reduced','no-js','missing-frame']) {
    const context=await browser.newContext(mode==='touch'?{viewport:{width:390,height:844},isMobile:true,hasTouch:true}:mode==='no-js'?{javaScriptEnabled:false}:mode==='reduced'?{reducedMotion:'reduce'}:{});
    const p=await context.newPage();const frameRequests=[];p.on('request',r=>{if(/frame_\d\d.webp/.test(r.url()))frameRequests.push(r.url())});
    if(mode==='missing-frame')await p.route('**/frame_17.webp',route=>route.fulfill({status:404,body:'Missing test image'}));
    await p.goto(demo);await p.locator('.flg-cursor-character__fallback').evaluate(img=>{if(!img.complete)return new Promise(resolve=>img.onload=resolve)});
    if(mode==='missing-frame')await p.waitForFunction(()=>document.querySelector('[data-flg-character]').dataset.flgStatus==='fallback');
    else await p.waitForTimeout(250);
    assert.ok(await p.locator('.flg-cursor-character__fallback').isVisible());assert.equal(await p.locator('[data-flg-ready]').count(),0);
    if(mode!=='missing-frame')assert.equal(frameRequests.length,0);
    assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    if(mode==='touch') { const box=await p.locator(root).boundingBox(); assert.ok(box.x>=0 && box.x+box.width<=390); }
    if(mode==='touch')await p.screenshot({path:'/tmp/flg-character-mobile.png'});
    reports.push({mode,result:'pass'});await context.close();
  }
  // Existing site smoke checks; only first-party page errors are assessed.
  for(const path of ['/index.html','/en/index.html','/prusa-mk4.html']) {
    const p=await browser.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
    const response=await p.goto(base+path,{waitUntil:'domcontentloaded'});
    assert.equal(response.status(),200);await p.locator('h1').waitFor();
    assert.ok((await p.locator('h1').innerText()).length>0);
    assert.equal(await p.locator('[data-flg-character]').count(),0);
    if(path.includes('index'))assert.ok(await p.locator('#site-nav a').count()>=4);
    assert.deepEqual(errors,[]);reports.push({existingPage:path,result:'pass'});await p.close();
  }
  console.log(JSON.stringify(reports,null,2));
} finally { await browser.close(); }
