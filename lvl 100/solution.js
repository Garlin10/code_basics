const positions = [];
const maxTailLength = 5;

function updateTail(newTop, newLeft) {
  const box = document.querySelector('.box');
  const canvas = document.querySelector('.canvas');

  // 💡 Before moving the box, save its previous position as a tail segment
  const prevTop = parseInt(box.style.top || "0");
  const prevLeft = parseInt(box.style.left || "0");
  positions.push({ top: prevTop, left: prevLeft });

  // Trim the tail if it’s too long
  if (positions.length > maxTailLength) {
    positions.shift();
  }

  // 🧹 Remove all existing tail segments
  canvas.querySelectorAll('.tail').forEach(el => el.remove());

  // 🎨 Create a tail segment for each saved position (excluding the current box)
  positions.forEach(pos => {
    const tail = document.createElement('div');
    tail.className = 'tail';
    tail.style.top = `${pos.top}px`;
    tail.style.left = `${pos.left}px`;
    canvas.appendChild(tail);
  });
}
