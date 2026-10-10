/* Presentation-only Danish localisation. Never changes control values or design IDs. */
(() => {
  'use strict';
  const dictionary = __DICTIONARY__;
  const normalise = value => value.replace(/\s+/g, ' ').trim();
  const translatedNodes = new WeakMap();
  const translatedAttributes = new WeakMap();
  const numericPatterns = __NUMERIC_PATTERNS__.map(([source,parts])=>[new RegExp(source),parts]);
  const patterns = [
    [/^Box body (.+) · artwork height (.+) mm$/,(_,a,b)=>`Lyskasse ${a.replace("mask", "maske")} · motivhøjde ${b} mm`],
    [/^(\d+) fonts$/, (_,n)=>`${n} skrifttyper`],
    [/^Step (\d+) of (\d+)$/,(_,a,b)=>`Trin ${a} af ${b}`],
    [/^Colour (\d+)$/,(_,n)=>`Farve ${n}`],
    [/^Next: (.+)$/,(_,s)=>`Næste: ${translate(s)}`],
    [/^Project type: (.+)\. Change project$/,(_,s)=>`Projekttype: ${translate(s)}. Skift projekt`],
    [/^Material not set · (.+)$/,(_,s)=>`Materiale ikke valgt · ${s}`],
    [/^(.+) slider$/,(_,s)=>`${translate(s)} – skyder`],
    [/^(.+) mm slider$/,(_,s)=>`${translate(s)} mm – skyder`],
    [/^Hide (body|face|cap|back|desk base|joint keys) in preview$/,(_,s)=>`Skjul ${translate(s[0].toUpperCase()+s.slice(1)).toLowerCase()} i forhåndsvisning`],
    [/^(\d+) parts on (\d+) plates\. Choose your printer and check the slice\.$/,(_,a,b)=>`${a} dele på ${b} plader. Vælg printer, og kontrollér resultatet i sliceren.`],
    [/^Grid (.+) · Orthographic · mm$/,(_,s)=>`Gitter ${s} · ortografisk · mm`],
    [/^Editing preview · update prepared in (.+) s · print files use full detail$/,(_,s)=>`Redigeringsvisning · opdateret på ${s} s · printfiler bruger fuld detalje`],
    [/^Assembled: (.+) · depth (.+)$/,(_,a,b)=>`Samlet: ${a} · dybde ${b}`],
    [/^(.+) \/ (3D-printed face|Acrylic-face letter)$/,(_,a,b)=>`${a} / ${b==='3D-printed face'?'3D-printet front':'Bogstav med akrylfront'}`],
    [/^(.+) mm between LED centres · (.+) mm between cut marks\.$/,(_,a,b)=>`${a} mm mellem LED-centre · ${b} mm mellem klippemærker.`],
    [/^Inside corner radius: (.+) mm$/,(_,n)=>`Indvendig hjørneradius: ${n} mm`],
  ];
  function translate(value) {
    const key=normalise(value);
    if (Object.hasOwn(dictionary,key)) return dictionary[key];
    for(const [pattern,parts] of numericPatterns){const match=key.match(pattern);if(match)return parts.map(part=>typeof part==='number'?match[part]:part).join('');}
    for(const [pattern,replace] of patterns) if(pattern.test(key))return key.replace(pattern,replace);
    if(key.endsWith(' mm') && Object.hasOwn(dictionary,key.slice(0,-3)))return dictionary[key.slice(0,-3)]+' mm';
    return value;
  }
  function skip(element) {
    return !element || element.closest('script,style,textarea,input,[contenteditable="true"],code,pre,[data-no-translate],#dcLayers,#selectedDesignGraphic');
  }
  function text(node) {
    if(skip(node.parentElement)||translatedNodes.get(node)===node.nodeValue)return;
    const value=node.nodeValue;
    const result=translate(value);
    if(result!==value){const whitespace=value.match(/^(\s*)[\s\S]*?(\s*)$/);node.nodeValue=whitespace[1]+result+whitespace[2];translatedNodes.set(node,node.nodeValue);}
  }
  function attributes(element) {
    if(element.closest('script,style,[data-no-translate]'))return;
    const previous=translatedAttributes.get(element)||{};
    for(const attr of ['title','aria-label','placeholder','alt']){
      const value=element.getAttribute(attr);if(!value||previous[attr]===value)continue;
      const result=translate(value);if(result!==value){element.setAttribute(attr,result);previous[attr]=result;}
    }
    translatedAttributes.set(element,previous);
  }
  function visit(node) {
    if(node.nodeType===Node.TEXT_NODE){text(node);return;}
    if(node.nodeType!==Node.ELEMENT_NODE&&node.nodeType!==Node.DOCUMENT_NODE)return;
    if(node.nodeType===Node.ELEMENT_NODE){if(skip(node))return;attributes(node);}
    const walker=document.createTreeWalker(node,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
    let child;while(child=walker.nextNode())child.nodeType===Node.TEXT_NODE?text(child):attributes(child);
  }
  const observer=new MutationObserver(records=>{
    for(const r of records){
      if(r.type==='characterData')text(r.target);
      else if(r.type==='attributes')attributes(r.target);
      else for(const node of r.addedNodes)visit(node);
    }
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','aria-label','placeholder','alt']});
  visit(document);
  // Native confirmation messages are presentation too; retain the original return value.
  const confirm=window.confirm.bind(window),alert=window.alert.bind(window);
  window.confirm=message=>confirm(translate(String(message)));
  window.alert=message=>alert(translate(String(message)));
})();
