// painter.js
const dots = [];

function dropDot(top, left) {
  // 💡 Push the dot's position
  // The solution is: dots.push({ top, left }); ;)
  return dots
}
function clearDots() {
  // ✅ Clear the dots array there are more ways to do it!

  const canvas = document.querySelector('.canvas');
  canvas.querySelectorAll('.dot').forEach(dot => dot.remove());
}