async function moveBoxBy(x, y, delay = 500) {
  const box = document.querySelector(".box");
  const top = parseInt(box.style.top || "0");
  const left = parseInt(box.style.left || "0");

  await new Promise((resolve) => setTimeout(resolve, delay));

  box.style.top = top + y + "px";
  box.style.left = left + x + "px";
}

function directionToXY(direction) {
  if (direction === "down") return [0, 20];
  else if (direction === "up") return [0, -20];
  else if (direction === "right") return [20, 0];
  else if (direction === "left") return [-20, 0];
}

async function colorfulPath() {
  const box = document.querySelector(".box");

  for (let step of path) {
    const [dx, dy] = directionToXY(step.direction);
    box.style.backgroundColor = step.color;
    await moveBoxBy(dx, dy, 500);
  }
}
