#!/usr/bin/env python3
"""Inspect a head-turn video and extract 64 opaque WebPs without altering the source."""
import argparse
import hashlib
import json
from pathlib import Path
import cv2
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
p = argparse.ArgumentParser(description=__doc__)
p.add_argument('--source', type=Path, default=ROOT / 'character.mp4')
p.add_argument('--output', type=Path, default=ROOT / 'assets/cursor-character/frames')
p.add_argument('--start', type=int, default=0, help='First directional source frame')
p.add_argument('--end', type=int, default=216, help='Exclusive directional end; excludes neutral ending')
p.add_argument('--center', type=int, default=232, help='Visually selected forward-facing frame')
p.add_argument('--anchors', default='150,190,30,55,76,94,112,137,150', help='Source frames for angles -180,-135,-90,-45,0,45,90,135,180')
p.add_argument('--inspect-only', action='store_true', help='Write timeline contact sheet without extracting')
a = p.parse_args()
cap = cv2.VideoCapture(str(a.source))
if not cap.isOpened():
    raise SystemExit(f'Cannot open source: {a.source}')
count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT)); fps = cap.get(cv2.CAP_PROP_FPS)
if count < 1 or fps <= 0:
    raise SystemExit('Source contains no readable timeline')
print(f'{a.source}: {count} frames, {fps:g} fps, {count/fps:.3f} seconds, {int(cap.get(3))}×{int(cap.get(4))}')
a.output.mkdir(parents=True, exist_ok=True)
def read(index):
    cap.set(cv2.CAP_PROP_POS_FRAMES, int(index))
    ok, frame = cap.read()
    if not ok: raise RuntimeError(f'Cannot decode source frame {index}')
    return frame

def sheet(indices, path):
    thumbs = []
    for i in indices:
        frame = read(i); h,w = frame.shape[:2]
        thumb = cv2.resize(frame,(240,round(240*h/w)),interpolation=cv2.INTER_AREA)
        cv2.putText(thumb,f'{i} / {i/fps:.2f}s',(7,20),cv2.FONT_HERSHEY_SIMPLEX,.48,(255,255,255),1,cv2.LINE_AA)
        thumbs.append(thumb)
    cv2.imwrite(str(path),np.vstack([np.hstack(thumbs[i:i+8]) for i in range(0,len(thumbs),8)]))
sheet(np.linspace(0,count-1,40).astype(int),a.output.parent/'timeline.jpg')
if a.inspect_only:
    cap.release(); raise SystemExit(0)
if not 0 <= a.start < a.end <= count or a.end-a.start < 64 or not 0 <= a.center < count:
    raise SystemExit('Invalid range: choose at least 64 source frames and a valid center')
anchors = [int(s) for s in a.anchors.split(',')]
if len(anchors)!=9 or any(not a.start <= i < a.end for i in anchors) or anchors[0]!=anchors[-1]:
    raise SystemExit('Provide nine directional anchor frames in the selected range; first and last must match')
indices = np.floor(np.linspace(a.start,a.end,64,endpoint=False)).astype(int)
for index, source in enumerate(indices):
    if not cv2.imwrite(str(a.output/f'frame_{index:02}.webp'),read(source),[cv2.IMWRITE_WEBP_QUALITY,100]):
        raise RuntimeError('Could not encode WebP')
neutral = read(a.center)
if not cv2.imwrite(str(a.output/'center.webp'),neutral,[cv2.IMWRITE_WEBP_QUALITY,100]):
    raise RuntimeError('Could not encode neutral WebP')
# Timing calibration maps actual source poses to cursor angles, independently of extraction spacing.
angle_anchors = [[angle,int(np.argmin(abs(indices-source)))] for angle,source in zip(range(-180,181,45),anchors)]
metadata = {'source':a.source.name,'sha256':hashlib.sha256(a.source.read_bytes()).hexdigest(),'totalFrames':count,'fps':fps,'durationSeconds':count/fps,'width':neutral.shape[1],'height':neutral.shape[0],'start':a.start,'endExclusive':a.end,'sourceIndices':indices.tolist(),'centerSourceFrame':a.center,'faceCenter':[.5,.36],'angleAnchors':angle_anchors}
(a.output/'manifest.json').write_text(json.dumps(metadata,indent=2)+'\n')
sheet(indices,a.output.parent/'extracted-contact-sheet.jpg')
cap.release()
print(f'Wrote 64 directional frames + center.webp and manifest to {a.output}')
