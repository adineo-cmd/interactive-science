// branch — a mini decision tree: pick an option, see its consequence, continue.
//
// Config (JSON in data-config):
//   root: string                       — intro scenario text shown above the
//                                        tree for the whole run (optional)
//   nodes: {                           — 4–8 nodes, exactly one keyed "start"
//     [id]: {
//       text: string,                  — what is true at this point
//       choices: [{                    — omit/empty for a terminal node
//         label: string,               — the decision
//         next: string,                — id of the node it leads to
//         feedback: string,            — one-line consequence of THIS choice
//       }]
//     }
//   }
//   why: string                        — shown at every terminal node
//
// These are decisions, not answers: feedback is neutral (no Right/Not quite,
// no green/red). Picking a choice shows its feedback plus a "Continue"
// button that advances to the chosen node; terminal nodes show the node
// text, the why and "Start again". The mono breadcrumb ("start → dam →
// spill") tracks the ids visited so far. Styling lives in widgets-p1d.css
// (.branch, .branch-node, .branch-choices, .branch-breadcrumb, …).

export function init(el, config = {}) {
  const nodes = {};
  const raw = config.nodes || {};
  Object.keys(raw).forEach((id) => {
    const node = raw[id];
    if (node && typeof node.text === 'string') {
      nodes[id] = { text: node.text, choices: (node.choices || []).filter((c) => c && c.label && c.next) };
    }
  });
  if (!nodes.start) return;

  // -- DOM -----------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'branch';

  const scenario = document.createElement('p');
  scenario.className = 'branch-scenario';
  if (config.root) scenario.textContent = config.root;
  else scenario.hidden = true;

  const breadcrumb = document.createElement('p');
  breadcrumb.className = 'branch-breadcrumb';

  const nodeCard = document.createElement('div');
  nodeCard.className = 'branch-node';
  const nodeText = document.createElement('p');
  nodeText.className = 'branch-text';
  const choices = document.createElement('div');
  choices.className = 'branch-choices';
  nodeCard.append(nodeText, choices);

  const feedback = document.createElement('p');
  feedback.className = 'branch-feedback';
  const actions = document.createElement('div');
  actions.className = 'branch-actions p1-actions';

  const why = document.createElement('div');
  why.className = 'branch-why';
  why.hidden = true;

  root.append(scenario, breadcrumb, nodeCard, feedback, actions, why);
  el.appendChild(root);

  const continueBtn = document.createElement('button');
  continueBtn.type = 'button';
  continueBtn.textContent = 'Continue';
  continueBtn.hidden = true;
  actions.appendChild(continueBtn);

  const againBtn = document.createElement('button');
  againBtn.type = 'button';
  againBtn.textContent = 'Start again';
  againBtn.hidden = true;
  actions.appendChild(againBtn);

  // -- run state -------------------------------------------------------------
  let path = [];

  const paintBreadcrumb = () => {
    breadcrumb.textContent = path.length ? `path: ${path.join(' → ')}` : 'path: —';
  };

  const clearRun = () => {
    nodeText.textContent = '';
    choices.replaceChildren();
    feedback.textContent = '';
    feedback.hidden = true;
    continueBtn.hidden = true;
    againBtn.hidden = true;
    why.hidden = true;
  };

  const showTerminal = (node) => {
    clearRun();
    nodeText.textContent = node.text;
    if (config.why) {
      why.textContent = config.why;
      why.hidden = false;
    }
    againBtn.hidden = false;
  };

  const render = (id) => {
    const node = nodes[id] || null;
    path.push(id);
    paintBreadcrumb();
    if (!node || !node.choices.length) { showTerminal(node || { text: id }); return; }
    clearRun();
    nodeText.textContent = node.text;
    node.choices.forEach((choice) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'branch-choice quiz-choice';
      b.textContent = choice.label;
      b.addEventListener('click', () => pick(choice, b));
      choices.appendChild(b);
    });
  };

  const pick = (choice, btn) => {
    [...choices.children].forEach((b) => {
      b.disabled = true;
      b.classList.toggle('picked', b === btn);
    });
    feedback.textContent = choice.feedback || '';
    feedback.hidden = !feedback.textContent;
    continueBtn.hidden = false;
    continueBtn.focus();
  };

  continueBtn.addEventListener('click', () => {
    const picked = [...choices.children].findIndex((b) => b.classList.contains('picked'));
    const node = nodes[path[path.length - 1]];
    const choice = node && node.choices[picked];
    if (!choice) return;
    render(choice.next);
  });

  againBtn.addEventListener('click', () => {
    path = [];
    render('start');
  });

  render('start');
}

function mountAll() {
  document.querySelectorAll('[data-widget="branch"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
