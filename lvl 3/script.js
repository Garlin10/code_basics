
async function moveBoxBy(x, y, delay = 10) {
  const box = document.querySelector('.box');
  const top = parseInt(box.style.top || "0") + y;
  const left = parseInt(box.style.left || "0") + x;

  await new Promise(resolve => setTimeout(resolve, delay));

  box.style.top = top + "px";
  box.style.left = left + "px";
  console.log("Box moved to:", top, left);

  // ✅ Win check
  const target = document.querySelector('.target');
  const targetTop = parseInt(target.style.top);
  const targetLeft = parseInt(target.style.left);

  if (top === targetTop && left === targetLeft) {
    setTimeout(() => alert("🎉 You reached the finish!"), delay);
  }
}

  
  
  
// Example start: Going down 3 steps
async function moveToTarget() {
  for (let i = 0; i < 20; i++) {
    await moveBoxBy(0, 20); // down
  }

  // Now you go on...
  /*WORK HERE*/
}

moveToTarget();