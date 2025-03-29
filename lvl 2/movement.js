window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.box');
  
    // Set starting position
    box.style.top = box.style.top || '0px';
    box.style.left = box.style.left || '0px';
  
    document.addEventListener('keydown', (event) => {
      const step = 20;
      let top = parseInt(box.style.top);
      let left = parseInt(box.style.left);
  
      switch (event.key.toLowerCase()) {
        case 'w':
          top -= step;
          break;
        case 's':
          top += step;
          break;
        case 'a':
          left -= step;
          break;
        case 'd':
          left += step;
          break;
        default:
          return;
      }
  
      // Clamp to canvas bounds (optional)
      top = Math.max(0, Math.min(top, 480));
      left = Math.max(0, Math.min(left, 480));
  
      box.style.top = `${top}px`;
      box.style.left = `${left}px`;
    
      checkZone(); // 🟨 detect color after move!
    });
  });
  