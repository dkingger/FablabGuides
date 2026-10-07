const assert=require('node:assert/strict');
const fs=require('node:fs');
const puppeteer=require('puppeteer');
(async()=>{
  const executablePath=process.env.PUPPETEER_EXECUTABLE_PATH||['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome','/usr/bin/google-chrome','/usr/bin/chromium'].find(p=>fs.existsSync(p));
  const browser=await puppeteer.launch({headless:true,executablePath,args:['--no-sandbox']});
  try{
    const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto((process.argv[2]||'http://127.0.0.1:8765')+'/vektor-viktor.html');
    const results=await page.evaluate(()=>{
      const check=(ok,msg)=>{if(!ok)throw Error(msg);};
      const results=[];
      const fixtures=['circle','ellipse','ring','rectangle','star'].map(kind=>({kind,size:600}));
      fixtures.push({kind:'circle',size:300},{kind:'circle',size:1200});
      for(const {kind,size} of fixtures){
        const canvas=document.createElement('canvas');canvas.width=size;canvas.height=size;
        const ctx=canvas.getContext('2d');ctx.scale(size/600,size/600);ctx.fillStyle='white';ctx.fillRect(0,0,600,600);ctx.fillStyle='black';
        ctx.beginPath();
        if(kind==='rectangle')ctx.rect(100,100,400,400);
        else if(kind==='star'){
          for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,r=i%2?110:240;const x=300+Math.cos(a)*r,y=300+Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();
        }else ctx.ellipse(300,300,240,kind==='ellipse'?140:240,0,0,Math.PI*2);
        ctx.fill();
        if(kind==='ring'){ctx.fillStyle='white';ctx.beginPath();ctx.arc(300,300,120,0,Math.PI*2);ctx.fill();}
        const pixels=ctx.getImageData(0,0,size,size);
        const contours=findContoursPrecise(pixels,128);
        const main=contours.slice().sort((a,b)=>Math.abs(contourArea(b))-Math.abs(contourArea(a)))[0];
        const oldD=preciseClosedPathD(simplifyClosedContour(main,0.12+Math.pow(0.1,1.7)*2.4),100/size,100/size,0,0,12);
        clearAll();setPageSize('ScanNCut');
        const image=document.createElementNS(SVG_NS,'image');image.setAttribute('width',100);image.setAttribute('height',100);image.setAttribute('href',canvas.toDataURL());
        const id=addObject('image',image,{scanFillColor:'#123456'});
        traceSourceId=id;traceImageData=pixels;
        document.getElementById('traceDo').click();
        check(objects.length===1,kind+': one connected object with holes');
        const path=objects[0].el,d=path.getAttribute('d');
        const segments=(d.match(/[LC]/g)||[]).length;
        const previous=(oldD.match(/[LC]/g)||[]).length;
        check(path.getAttribute('fill')==='#123456',kind+': retain foil preview');
        if(kind==='circle'||kind==='ellipse'){
          check(segments<previous/4 && segments<=32,kind+': expected many fewer segments, got '+segments+' vs '+previous);
          let maxError=0;
          const len=path.getTotalLength();
          for(let i=0;i<1000;i++){
            const p=path.getPointAtLength(len*i/1000),rx=40,ry=kind==='ellipse'?140/6:40;
            // Radial error against the analytic source ellipse, in mm.
            const norm=Math.hypot((p.x-50)/rx,(p.y-50)/ry);
            const radial=Math.hypot(p.x-50,p.y-50);
            maxError=Math.max(maxError,Math.abs(radial-radial/norm));
          }
          check(maxError<0.15+100/size,kind+': excessive deviation '+maxError);
          results.push({kind,size,previous,segments,maxErrorMm:+maxError.toFixed(3)});
        }else results.push({kind,segments});
        if(kind==='ring')check(!path.isPointInFill(new DOMPoint(50,50))&&path.isPointInFill(new DOMPoint(80,50)),'Ring hole');
        if(kind==='rectangle'){
          check(segments<=12,'Rectangle has too many segments');
          check(path.isPointInFill(new DOMPoint(17,17)) && !path.isPointInFill(new DOMPoint(16,16)),'Rectangle corner');
        }
        if(kind==='star'){
          check(path.isPointInFill(new DOMPoint(50,10.5)),'Sharp star tip');
          check(!path.isPointInFill(new DOMPoint(50,0)),'No star overshoot');
        }
        const clone=prepareSvgExport();forceFcmExportToRedLines(clone);
        const fcm=fcmCollectPaths(clone).paths;
        check(fcm.reduce((sum,p)=>sum+p.segments.length,0)<=segments+2,'FCM must preserve reduced curve count');
        if(kind==='circle')check(fcm.some(p=>p.segments.some(s=>s.type==='C')),'FCM should keep curves');
        const project=serializeEditableProject();loadEditableProject(project);
        check(objects[0].el.getAttribute('d')===d,'Project retains curves');
        // Re-run to check undo is a single image-to-vector operation.
        clearAll();const again=addObject('image',image.cloneNode(true),{});traceSourceId=again;traceImageData=pixels;
        document.getElementById('traceDo').click();undo();
        check(objects.length===1&&objects[0].type==='image','Undo restores image without duplicate trace');
      }
      return results;
    });
    assert.deepEqual(errors,[]);console.log(JSON.stringify(results,null,2));
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
