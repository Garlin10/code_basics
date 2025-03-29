// zone-checker.js
function checkZone() {
    const box = document.querySelector('.box');
    const top = parseInt(box.style.top || "0");
    const left = parseInt(box.style.left || "0");
  
    //WORK HERE
    if (top < 250 && left < 250) {
      box.style.backgroundColor = 'green'; // top-left
    } else {
      box.style.backgroundColor = 'yellow'; // everything else for now
    }
  }
  