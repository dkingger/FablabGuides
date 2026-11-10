const assert=require('node:assert/strict');
const fs=require('node:fs');
const puppeteer=require('puppeteer');
(async()=>{
  const executablePath=process.env.PUPPETEER_EXECUTABLE_PATH||['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome','/usr/bin/google-chrome','/usr/bin/chromium'].find(p=>fs.existsSync(p));
  const browser=await puppeteer.launch({headless:true,executablePath,args:['--no-sandbox']});
  try{
    const page=await browser.newPage(),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.setViewport({width:1440,height:1000});
    await page.goto((process.argv[2]||'http://127.0.0.1:8765')+'/vektor-viktor.html');
    const point=await page.evaluate(()=>{
      clearAll();setPageSize('ScanNCut');
      const el=document.createElementNS(SVG_NS,'rect');
      for(const [k,v] of Object.entries({x:30,y:30,width:40,height:40}))el.setAttribute(k,v);
      const id=addObject('rect',el,{mode:'cut'});applySelectedScanFill('#123456');
      currentScanFillColor='#abcdef';selectOnly(id);toggleSelect(id);selectOnly(id);
      if(objects[0].data.scanFillColor!=='#123456')throw Error('Selection changed color');
      const picker=document.getElementById('scanFillColor');picker.value='#abcdef';picker.dispatchEvent(new Event('change'));
      if(objects[0].data.scanFillColor!=='#123456')throw Error('Picker applied color before double click');
      const p=new DOMPoint(30,50).matrixTransform(svg.getScreenCTM());return {x:p.x,y:p.y};
    });
    await page.mouse.move(point.x,point.y);await page.mouse.down();await page.mouse.move(point.x+12,point.y+12,{steps:4});await page.mouse.up();
    assert.equal(await page.evaluate(()=>objects[0].data.scanFillColor),'#123456','Dragging preserves color');
    await page.mouse.click(point.x+12,point.y+12);
    await page.mouse.click(point.x+12,point.y+12,{count:2});
    assert.equal(await page.evaluate(()=>objects[0].data.scanFillColor),'#abcdef','Double click applies color');
    await page.evaluate(()=>undo());
    assert.equal(await page.evaluate(()=>objects[0].data.scanFillColor),'#123456','Undo restores color');
    const results=await page.evaluate(async()=>{
      const check=(ok,msg)=>{if(!ok)throw Error(msg);};
      const results=[];
      for(const [width,height] of [[300,200],[2400,1200],[2400,2400]]){
        clearAll();setPageSize('A4');
        const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
        const ctx=canvas.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,width,height);ctx.fillStyle='black';ctx.fillRect(width/4,height/4,width/2,height/2);
        const image=document.createElementNS(SVG_NS,'image');image.setAttribute('width',100);image.setAttribute('height',100);image.setAttribute('href',canvas.toDataURL());
        const id=addObject('image',image,{});selectOnly(id);document.getElementById('btnTraceImage').click();
        for(let tries=0;!traceImageData&&tries<200;tries++)await new Promise(r=>setTimeout(r,10));
        check(!!traceImageData,'Trace image loads');
        const w=traceImageData.width,h=traceImageData.height;
        check(Math.max(w,h)<=1600&&w*h<=1400000,'Resolution limits');
        check(w<=width&&h<=height,'No upscaling');
        check(Math.max(tracePreviewImageData.width,tracePreviewImageData.height)<=650,'Small preview');
        document.getElementById('traceThreshold').dispatchEvent(new Event('input'));
        check(document.querySelector('#tracePreview canvas').width===tracePreviewImageData.width,'Slider uses small preview');
        document.getElementById('traceDo').click();
        check(objects.length===1&&objects[0].type==='traced','Image replaced with trace');
        undo();check(objects.length===1&&objects[0].type==='image','Undo restores original image');
        results.push({source:[width,height],trace:[w,h]});
      }
      clearAll();
      const canvas=document.createElement('canvas');canvas.width=600;canvas.height=600;
      const ctx=canvas.getContext('2d');ctx.fillStyle='white';ctx.fillRect(0,0,600,600);ctx.fillStyle='black';
      for(let y=0;y<36;y++)for(let x=0;x<36;x++)ctx.fillRect(5+x*16,5+y*16,8,8);
      const image=document.createElementNS(SVG_NS,'image');image.setAttribute('width',100);image.setAttribute('height',100);
      traceSourceId=addObject('image',image,{});traceImageData=ctx.getImageData(0,0,600,600);
      const alerts=[];window.alert=msg=>alerts.push(msg);
      const count=updateCount;let updates=0;updateCount=()=>{updates++;return count();};
      try{document.getElementById('traceDo').click();}finally{updateCount=count;}
      check(objects.length===420,'Object cap');check(alerts.length===1,'Warn about filtered contours');
      check(updates<10,'Layer list updated in batch');
      undo();check(objects.length===1&&objects[0].type==='image','Undo capped trace');
      const path=document.createElementNS(SVG_NS,'path');path.setAttribute('d','M0 0 L1 1 Z M2 2 L3 3 Z');
      const parse=parsePathNodes;parsePathNodes=()=>{throw Error('Unnecessary node parsing');};
      try{check(objectCanUngroup({type:'path',el:path}),'Compound path can ungroup');path.setAttribute('d','M0 0 L1 1 Z');check(!objectCanUngroup({type:'path',el:path}),'Single path cannot ungroup');}finally{parsePathNodes=parse;}
      return {resolutions:results,cappedObjects:420,layerUpdates:updates};
    });
    assert.deepEqual(errors,[]);console.log('PASS: selection, drag, double-click color, undo, trace limits, preview, contour filtering and batch updates',JSON.stringify(results));
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
