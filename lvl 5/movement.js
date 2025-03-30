window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.box');
  
    document.addEventListener('keydown', (event) => {
      const step = 20;
      let top = parseInt(box.style.top || "0");
      let left = parseInt(box.style.left || "0");
  
      switch (event.key.toLowerCase()) {
        case 'w': top -= step; break;
        case 's': top += step; break;
        case 'a': left -= step; break;
        case 'd': left += step; break;
        case 'p': // p = paint!
          if (typeof dropDot === 'function') {
            let dots = dropDot(top, left);
            render(dots);
          }
          return;
        case 'c':
          if (typeof clearDots === 'function') {
            clearDots();
          }

          return;
        default: return;
      }
  
      top = Math.max(0, Math.min(top, 480));
      left = Math.max(0, Math.min(left, 480));
      box.style.top = `${top}px`;
      box.style.left = `${left}px`;
    });
  });
  function render(dots){
    const canvas = document.querySelector('.canvas');
  canvas.querySelectorAll('.dot').forEach(dot => dot.remove());

  dots.forEach(pos => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.top = `${pos.top}px`;
    dot.style.left = `${pos.left}px`;
    canvas.appendChild(dot);
  });
}