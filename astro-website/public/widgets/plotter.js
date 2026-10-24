// Widget v1: plotter (minimal proof)
export function init(el, config = {}){
  const canvas = document.createElement('canvas');
  canvas.width = 640; canvas.height = 320;
  el.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  // Grid
  ctx.strokeStyle = '#ddd'; ctx.lineWidth = 1;
  for(let i=0;i<=10;i++){ ctx.beginPath(); ctx.moveTo(40+i*56,40); ctx.lineTo(40+i*56,280); ctx.stroke(); }
  for(let i=0;i<=5;i++){ ctx.beginPath(); ctx.moveTo(40,40+i*60); ctx.lineTo(600,40+i*60); ctx.stroke(); }
  // Axes
  ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(40,280); ctx.lineTo(600,280); ctx.stroke(); // x
  ctx.beginPath(); ctx.moveTo(40,280); ctx.lineTo(40,40); ctx.stroke(); // y
  // Simple curve y = 0.02*x^2
  ctx.strokeStyle = '#d4603e'; ctx.lineWidth = 2; ctx.beginPath();
  for(let x=40;x<=600;x+=2){ const y = 280 - 0.002*(x-40)*(x-40); ctx.lineTo(x,y); }
  ctx.stroke();
  // Label
  const label = document.createElement('p'); label.innerHTML = '<strong>Plotter</strong> — interactive graph (v1 proof).'; el.appendChild(label);
}
// Auto-init if data-widget present
if(typeof document !== 'undefined'){
  document.querySelectorAll('script[data-widget="plotter"]').forEach(s => {
    const container = s.previousElementSibling || s.parentElement;
    if(container) init(container, {});
  });
}
