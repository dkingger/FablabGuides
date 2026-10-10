// Run with a local server at http://localhost:8765 (or LETTER_STUDIO_URL).
const puppeteer = require('puppeteer');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const output = process.env.LETTER_QA_OUTPUT || '/tmp/letter-studio-exports';
fs.mkdirSync(output,{recursive:true});
const url = process.env.LETTER_STUDIO_URL || 'http://localhost:8765/letter-studio/public/studio.html';
(async()=>{
 const browser=await puppeteer.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader']});
 const report={url,startedAt:new Date().toISOString(),cases:[],requests:[],errors:[],blocked:[]};
 try {
  const page=await browser.newPage();page.on('dialog',d=>d.accept());await page.setViewport({width:1440,height:1000});page.setDefaultTimeout(60000);
  await page.setRequestInterception(true);
  page.on('request',r=>{report.requests.push(r.url());if(!r.url().startsWith(new URL(url).origin+'/')&&!/^(data:|blob:)/.test(r.url())){report.blocked.push(r.url());r.abort();}else r.continue();});
  page.on('pageerror',e=>report.errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)report.errors.push(`${r.status()} ${r.url()}`)});
  // Observe the real UI/worker boundary without changing messages or geometry.
  await page.evaluateOnNewDocument(()=>{
   window.qa={messages:[],results:[],blobs:[],downloads:[]};
   const WorkerClass=window.Worker;
   window.Worker=class extends WorkerClass {
    constructor(...args){super(...args);this.addEventListener('message',e=>{window.qa.results.push(e.data);});}
    postMessage(data,...args){window.qa.messages.push(structuredClone(data));return super.postMessage(data,...args);}
   };
   const create=URL.createObjectURL.bind(URL);URL.createObjectURL=blob=>{const url=create(blob);window.qa.blobs.push({url,blob});return url;};
   const click=HTMLAnchorElement.prototype.click;HTMLAnchorElement.prototype.click=function(){if(this.download)window.qa.downloads.push({name:this.download,url:this.href});return click.call(this);};
  });
  await page.goto(url,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.qa.results.some(x=>x.result));
  await page.evaluate(()=>document.querySelectorAll('dialog[open]').forEach(d=>d.close()));
  const inventory=await page.evaluate(()=>({controls:[...document.querySelectorAll('input,select,textarea')].map(e=>({id:e.id,type:e.type,label:[...(e.labels||[])].map(l=>l.innerText).join(' '),value:e.value,options:e.options?[...e.options].map(o=>({value:o.value,label:o.text})):undefined})),buttons:[...document.querySelectorAll('button')].map(e=>({id:e.id,text:e.innerText}))}));
  fs.writeFileSync(path.join(root,'docs/ui-inventory.json'),JSON.stringify(inventory,null,2));
  async function set(values){
   const before=await page.evaluate(()=>window.qa.results.length);
   await page.evaluate(values=>{for(const [id,value] of Object.entries(values)){const e=document.getElementById(id);if(!e)throw Error('Missing control '+id);e.value=String(value);e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));}},values);
   await page.waitForFunction(n=>window.qa.results.length>n,{timeout:60000},before);
  }
  async function ready(){
   await page.evaluate(()=>document.getElementById('tab-download').click());
   if (await page.evaluate(()=>document.getElementById('export').getAttribute('aria-disabled')==='false' && window.qa.results.at(-1)?.result && !window.qa.results.at(-1).result.previewOnly)) return;
   await page.waitForFunction(()=>!document.getElementById('preparePrintFiles').disabled);
   await page.evaluate(()=>document.getElementById('preparePrintFiles').click());
   await page.waitForFunction(()=>document.getElementById('export').getAttribute('aria-disabled')==='false'&&window.qa.results.at(-1)?.result&&!window.qa.results.at(-1).result.previewOnly,{timeout:120000});
  }
  async function blobToFile(blobUrl,file){const bytes=await page.evaluate(async u=>Array.from(new Uint8Array(await (await fetch(u)).arrayBuffer())),blobUrl);fs.writeFileSync(path.join(output,file),Buffer.from(bytes));return bytes.length;}
  async function collect(name){
   await ready();
   await page.evaluate(()=>document.getElementById('export').click());
   const zip=await page.$eval('#export',e=>e.href);assert(zip.startsWith('blob:'));
   const zipBytes=await blobToFile(zip,name+'.zip');
   await page.evaluate(()=>document.getElementById('exportPlates').click());
   await page.waitForFunction(()=>document.getElementById('exportPlates').href.startsWith('blob:'));
   const mf=await page.$eval('#exportPlates',e=>e.href);const mfBytes=await blobToFile(mf,name+'.3mf');
   const summary=await page.evaluate(()=>{const r=window.qa.results.at(-1).result;return {width:r.width,height:r.height,depth:r.depth,params:r.params,parts:r.parts?.length,split:r.split?{status:r.split.status,jointMode:r.split.jointMode,keys:Object.keys(r.split)}:null,exportBlocked:r.exportBlocked,checks:document.getElementById('checks').innerText};});
   report.cases.push({name,zipBytes,mfBytes,...summary});console.log('PASS',name,zipBytes,mfBytes);
   fs.writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2));
  }
  if (!process.env.LETTER_QA_EXTRA_ONLY) {
  await set({letterText:'A',height:100,depth:35});await collect('letter-a');
  if (process.env.LETTER_QA_ONLY_A) {
   if (process.env.LETTER_QA_BASELINE_STAND) {await set({standMode:'desk',ledMode:'wires'});await collect('stand-wires');}
   return;
  }
  await page.click('#saveDesign');
  await page.waitForFunction(()=>window.qa.downloads.some(x=>x.name.endsWith('.bogstavvaerkstedet.json')));
  const design=await page.evaluate(()=>window.qa.downloads.findLast(x=>x.name.endsWith('.bogstavvaerkstedet.json')));
  await blobToFile(design.url,'saved.bogstavvaerkstedet.json');
  await set({letterText:'ÆØÅ',height:80,depth:30});await collect('danish-text');
  await (await page.$('#designFile')).uploadFile(path.join(output,'saved.bogstavvaerkstedet.json'));
  await page.waitForFunction(()=>document.getElementById('letterText').value==='A');
  await collect('reopened-a');
  await set({height:110,depth:40,wall:2.4,frontFit:0.3});await collect('dimensions-fit');
    await set({letterText:'AB',projectMode:'lightbox',boxShape:'rectangle',boxSizing:'fixed',boxWidth:360,boxHeight:140,height:95,depth:35,construction:'separate',splitMode:'keys',splitStrategy:'even',splitFit:0,bedX:256,bedY:256,bedZ:256});await collect('split-lightbox');
  await set({splitMode:'off',boxWidth:180,boxHeight:140});await collect('lightbox');
  const svg=path.join(output,'hole.svg');fs.writeFileSync(svg,'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill-rule="evenodd" d="M0 0H100V100H0Z M30 30V70H70V30Z"/></svg>');
  await page.evaluate(()=>document.getElementById('svgMode').click());await (await page.$('#svgFile')).uploadFile(svg);
  await page.waitForFunction(()=>document.getElementById('fileName').innerText.includes('hole.svg'));
  await collect('svg-hole');
  }
  if (process.env.LETTER_QA_EXTRA_ONLY) {
   const fonts=JSON.parse(fs.readFileSync(path.join(root,'docs/fonts.json')));
   report.fonts=await page.evaluate(async fonts=>{
    const results=[];
    for(const [name] of fonts){const data=await(await fetch('./'+name+'.ttf')).arrayBuffer();const face=await new FontFace('QA-'+name,data).load();results.push({name,bytes:data.byteLength,status:face.status});}
    return results;
   },fonts);
   await (await page.$('#fontFile')).uploadFile(path.join(root,'public/serifbold.ttf'));
   await page.waitForFunction(()=>document.getElementById('font').value.startsWith('custom'));
   await set({letterText:'Ø',height:80});await collect('imported-font');
   await set({font:'bold',letterText:'A',height:100,standMode:'desk',ledMode:'wires'});await collect('stand-wires');
   async function exportButton(id,name){
    const before=await page.evaluate(()=>window.qa.downloads.length);
    await page.evaluate(id=>document.getElementById(id).click(),id);
    await page.waitForFunction(n=>window.qa.downloads.length>n,{},before);
    const download=await page.evaluate(()=>window.qa.downloads.at(-1));
    return blobToFile(download.url,name);
   }
   await page.evaluate(()=>document.querySelector('[data-project-choice="decorative"]').click());
   await page.waitForFunction(()=>!document.getElementById('nlZip').disabled,{timeout:120000});
   const nonlitZip=await exportButton('nlZip','decorative.zip');
   const nonlit3mf=await exportButton('nl3mf','decorative.3mf');
   report.cases.push({name:'decorative',zipBytes:nonlitZip,mfBytes:nonlit3mf});console.log('PASS decorative');
   await page.evaluate(()=>document.getElementById('nlClose').click());
   await page.evaluate(()=>document.querySelector('[data-project-choice="halo"]').click());
   await page.waitForFunction(()=>!document.getElementById('haloZIP').disabled,{timeout:120000});
   const haloZip=await exportButton('haloZIP','halo.zip');
   const halo3mf=await exportButton('halo3MF','halo.3mf');
   report.cases.push({name:'halo',zipBytes:haloZip,mfBytes:halo3mf});console.log('PASS halo');
  }
  assert.equal(report.blocked.length,0);assert.deepEqual(report.errors,[]);
    assert(!report.requests.some(u=>/print-service|print-quote|googletagmanager/.test(u)));
  report.crossOriginIsolated=await page.evaluate(()=>crossOriginIsolated);
  await page.screenshot({path:path.join(output,'studio.png')});
 } finally {fs.writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2));await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
