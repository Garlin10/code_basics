// trail.js

const trail = [];
function addDot(dot) {
  //Add a dot here to the trail list!
  trail.push(dot);
    
  if (trail.length > 3) {
    trail[trail.length-4].remove()
    trail.shift()
  }
}
