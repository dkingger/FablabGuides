from pathlib import Path
import struct,zipfile,xml.etree.ElementTree as E,json,math
root=Path('/tmp/modelsplitter-qa');report={}
for name in ['egg.stl','imported.stl']:
 data=(root/name).read_bytes();n=struct.unpack_from('<I',data,80)[0];assert len(data)==84+50*n
 assert all(math.isfinite(x) for i in range(n) for x in struct.unpack_from('<12f',data,84+i*50))
 report[name]={'triangles':n,'bytes':len(data),'valid_binary_stl':True}
with zipfile.ZipFile(root/'parts.3mf') as z:
 assert z.testzip() is None
 tree=E.fromstring(z.read('3D/3dmodel.model'));ns={'m':'http://schemas.microsoft.com/3dmanufacturing/core/2015/02'}
 objects=tree.findall('.//m:object',ns);items=tree.findall('.//m:item',ns)
 assert len(objects)==len(items)==2
 report['parts.3mf']={'objects':len(objects),'build_items':len(items),'triangles':[len(o.findall('.//m:triangle',ns)) for o in objects]}
data=(root/'egg.msproj').read_bytes();assert data.startswith(b'MODELSPLITTER-PROJECT\n')
report['egg.msproj']={'bytes':len(data),'header_valid':True,'browser_roundtrip':'checked by verify.cjs'}
(root/'export-report.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
