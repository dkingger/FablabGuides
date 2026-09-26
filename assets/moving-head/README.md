# Moving Head

Standalone widget extracted only from cursor-hero2/public/character.mp4.

Copy `moving-head.css`, `moving-head.js`, and the complete `frames/` folder
into one directory in your project. `moving-head.html` is a minimal demo you
can copy too, or embed this markup (adjust the directory prefix as needed):

```html
<link rel="stylesheet" href="moving-head/moving-head.css">
<div class="moving-head" data-moving-head>
  <img class="moving-head__image" src="moving-head/frames/center.webp"
       width="880" height="720" alt="Animated character following your pointer"
       draggable="false">
</div>
<script src="moving-head/moving-head.js" defer></script>
```

`data-moving-head` initializes each widget when the deferred script runs.
Keep `frames/` beside the JavaScript file; frame URLs resolve relative to that
script. No MP4, Python, libraries, or build step are needed on the website.
CSS affects only the widget and its image.

Set `style="--moving-head-width: 420px"` on the widget to change its width.
Height follows the 880:720 aspect ratio and width shrinks to fit its parent.
For a fixed box, set width and height on the widget; the image uses contain.
The face center is 48% across and 40% down; the deadzone is 6.5% of width.

Mouse movement controls direction; touch movement also works and release
returns to neutral. Pointer exit and window blur restore neutral. A single
image displays each frame without crossfading or video seeking. Direction is
smoothed with frame-rate-independent shortest-path angle interpolation.

The source has no continuous up-left-to-up transition: nearest source poses
bridge this small arc. The manifest documents the source frame mapping;
64 directional assets include repeated source poses in this gap.

Run from this folder with `python -m http.server 8082`, then open
http://localhost:8082/moving-head.html. Alternatively, serve the parent folder
and open http://localhost:8082/moving-head/moving-head.html.

Optional rebuild: install `opencv-python` and `numpy`, then run
`python extract_frames.py`. Keep the original video one directory above this
folder. The extractor crops empty side margins, removes the red backdrop,
and writes 64 WebP frames, center.webp, and manifest.json.

Verified in Chromium at desktop and 375px mobile sizes: all 64 directional
frames and neutral decode, cardinal cursor directions, deadzone, touch/reset,
no horizontal overflow, and no JavaScript errors.
