#!/usr/bin/env python3
"""Inspect actual exported files with trimesh, NumPy and the standard library."""
import io,json,pathlib,sys,zipfile,xml.etree.ElementTree as ET
import numpy as np
import trimesh
out=pathlib.Path(sys.argv[1] if len(sys.argv)>1 else '/tmp/letter-studio-exports')
report=[]
ns={'m':'http://schemas.microsoft.com/3dmanufacturing/core/2015/02'}
def check_3mf(data,name):
    z=zipfile.ZipFile(io.BytesIO(data));assert z.testzip() is None
    assert '[Content_Types].xml' in z.namelist() and '_rels/.rels' in z.namelist()
    relationships=ET.fromstring(z.read('_rels/.rels'))
    for r in relationships:
        if r.get('TargetMode')!='External': assert r.get('Target').lstrip('/') in z.namelist(),(name,r.attrib)
    models=[]
    for p in z.namelist():
        if not p.endswith('.model'):continue
        root=ET.fromstring(z.read(p));assert root.get('unit')=='millimeter'
        ids={o.get('id') for o in root.findall('m:resources/m:object',ns)}
        for item in root.findall('m:build/m:item',ns)+root.findall('.//m:component',ns):
            assert item.get('objectid') in ids
            if item.get('transform'):
                transform=np.array([float(v) for v in item.get('transform').split()]);assert len(transform)==12 and np.isfinite(transform).all()
        triangles=0
        for mesh in root.findall('.//m:mesh',ns):
            vs=mesh.findall('m:vertices/m:vertex',ns);ts=mesh.findall('m:triangles/m:triangle',ns)
            assert vs and ts
            values=np.array([[float(v.get(k)) for k in ('x','y','z')] for v in vs]);assert np.isfinite(values).all()
            for t in ts:assert all(0<=int(t.get(k))<len(vs) for k in ('v1','v2','v3'))
            triangles+=len(ts)
        assert triangles>0
        models.append({'path':p,'objects':len(ids),'triangles':triangles,'unit':'millimeter'})
    assert models
    if 'Metadata/project_settings.config' in z.namelist():
        settings=json.loads(z.read('Metadata/project_settings.config'))
        colours=settings['filament_colour'];assert colours and all(len(c)==7 and c.startswith('#') for c in colours)
        config=ET.fromstring(z.read('Metadata/model_settings.config'))
        for e in config.iter('metadata'):
            if e.get('key')=='extruder':assert 1<=int(e.get('value'))<=len(colours)
    return {'file':name,'models':models,'metadata': [p for p in z.namelist() if p.startswith('Metadata/')]}
for p in sorted(out.glob('*.zip')):
    z=zipfile.ZipFile(p);assert z.testzip() is None
    result={'file':p.name,'meshes':[],'3mf':[]}
    for n in z.namelist():
        if n.endswith('.stl'):
            data=z.read(n);assert len(data)>=84
            count=int.from_bytes(data[80:84],'little');assert len(data)==84+count*50 and count>0
            mesh=trimesh.load(io.BytesIO(data),file_type='stl',process=True)
            assert np.isfinite(mesh.vertices).all() and np.all(mesh.extents>0)
            # Record upstream topology defects; never silently repair the actual export.
            edge_counts=np.bincount(mesh.edges_unique_inverse)
            assert mesh.is_winding_consistent and mesh.volume>0,(p.name,n,'orientation')
            result['meshes'].append({'file':n,'triangles':len(mesh.faces),'extents_mm':mesh.extents.tolist(),'bounds_mm':mesh.bounds.tolist(),'watertight':bool(mesh.is_watertight),'boundary_edges':int(np.sum(edge_counts==1)),'nonmanifold_edges':int(np.sum(edge_counts>2)),'volume_mm3':float(mesh.volume),'euler_number':int(mesh.euler_number)})
        elif n.endswith('.3mf'):result['3mf'].append(check_3mf(z.read(n),n))
    assert result['meshes']
    if p.stem in ['letter-a','reopened-a']:
        body=next(m for m in result['meshes'] if '/part-01-body' in m['file']);assert abs(body['extents_mm'][1]-100)<0.02
        assert abs(body['extents_mm'][2]-35)<0.02
    if p.stem=='dimensions-fit':
        settings=json.loads(z.read('settings.json'));assert settings['parameters']['wall']==2.4 and settings['parameters']['frontFit']==0.3
        body=next(m for m in result['meshes'] if '/part-01-body' in m['file']);assert abs(body['extents_mm'][1]-110)<0.02 and abs(body['extents_mm'][2]-40)<0.02
    if p.stem=='split-lightbox':assert any('key' in m['file'].lower() for m in result['meshes'])
    report.append(result)
for p in sorted(out.glob('*.3mf')):report.append(check_3mf(p.read_bytes(),p.name))
(out/'geometry-report.json').write_text(json.dumps(report,indent=2)+'\n')
print('PASS:',len(report),'export archives; finite triangles, STL orientation and topology diagnostics, dimensions, 3MF units/relationships/indices.')
