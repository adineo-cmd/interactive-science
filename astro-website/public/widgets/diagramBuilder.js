export function init(el, config = {}){
  el.innerHTML = '<svg width="300" height="200" viewBox="0 0 300 200"><circle cx="150" cy="100" r="40" fill="none" stroke="#d4603e" stroke-width="2"/><text x="150" y="105" font-size="14" text-anchor="middle">Vector</text></svg><p><strong>DiagramBuilder</strong> — interactive SVG (v1 proof).</p>';
}
if(typeof document !== 'undefined'){
  document.querySelectorAll('script[data-widget="diagramBuilder"]').forEach(s => {
    const container = s.previousElementSibling || s.parentElement;
    if(container) init(container, {});
  });
}
