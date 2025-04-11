const canvas = document.querySelector(".canvas");
const box = document.querySelector(".box");

const positions = Array.from({ length: 25 }, (_, i) => i * 20);

let index = 0;
let direction = 1;

setInterval(() => {
  const left = positions[index];
  box.style.left = `${left}px`;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.top = "240px";
  dot.style.left = `${left}px`;
  canvas.appendChild(dot);

  // Call the helper from trail.js
  addDot(dot);

  index += direction;
  if (index === positions.length - 1 || index === 0) {
    direction *= -1;
  }
}, 100);
