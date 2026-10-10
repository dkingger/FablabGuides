const puppeteer=require('puppeteer'),assert=require('node:assert/strict');
(async()=>{
 const browser=await puppeteer.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader']});
 try {
  const page=await browser.newPage(),issues=[];
  await page.setViewport({width:1440,height:1000});
  await page.setRequestInterception(true);
  page.on('request',r=>{if(!r.url().startsWith('http://localhost:8765/')&&!/^(data:|blob:)/.test(r.url())){issues.push('external '+r.url());r.abort();}else r.continue();});
  page.on('response',r=>{if(r.status()>=400)issues.push(r.status()+' '+r.url())});
  page.on('pageerror',e=>issues.push(e.message));
  for(const file of ['index.html','help.html','updates.html','privacy.html','credits.html']){
   await page.goto('http://localhost:8765/letter-studio/public/'+file,{waitUntil:'networkidle0'});
   await page.evaluate(async()=>{for(const img of document.images){if(!img.getAttribute('src'))continue;img.loading='eager';await img.decode();}});
   assert.match(await page.title(),/Bogstavværkstedet/);console.log('PASS local page',file);
  }
  await page.goto('http://localhost:8765/letter-studio/public/studio.html');
  await page.waitForFunction(()=>document.getElementById('finishedSize')?.innerText.includes('mm'));
  await page.evaluate(()=>document.querySelectorAll('dialog[open]').forEach(d=>d.close()));
  assert.equal(await page.$('#openFeedback'),null);
  assert.equal(await page.$eval('html',e=>e.lang),'da');
  assert.match(await page.$eval('header .brand',e=>e.innerText),/Bogstavværkstedet/);
  await page.screenshot({path:'/tmp/letter-studio-final.png'});
  await page.evaluate(()=>document.querySelector('[data-project-choice="halo"]').click());
  await page.waitForFunction(()=>document.querySelector('.halo-header small')?.textContent.includes('Bogstavværkstedet'));
  assert.deepEqual(issues,[]);
  console.log('PASS supporting pages, branding and preview: no missing assets or external requests');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
