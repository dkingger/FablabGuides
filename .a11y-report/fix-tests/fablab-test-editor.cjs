const fs=require('fs'),assert=require('node:assert/strict');
const puppeteer=require('/home/johsdahl/.npm/_npx/5501af16bfa30e9f/node_modules/puppeteer');
(async()=>{const browser=await puppeteer.launch({headless:true,args:['--no-sandbox']});try{
fs.writeFileSync('/tmp/fablab-a11y-square.svg','<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" fill="black"/></svg>');
const p=await browser.newPage();let errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto('http://127.0.0.1:8765/garn-bandit.html',{waitUntil:'networkidle0'});await p.click('#modeBtnSvg');await(await p.$('#fileInput')).uploadFile('/tmp/fablab-a11y-square.svg');await p.waitForFunction(()=>document.querySelector('#pinSelect').options.length>2);const before=await p.$eval('#pinSelect',e=>e.options.length);await p.focus('#removePin');await p.keyboard.press('Enter');assert.equal(await p.$eval('#pinSelect',e=>e.options.length),before-1);
await p.$eval('#pinX',e=>e.value='75');await p.$eval('#pinY',e=>e.value='75');await p.focus('#addPin');await p.keyboard.press('Enter');assert.equal(await p.$eval('#pinSelect',e=>e.options.length),before);
await p.focus('#addPin');await p.keyboard.press('Enter');assert.equal(await p.$eval('#pinSelect',e=>e.options.length),before,'Duplicate pin must not be added or removed');
assert.equal(await p.$eval('#statusMsg',e=>e.getAttribute('role')),'status');
await p.setViewport({width:320,height:900});await p.addStyleTag({content:'* {scroll-behavior:auto!important}'});await p.$eval('#pinEditor',e=>e.scrollIntoView());await p.screenshot({path:'.a11y-report/fix-tests/garn-pin-editor-320.png'});
assert.deepEqual(errors,[]);console.log('PASS Garn Bandit SVG import, remove/add pin with keyboard, duplicate protection, live status');
await browser.close();}catch(e){await browser.close();throw e}})().catch(e=>{console.error(e);process.exit(1)});
