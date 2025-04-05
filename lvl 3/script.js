async function moveBoxBy(x, y, delay = 500) {
  const box = document.querySelector(".box");
  const top = parseInt(box.style.top || "0");
  const left = parseInt(box.style.left || "0");

  // Wait before moving
  await new Promise((resolve) => setTimeout(resolve, delay));

  box.style.top = top + y + "px";
  box.style.left = left + x + "px";
}

async function moveToTarget() {
  await moveBoxBy(20, 0);
  await moveBoxBy(0, 20);
  await moveBoxBy(0, 20);
  /*WORK HERE*/
}

moveToTarget();
