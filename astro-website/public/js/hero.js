// Hero instrument: a pendulum wave. Move the pointer to bend it.
const N = 22;
const canvas = document.getElementById('hero-canvas');
if (canvas && typeof canvas.getContext === 'function') {
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let amp = 0.62, spread = 0.026, t = reduced ? 1.4 : 0, targetAmp = amp;
  let visible = true, raf = 0, last = performance.now();
  const trail = Array.from({ length: N }, () => []);

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    const topY = 26, L = h - topY - 34;
    const pivotX0 = w * 0.12, pivotX1 = w * 0.88;
    for (let i = 0; i < N; i++) {
      const f = 0.5 + i * spread * 22;
      const th = amp * Math.sin(2 * Math.PI * f * (t % 60) + i * 0.16);
      const px = pivotX0 + (i / (N - 1)) * (pivotX1 - pivotX0);
      const bx = px + L * 0.42 * Math.sin(th);
      const by = topY + L * Math.cos(th);
      // trail
      trail[i].push([bx, by]);
      if (trail[i].length > 10) trail[i].shift();
      ctx.strokeStyle = 'rgba(31,111,84,0.14)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      trail[i].forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();
      // string + ball
      ctx.strokeStyle = 'rgba(23,36,32,0.30)';
      ctx.beginPath(); ctx.moveTo(px, topY); ctx.lineTo(bx, by); ctx.stroke();
      const mix = i / (N - 1);
      ctx.fillStyle = mix < 0.5
        ? `rgba(31,${Math.round(111 + mix * 2 * 69)},${Math.round(84 + mix * 2 * 132)},1)`
        : `rgba(${Math.round(31 + (mix - 0.5) * 2 * 57)},${Math.round(180 - (mix - 0.5) * 2 * 58)},${Math.round(216 - (mix - 0.5) * 2 * 28)},1)`;
      ctx.beginPath(); ctx.arc(bx, by, 5.2, 0, 7); ctx.fill();
      if (i % 5 === 0) {
        ctx.fillStyle = 'rgba(23,36,32,0.35)';
        ctx.beginPath(); ctx.arc(px, topY, 2.2, 0, 7); ctx.fill();
      }
    }
  }

  function loop(now) {
    if (!visible) return;
    t += (now - last) / 1000;
    last = now;
    amp += (targetAmp - amp) * 0.06;
    draw();
    raf = requestAnimationFrame(loop);
  }

  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    const fy = Math.min(Math.max((e.clientY - r.top) / r.height, 0), 1);
    const fx = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1);
    targetAmp = 0.25 + (1 - fy) * 0.75;
    spread = 0.012 + fx * 0.03;
  });
  canvas.addEventListener('pointerleave', () => { targetAmp = 0.62; spread = 0.026; });

  new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting && !visible) { visible = true; last = performance.now(); raf = requestAnimationFrame(loop); }
      else if (!en.isIntersecting) { visible = false; cancelAnimationFrame(raf); }
    });
  }).observe(canvas);

  new ResizeObserver(() => { resize(); draw(); }).observe(canvas);
  resize();
  if (reduced) { draw(); } else { last = performance.now(); raf = requestAnimationFrame(loop); }
}
