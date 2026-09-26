"""Rebuild assets: python extract_frames.py (requires opencv-python and numpy)."""
from pathlib import Path
import cv2
import numpy as np
import json
ROOT = Path(__file__).resolve().parent
cap = cv2.VideoCapture(str(ROOT.parent / 'character.mp4'))
# Screen-space clockwise anchors: right, down-right, down, down-left,
# left, up-left, up, up-right, right. Calibrated against this video.
anchors = [90, 110, 130, 155, 180, 205, 35, 60, 90]
def extract(index):
    cap.set(cv2.CAP_PROP_POS_FRAMES, int(index))
    ok, bgr = cap.read()
    if not ok:
        raise RuntimeError(f'Cannot decode source frame {index}')
    # Chroma-key the red backdrop, retaining a soft antialiased silhouette.
    b, g, r = [x.astype(np.float32) for x in cv2.split(bgr)]
    dominance = r - np.maximum(g, b)
    alpha = np.clip((g / np.maximum(r, 1) - 0.12) / 0.22, 0, 1)
    alpha = np.maximum(alpha, np.clip((65 - dominance) / 25, 0, 1))
    # Remove red spill only at the soft edge.
    edge = (alpha > 0) & (alpha < 1)
    r[edge] = np.minimum(r[edge], np.maximum(g[edge], b[edge]) + 20)
    rgba = np.dstack([b, g, r, alpha * 255]).astype(np.uint8)
    return rgba[:, 200:1080]
indices=[]
for i in range(64):
    sector, blend = divmod(i, 8)
    a, b = anchors[sector:sector+2]
    # The source returns to neutral after up-left. Bridge to the opening up
    # pose with nearest endpoint, avoiding unrelated neutral frames.
    index = (a if blend < 4 else b) if sector == 5 else round(a + (b-a)*blend/8)
    indices.append(index)
    cv2.imwrite(str(ROOT / 'frames' / f'frame_{i:02}.webp'), extract(index), [cv2.IMWRITE_WEBP_QUALITY, 90])
cv2.imwrite(str(ROOT / 'frames/center.webp'), extract(20), [cv2.IMWRITE_WEBP_QUALITY, 90])
(ROOT / 'frames/manifest.json').write_text(json.dumps({'count':64,'width':880,'height':720,'faceCenter':[0.48,0.40],'angleZero':'right','angleDirection':'clockwise','source':'character.mp4','sourceFrameIndices':indices,'centerSourceFrame':20}, indent=2)+'\n')
cap.release()
