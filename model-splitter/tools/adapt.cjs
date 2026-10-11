const fs=require('node:fs'),path=require('node:path');
const acorn=require('acorn');
const root=path.resolve(__dirname,'..');
const main=fs.readdirSync(path.join(root,'public/assets')).find(x=>/^index-.*\.js$/.test(x));
if(!main) throw Error('Missing public/assets/index-*.js');
const file=path.join(root,'public/assets',main);let src=fs.readFileSync(file,'utf8');
const ast=acorn.parse(src,{ecmaVersion:'latest',sourceType:'module'});
const targets={KC:'return null;',GC:'return true;',NE:'return;',AE:'return;',IE:'return;',uP:'return;',lP:'return;'};
const edits=[]; const found=new Set();
function walk(n){if(!n||typeof n!=='object')return;if(n.type==='FunctionDeclaration'&&targets[n.id?.name]){edits.push([n.body.start,n.body.end,'{'+targets[n.id.name]+'}']);found.add(n.id.name);}for(const [k,v] of Object.entries(n)){if(k==='start'||k==='end')continue;if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==='object')walk(v);}}
walk(ast);for(const name of Object.keys(targets))if(!found.has(name))throw Error('Missing '+name);
for(const [start,end,replacement] of edits.sort((a,b)=>b[0]-a[0]))src=src.slice(0,start)+replacement+src.slice(end);
// new URL(..., import.meta.url) starts inside assets, unlike page-root resources.
src=src.replaceAll('/assets/cut-worker-','./cut-worker-').replaceAll('/assets/manifold-','./manifold-');
src=src.replace('JP=await ah()}catch(e){','JP=await ah()}catch(e){console.error("Local geometry startup:",e);');
fs.writeFileSync(file,src);
function tree(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())tree(p);else if(e.name.endsWith('.js')&&p!==file){let s=fs.readFileSync(p,'utf8').replaceAll('/assets/','./');fs.writeFileSync(p,s);}}}tree(path.join(root,'public/assets'));
console.log('Patched public runtime: external telemetry/feedback loaders disabled and local asset paths fixed.');
