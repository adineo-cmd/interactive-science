// hotspot — click the right region of a diagram.
//
// Config (JSON in data-config):
//   prompt: string                     — the "where is …?" question
//   image:  string                     — URL resolved against the site base
//                                        (derived from the widgets/ script path;
//                                        absolute URLs pass through unchanged)
//   regions: [{                        — 2–6 clickable areas, percentages of
//     x, y, w, h: number,              —   the image box (top-left origin)
//     label: string,                   —   accessible name for the button
//   }]
//   answer: number (index)             — which region is right
//   why: string                        — explanation on reveal
//
// Regions are real <button>s absolutely positioned in %, so they scale with
// the image; outlines only appear on hover/focus or as a consequence of a
// choice (never a giveaway). Wrong click → red flash on that region + one
// retry (a "Reveal" button appears); a second wrong click or the Reveal
// itself outlines the right region and shows the why. Styling lives in
// widgets-p1d.css (.hotspot, .hotspot-frame, .hotspot-region, …).

export function init(el, config = {}) {
  const regions = (config.regions || []).filter((r) => r
    && [r.x, r.y, r.w, r.h].every((n) => typeof n === 'number' && Number.isFinite(n))).slice(0, 6);
  if (!config.image || regions.length < 2) return;
  const answer = Math.min(Math.max(config.answer | 0, 0), regions.length - 1);

  // Site base: the layout loads <base>/widgets/index.js — derive from its src
  // so author-supplied paths like "img/thing.png" resolve like other assets.
  const siteBase = () => {
    const script = document.querySelector('script[type="module"][src*="/widgets/index.js"]');
    if (script) {
      try {
        const m = new URL(script.getAttribute('src'), document.baseURI).href.match(/^(.*\/)widgets\//);
        if (m) return m[1];
      } catch { /* empty */ }
    }
    return document.baseURI;
  };

  // -- DOM -----------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'hotspot';

  const prompt = document.createElement('p');
  prompt.className = 'hotspot-prompt';
  prompt.textContent = config.prompt || 'Click the right part of the diagram.';

  const frame = document.createElement('div');
  frame.className = 'hotspot-frame';
  const img = document.createElement('img');
  img.className = 'hotspot-img';
  img.alt = config.prompt || '';
  img.decoding = 'async';
  img.src = new URL(config.image, siteBase()).href;
  frame.appendChild(img);

  regions.forEach((r, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'hotspot-region';
    b.style.left = `${r.x}%`;
    b.style.top = `${r.y}%`;
    b.style.width = `${r.w}%`;
    b.style.height = `${r.h}%`;
    b.setAttribute('aria-label', r.label || `region ${i + 1}`);
    b.dataset.i = String(i);
    frame.appendChild(b);
  });

  const actions = document.createElement('div');
  actions.className = 'hotspot-actions p1-actions';
  const revealBtn = document.createElement('button');
  revealBtn.type = 'button';
  revealBtn.textContent = 'Reveal';
  revealBtn.hidden = true;
  actions.appendChild(revealBtn);

  const feedback = document.createElement('p');
  feedback.className = 'hotspot-feedback p1-verdict';

  root.append(prompt, frame, actions, feedback);
  el.appendChild(root);

  // -- interaction -----------------------------------------------------------
  let tries = 0;
  let settled = false; // answered right or revealed — no more clicking

  const reveal = (ok) => {
    settled = true;
    [...frame.querySelectorAll('.hotspot-region')].forEach((b) => {
      b.disabled = true;
      if (Number(b.dataset.i) === answer) b.classList.add('reveal');
    });
    revealBtn.hidden = true;
    feedback.classList.toggle('correct', ok);
    feedback.classList.toggle('wrong', !ok);
    feedback.innerHTML = `<strong>${ok ? 'Right.' : 'Not quite.'}</strong>${config.why ? ` ${config.why}` : ''}`;
  };

  frame.addEventListener('click', (e) => {
    const btn = e.target.closest('button.hotspot-region');
    if (!btn || btn.disabled || settled) return;
    const i = Number(btn.dataset.i);
    if (i === answer) {
      btn.classList.add('correct');
      reveal(true);
      return;
    }
    tries += 1;
    btn.classList.add('wrong'); // flash, then let them look again
    setTimeout(() => btn.classList.remove('wrong'), 600);
    if (tries === 1) {
      feedback.classList.remove('correct');
      feedback.classList.add('wrong');
      feedback.innerHTML = '<strong>Not quite.</strong> one more look — or reveal the answer.';
      revealBtn.hidden = false;
    } else {
      reveal(false);
    }
  });

  revealBtn.addEventListener('click', () => reveal(false));
}

function mountAll() {
  document.querySelectorAll('[data-widget="hotspot"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
