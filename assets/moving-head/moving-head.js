(() => {
  'use strict';
  // Resolve assets beside this script, independently of the host page URL.
  const base = new URL('frames/', document.currentScript.src);
  const tau = Math.PI * 2;
  const frames = Array.from({ length: 64 }, (_, i) => {
    const image = new Image();
    image.src = new URL(`frame_${String(i).padStart(2, '0')}.webp`, base).href;
    return image;
  });
  const neutral = new URL('center.webp', base).href;
  document.querySelectorAll('[data-moving-head]').forEach(widget => {
    if (widget.dataset.movingHeadInitialized) return;
    widget.dataset.movingHeadInitialized = 'true';
    const image = widget.querySelector('.moving-head__image');
    if (!image) return;
    let pointer = null, angle = 0, previous = 0, raf = 0;
    const show = src => { if (image.src !== src) image.src = src; };
    function tick(time) {
      raf = 0;
      if (!widget.isConnected) return;
      if (!pointer) { show(neutral); previous = 0; return; }
      const rect = widget.getBoundingClientRect();
      const dx = pointer.x - (rect.left + rect.width * 0.48);
      const dy = pointer.y - (rect.top + rect.height * 0.40);
      if (Math.hypot(dx, dy) < rect.width * 0.065) {
        show(neutral); previous = 0; return;
      }
      const target = Math.atan2(dy, dx);
      const delta = Math.atan2(Math.sin(target - angle), Math.cos(target - angle));
      const dt = previous ? Math.min((time - previous) / 1000, 0.05) : 1 / 60;
      previous = time;
      angle += delta * (1 - Math.exp(-14 * dt));
      const index = Math.round(((angle % tau + tau) % tau) / tau * 64) % 64;
      const frame = frames[index];
      if (frame.complete && frame.naturalWidth) show(frame.src);
      if (Math.abs(delta) > 0.001 || !frame.complete) raf = requestAnimationFrame(tick);
      else previous = 0;
    }
    function wake() { if (!raf) raf = requestAnimationFrame(tick); }
    function reset() { pointer = null; wake(); }
    window.addEventListener('pointermove', event => {
      pointer = { x: event.clientX, y: event.clientY }; wake();
    }, { passive: true });
    window.addEventListener('pointerdown', event => {
      pointer = { x: event.clientX, y: event.clientY }; wake();
    }, { passive: true });
    window.addEventListener('pointerup', event => { if (event.pointerType !== 'mouse') reset(); });
    window.addEventListener('pointercancel', reset);
    document.documentElement.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    window.addEventListener('resize', wake);
    window.addEventListener('scroll', wake, { passive: true });
  });
})();
