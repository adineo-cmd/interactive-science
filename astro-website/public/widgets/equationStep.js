export function init(el, config = {}){
  const steps = config.steps || ['v = u + at', 's = ut + ½at²'];
  steps.forEach((step,i) => {
    const btn = document.createElement('button'); btn.textContent = 'Step '+(i+1);
    const reveal = document.createElement('div'); reveal.style.display='none'; reveal.innerHTML = '<code>'+step+'</code>';
    btn.onclick = () => { reveal.style.display = reveal.style.display==='none' ? 'block' : 'none'; };
    el.appendChild(btn); el.appendChild(reveal);
  });
}
if(typeof document !== 'undefined'){
  document.querySelectorAll('script[data-widget="equationStep"]').forEach(s => {
    const container = s.previousElementSibling || s.parentElement;
    if(container) init(container, {});
  });
}
