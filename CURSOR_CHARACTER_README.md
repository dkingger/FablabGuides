# FabLabGuides cursor character

A standalone HTML/CSS/JavaScript enhancement for the existing static FabLabGuides site. No framework, build step, npm dependency, global styles, or changes to existing pages. Nothing is inserted automatically unless a page contains the opt-in markup below. The demo is unlinked from the live navigation.

## Created files

- `assets/cursor-character/cursor-character.js` — ES module with automatic opt-in initialization and optional lifecycle exports.
- `assets/cursor-character/cursor-character.css` — styles scoped to `flg-cursor-character` classes.
- `assets/cursor-character/frames/frame_00.webp` through `frame_63.webp` — 64 directional frames.
- `assets/cursor-character/frames/center.webp` — neutral portrait and HTML fallback.
- `assets/cursor-character/frames/manifest.json` — dimensions, source hash/timeline, frame selection, face position, and directional calibration.
- `assets/cursor-character/timeline.jpg` — source inspection contact sheet.
- `assets/cursor-character/extracted-contact-sheet.jpg` — selected frames for visual verification.
- `tools/extract_cursor_character.py` — Python/OpenCV extraction utility.
- `tools/test_cursor_character.mjs` — optional browser regression checks; development-only dependency described below.
- `cursor-character-demo.html` — isolated, noindex demo.
- `CURSOR_CHARACTER_README.md` — this document.

No existing FabLabGuides files were modified. Original image/video files are untouched. The source video remains at `/home/johsdahl/Downloads/cursor-hero/public/character.mp4`; it is not a browser dependency and does not need to be deployed.

## Preview locally

From the FabLabGuides directory:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080/cursor-character-demo.html`. Use HTTP, not `file://`, because the module fetches its manifest. Move around the portrait, then move to its face. Desktop browsers preload and decode all 65 images before enabling animation. Touch-only and reduced-motion users retain the neutral image without downloading animation frames.

## Insert into a page later

For a page in the repository root, place this in `<head>`:

```html
<link rel="stylesheet" href="assets/cursor-character/cursor-character.css">
<script type="module" src="assets/cursor-character/cursor-character.js"></script>
```

Place this exact block wherever the character belongs in the page content:

```html
<div class="flg-cursor-character" data-flg-character
     role="img" aria-label="FabLab-figur, der følger markøren">
  <img class="flg-cursor-character__fallback"
       src="assets/cursor-character/frames/center.webp"
       width="1280" height="720"
       alt="FabLab-figur, der kigger mod dig">
  <canvas class="flg-cursor-character__canvas" aria-hidden="true"></canvas>
</div>
```

For an `en/` page, prefix the stylesheet, script, and image URLs with `../`. Frame/manifest URLs automatically resolve relative to the JS module, so they work on subdirectory hosting such as GitHub Pages. Import the script only once per page. Multiple character blocks are supported.

The actual `<img>` is visible with JavaScript disabled, while loading, on touch-only devices, with reduced motion, and if any frame or manifest fails. The accessible label stays on the wrapper when the canvas is active. Keep `center.webp` deployed: if the fallback itself is missing, the browser can only show its alt text.

## Size and position

Default width is 280px, constrained to its parent, with a 16:9 aspect ratio. To change width, add:

```html
style="--flg-character-width: 220px"
```

For explicit width and height, use `style="width:220px;height:180px;aspect-ratio:auto"`. Images are contained without stretching; additional space is transparent. Face coordinates account for the contained image. Set `--flg-character-radius:0px` to remove rounded corners. The original red video background is intentionally preserved inside the image; the module never changes the website background.

Move the HTML block to another location to change its normal-flow placement. To align it right in a section, add `margin-inline-start:auto` to its inline style. If you later want a corner widget, an optional wrapper style is `position:fixed;right:20px;bottom:20px;z-index:10;--flg-character-width:180px`. Check that it does not cover site controls on mobile. No fixed positioning is enabled by default.

Optional `data-` attributes on the wrapper:

| Attribute | Default | Purpose |
| --- | --- | --- |
| `data-flg-smoothing="0.26"` | 0.26 | Lerp factor per 60Hz frame, adjusted for actual elapsed time. |
| `data-flg-deadzone="24"` | 12% of displayed image's smaller dimension | Neutral zone radius in CSS pixels. |
| `data-flg-face-x="0.5"` | From manifest | Face center X, normalized 0–1 within the source image. |
| `data-flg-face-y="0.36"` | From manifest | Face center Y, normalized 0–1. |
| `data-flg-frames="other/frames/"` | Next to module | Alternate asset folder, resolved relative to the page. Include trailing slash. |

