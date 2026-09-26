/** Dependency-free, opt-in, multiple-instance cursor portraits. No video playback. */
const instances = new WeakMap();
const defaultFrames = new URL('./frames/', import.meta.url);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const number = (value, fallback) => Number.isFinite(Number(value)) && value !== undefined ? Number(value) : fallback;

export function frameForAngle(angle, anchors) {
  const degrees = ((angle * 180 / Math.PI + 180) % 360 + 360) % 360 - 180;
  for (let i = 1; i < anchors.length; i++) {
    const [a, start] = anchors[i - 1], [b, end] = anchors[i];
    if (degrees <= b) {
      const step = (end - start + 64) % 64;
      return Math.round(start + step * (degrees - a) / (b - a)) % 64;
    }
  }
  return 0;
}

export function mountCursorCharacter(root) {
  if (instances.has(root)) return instances.get(root);
  const canvas = root.querySelector('.flg-cursor-character__canvas');
  const fallback = root.querySelector('.flg-cursor-character__fallback');
  const ctx = canvas?.getContext('2d');
  if (!ctx || !fallback) return { destroy() {} };
  const base = new URL(root.dataset.flgFrames || defaultFrames, document.baseURI);
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const controller = new AbortController();
  const { signal } = controller;
  let disposed = false, loaded = false, loading = false, visible = true;
  let images = [], center, manifest, raf = 0, angle = 0, previous = null, previousTime = 0;
  let pointer = { x: 0, y: 0, active: false };
  let size = { width: 0, height: 0 };
  const enabled = () => !motion.matches && fine.matches;
  const smoothing = clamp(number(root.dataset.flgSmoothing, .26), .01, 1);
  const deadzoneRatioOverride = number(root.dataset.flgDeadzoneRatio, NaN);
  const face = () => [clamp(number(root.dataset.flgFaceX, manifest.faceCenter[0]),0,1), clamp(number(root.dataset.flgFaceY, manifest.faceCenter[1]),0,1)];

  function schedule() {
    if (!disposed && loaded && visible && !document.hidden && !raf) raf = requestAnimationFrame(draw);
  }
  function resize() {
    const bounds = root.getBoundingClientRect();
    size = { width: bounds.width, height: bounds.height };
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(size.width * dpr));
    canvas.height = Math.max(1, Math.round(size.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    previous = null; schedule();
  }
  function draw(time) {
    raf = 0;
    if (disposed || !loaded || !visible || document.hidden) return;
    const bounds = root.getBoundingClientRect();
    // Contain-fit math keeps face coordinates accurate for any width/height ratio.
    const scale = Math.min(size.width / manifest.width, size.height / manifest.height);
    const width = manifest.width * scale, height = manifest.height * scale;
    const x = (size.width - width) / 2, y = (size.height - height) / 2;
    const [fx, fy] = face();
    const dx = pointer.x - (bounds.left + x + width * fx);
    const dy = pointer.y - (bounds.top + y + height * fy);
    const target = Math.atan2(dy, dx);
    const difference = Math.atan2(Math.sin(target-angle), Math.cos(target-angle));
    const dt = Math.min(previousTime ? time-previousTime : 1000/60, 64);
    angle += difference * (1 - Math.pow(1-smoothing, dt/(1000/60)));
    angle = Math.atan2(Math.sin(angle), Math.cos(angle));
    previousTime = time;
    const ratio = Number.isFinite(deadzoneRatioOverride)
      ? deadzoneRatioOverride
      : number(manifest.deadzoneRatio, NaN);
    const radius = Number.isFinite(ratio)
      ? Math.max(0, Math.min(width, height) * ratio)
      : Math.max(0, number(root.dataset.flgDeadzone, Math.min(width,height)*.12));
    const neutral = !enabled() || !pointer.active || Math.hypot(dx,dy) <= radius;
    const index = neutral ? 'center' : frameForAngle(angle, manifest.angleAnchors);
    if (index !== previous) {
      // Erase before drawing exactly one fully opaque image. Never blend poses.
      ctx.clearRect(0,0,size.width,size.height);
      ctx.globalAlpha = 1;
      ctx.drawImage(neutral ? center : images[index],x,y,width,height);
      root.dataset.flgFrame = String(index);
      root.setAttribute('data-flg-ready','');
      previous = index;
    }
    if (!neutral && Math.abs(difference) > .0005) schedule();
  }
  function move(event) {
    if (event.pointerType === 'touch' || !enabled()) return;
    pointer = { x: event.clientX, y: event.clientY, active: true };
    schedule();
  }
  function leave() { pointer.active = false; schedule(); }
  function decode(url) {
    const image = new Image(); image.decoding = 'async'; image.src = url;
    return image.decode().then(() => image);
  }
  async function load() {
    if (loading || loaded || disposed || !enabled()) return;
    loading = true;
    root.dataset.flgStatus = 'loading';
    try {
      const response = await fetch(new URL('manifest.json',base), { signal });
      if (!response.ok) throw new Error('Missing frame manifest');
      manifest = await response.json();
      if (!manifest.width || !manifest.height || manifest.sourceIndices?.length !== 64 || manifest.angleAnchors?.length !== 9 || manifest.faceCenter?.length !== 2) throw new Error('Invalid frame manifest');
      const decoded = await Promise.all([
        decode(new URL('center.webp',base)),
        ...Array.from({length:64},(_,i)=>decode(new URL(`frame_${String(i).padStart(2,'0')}.webp`,base)))
      ]);
      if (disposed) return;
      [center,...images] = decoded; loaded = true;
      root.dataset.flgStatus = 'ready'; resize();
    } catch (error) {
      if (disposed) return;
      root.dataset.flgStatus = 'fallback';
      root.removeAttribute('data-flg-ready');
      // Keep the actual <img> visible if any directional asset fails.
    } finally { loading = false; }
  }
  function preference() { leave(); load(); }
  const moveEvent = 'PointerEvent' in window ? 'pointermove' : 'mousemove';
  window.addEventListener(moveEvent,move,{ passive:true,signal });
  document.documentElement.addEventListener('PointerEvent' in window ? 'pointerleave' : 'mouseleave',leave,{signal});
  window.addEventListener('blur',leave,{signal});
  window.addEventListener('scroll',schedule,{capture:true,passive:true,signal});
  window.addEventListener('resize',resize,{passive:true,signal});
  document.addEventListener('visibilitychange',leave,{signal});
  motion.addEventListener('change',preference,{signal}); fine.addEventListener('change',preference,{signal});
  const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  resizeObserver?.observe(root);
  const observer = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible) { previousTime = 0; schedule(); }
  }) : null;
  observer?.observe(root);
  const instance = { destroy() {
    disposed = true; controller.abort(); cancelAnimationFrame(raf);
    resizeObserver?.disconnect(); observer?.disconnect();
    root.removeAttribute('data-flg-ready'); delete root.dataset.flgFrame; delete root.dataset.flgStatus;
    images = []; center = undefined; instances.delete(root);
  } };
  instances.set(root,instance); resize(); load();
  return instance;
}
export function initCursorCharacters(scope = document) {
  return Array.from(scope.querySelectorAll('[data-flg-character]'),mountCursorCharacter);
}
// Module scripts are deferred; only explicitly marked elements are initialized.
initCursorCharacters();
