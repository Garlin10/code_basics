function checkZone() {
  const box = document.querySelector(".box");
  const top = parseInt(box.style.top || "0");
  const left = parseInt(box.style.left || "0");

  const size = 20;

  const inTopHalf = top + size <= 250;
  const inBottomHalf = top >= 250;
  const inLeftHalf = left + size <= 250;
  const inRightHalf = left >= 250;

  const inMiddle = top >= 240 && top < 260 && left >= 240 && left < 260;

  if (inMiddle) {
    // In the center 20×20 cell — mix all 4!
    box.style.background = `
        linear-gradient(to right, green 50%, yellow 50%) top,
        linear-gradient(to right, orange 50%, blue 50%) bottom`;
    box.style.backgroundSize = "100% 50%";
    box.style.backgroundRepeat = "no-repeat";
  } else if (inTopHalf && inLeftHalf) {
    box.style.background = "green";
  } else if (inTopHalf && inRightHalf) {
    box.style.background = "yellow";
  } else if (inBottomHalf && inLeftHalf) {
    box.style.background = "orange";
  } else if (inBottomHalf && inRightHalf) {
    box.style.background = "blue";
  } else if (inTopHalf && !inLeftHalf && !inRightHalf) {
    box.style.background = "linear-gradient(to right, green 50%, yellow 50%)";
  } else if (inBottomHalf && !inLeftHalf && !inRightHalf) {
    box.style.background = "linear-gradient(to right, orange 50%, blue 50%)";
  } else if (!inTopHalf && !inBottomHalf && inLeftHalf) {
    box.style.background = "linear-gradient(to bottom, green 50%, orange 50%)";
  } else if (!inTopHalf && !inBottomHalf && inRightHalf) {
    box.style.background = "linear-gradient(to bottom, yellow 50%, blue 50%)";
  } else {
    box.style.background = "purple"; // fallback in rare case
  }
}