## Behavior and lifecycle

The module uses pointer events, falling back to mouse events in browsers without PointerEvent. Touch movement does not animate it. `atan2(dy, dx)` feeds shortest-path circular interpolation; calibrated angle anchors map to a nearest frame index from 0–63. Each repaint clears the canvas and draws exactly one frame at opacity 1. There is no crossfade, CSS 3D transform, or video element. Rendering stops when settled, offscreen, or the document is hidden, and resumes on movement/resize/scroll. CSS affects only the component classes. Existing event handlers are neither replaced nor cancelled.

For dynamically inserted markup or manual cleanup:

```js
import { mountCursorCharacter } from './assets/cursor-character/cursor-character.js';
const element = document.querySelector('[data-flg-character]');
const character = mountCursorCharacter(element); // idempotent, also safe after auto-init
// Before dynamically removing this element:
character.destroy(); // removes listeners/observers, stops RAF, restores fallback
// element.remove();
```

## Remove it

Remove the character HTML block and its CSS/JS imports from any page where you added them. If no page uses it, delete the files listed above. No existing site code needs to be reverted. For dynamic removal, call `destroy()` first.

## Extract again after replacing the animation

Python is needed only during asset preparation:

```sh
python -m venv /tmp/flg-character-venv
/tmp/flg-character-venv/bin/pip install opencv-python-headless
```

First inspect the replacement video:

```sh
/tmp/flg-character-venv/bin/python tools/extract_cursor_character.py \
  --source /path/to/character.mp4 --inspect-only
```

Open `assets/cursor-character/timeline.jpg`. The console prints frame count, FPS, duration, and dimensions. Identify the directional segment, forward-facing frame, and the best source frame for each direction. This requires visual selection: a replacement animation may have a different order/timing. Do not blindly reuse this video's calibration.

The command used for the supplied video is:

```sh
/tmp/flg-character-venv/bin/python tools/extract_cursor_character.py \
  --source /home/johsdahl/Downloads/cursor-hero/public/character.mp4 \
  --start 0 --end 216 --center 232 \
  --anchors 150,190,30,55,76,94,112,137,150
```

`--end` is exclusive. The utility extracts 64 unique, evenly spaced frames in that range at WebP quality 100. `--anchors` lists source frame numbers for **left, upper-left, up, upper-right, right, lower-right, down, lower-left, left**, corresponding to -180° through +180° in 45° steps with screen Y downward. First and last anchors must match. This implementation expects a clockwise pose progression in source order, allowing a wrap at the sequence seam. For reversed or multiple-loop footage, trim/reorder the source into a single clockwise sequence first, preserving your original file. Update `faceCenter` in the generated manifest if the replacement character's face is elsewhere.

This source: 240 frames, 24 fps, 10 seconds, 1280×720. Selected directional segment: frames 0–215 (0–9s); neutral: frame 232 (9.667s). The neutral ending is excluded from the directional set. Inspect `extracted-contact-sheet.jpg` after each run. Source blinking, body motion, and an imperfect loop closure remain visible; interpolation smooths cursor angle, not the original artwork. No synthetic poses or blending are introduced.

The script overwrites only generated output assets and never alters the source MP4. Deploy the entire frames folder together, including the updated manifest. Contact sheets and Python/testing tools are not runtime dependencies.

## Verification

The browser check uses Playwright as an **external development tool**, not a site dependency:

```sh
npm install --prefix /tmp/flg-browser-check playwright
FLG_PLAYWRIGHT=/tmp/flg-browser-check/node_modules/playwright/index.mjs \
  node tools/test_cursor_character.mjs http://127.0.0.1:8080
```

It uses `/usr/bin/chromium` by default; set `FLG_CHROMIUM` if needed. Checks include all 65 images decoding, directions/deadzone, no MP4 requests, touch/reduced-motion/no-JS/error fallbacks, multiple instances/cleanup, and existing Danish/English homepage and guide rendering. Screenshots are written under `/tmp`. No npm configuration or framework is added to FabLabGuides.
