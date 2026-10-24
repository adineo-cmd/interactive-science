export function init(el, config = {}){
  const params = config.params || [{name:'v0', val:10, min:0, max:20}];
  params.forEach(p => {
    const label = document.createElement('label'); label.textContent = p.name + ' = ' + p.val;
    el.appendChild(label);
    const slider = document.createElement('input'); slider.type = 'range'; slider.min = p.min; slider.max = p.max; slider.step = 1; slider.value = p.val;
    el.appendChild(slider);
    slider.addEventListener('input', e => { label.textContent = p.name + ' = ' + e.target.value; });
  });
  const out = document.createElement('p'); out.innerHTML = '<strong>SliderLab</strong> — parameter control (v1 proof).'; el.appendChild(out);
}
if(typeof document !== 'undefined'){
  document.querySelectorAll('script[data-widget="sliderLab"]').forEach(s => {
    const container = s.previousElementSibling || s.parentElement;
    if(container) init(container, {});
  });
}
