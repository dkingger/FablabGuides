const assert=require('node:assert/strict');
const fs=require('node:fs');
const puppeteer=require('puppeteer');
(async()=>{
  const executablePath=process.env.PUPPETEER_EXECUTABLE_PATH||['/usr/bin/google-chrome','/usr/bin/chromium','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(p=>fs.existsSync(p));
  const project=process.argv[3]?JSON.parse(fs.readFileSync(process.argv[3],'utf8')):null;
  const browser=await puppeteer.launch({headless:true,executablePath,args:['--no-sandbox']});
  try{
    const page=await browser.newPage(),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.setViewport({width:1440,height:1000});
    await page.goto((process.argv[2]||'http://127.0.0.1:8765')+'/vektor-viktor.html');
    const fixture=await page.evaluate(project=>{
      if(project)loadEditableProject(project);
      else{
        clearAll();
        const ids=[];
        for(const d of ['M 40 20 H 90 V 70 H 40 Z','M 30 70 H 100 V 130 H 30 Z']){
          const el=document.createElementNS(SVG_NS,'path');el.setAttribute('d',d);
          applyMode(el,'cut');ids.push(addObject('traced',el,{mode:'cut'}));
        }
        selectedIds=ids;groupSelected();objects[0].el.setAttribute('transform','translate(20 10)');
      }
      deselectAll();return serializeEditableProject();
    },project);
    const points=await page.evaluate(()=>{
      const obj=objects[0],box=getWorldBBox(obj),points=[];
      for(let y=0;y<30;y++)for(let x=0;x<30;x++){
        const pt={x:box.x+(x+.5)*box.width/30,y:box.y+(y+.5)*box.height/30};
        const filled=Array.from(obj.el.querySelectorAll('path')).some(el=>{
          const q=new DOMPoint(pt.x,pt.y).matrixTransform(matrixRelativeToObjects(el).inverse());
          return el.isPointInFill(q);
        });
        if(filled){
          if(!objectMoveHit(obj,pt,1))throw Error('Missed filled area at '+JSON.stringify(pt));
          points.push(pt);
        }
      }
      if(!points.length)throw Error('No filled test points');
      const extreme=(axis,dir)=>points.reduce((a,b)=>dir*b[axis]>dir*a[axis]?b:a);
      return {count:points.length,edges:[extreme('y',-1),extreme('y',1),extreme('x',-1),extreme('x',1)]};
    });
    for(const pt of points.edges){
      const drag=await page.evaluate(({fixture,pt})=>{
        loadEditableProject(fixture);deselectAll();snapEnabled=false;
        const matrix=svg.getScreenCTM(),a=new DOMPoint(pt.x,pt.y).matrixTransform(matrix),b=new DOMPoint(pt.x+5,pt.y+5).matrixTransform(matrix);
        return {a:{x:a.x,y:a.y},b:{x:b.x,y:b.y},before:getWorldBBox(objects[0])};
      },{fixture,pt});
      await page.mouse.move(drag.a.x,drag.a.y);await page.mouse.down();
      assert.equal(await page.evaluate(()=>!!dragOffset),true,'Click starts group drag');
      await page.mouse.move(drag.b.x,drag.b.y,{steps:5});await page.mouse.up();
      const delta=await page.evaluate(before=>{const b=getWorldBBox(objects[0]);return {x:b.x-before.x,y:b.y-before.y}},drag.before);
      assert.ok(Math.abs(delta.x-5)<0.5&&Math.abs(delta.y-5)<0.5,'Whole group follows pointer');
      await page.evaluate(()=>undo());
      const restored=await page.evaluate(before=>{const b=getWorldBBox(objects[0]);return Math.abs(b.x-before.x)<0.01&&Math.abs(b.y-before.y)<0.01},drag.before);
      assert.equal(restored,true,'Undo restores group position');
    }
    await page.evaluate(()=>{
      clearAll();const el=document.createElementNS(SVG_NS,'rect');
      for(const [k,v] of Object.entries({x:20,y:20,width:100,height:100}))el.setAttribute(k,v);
      const id=addObject('rect',el,{mode:'cut'});
      if(objectMoveHit(objects.find(o=>o.id===id),{x:70,y:70},1))throw Error('Ordinary outline interior must remain click-through');
    });
    assert.deepEqual(errors,[]);
    console.log(`PASS: ${points.count} filled points, dragging from top/bottom/left/right, undo, ordinary outline click-through`);
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
