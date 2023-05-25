let draggable = document.getElementById('draggable');
let container = document.querySelector('.container');

let isDragging = false;
let initialX, initialY;
let xOffset = 0, yOffset = 0;
let initialPosLeft, initialPosTop;


draggable.addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', endDrag);
document.addEventListener('mousemove', drag);


draggable.addEventListener('touchstart', startDrag, { passive: true });
document.addEventListener('touchend', endDrag);
document.addEventListener('touchmove', drag, { passive: true });


function startDrag(e) {
  e.preventDefault();
  isDragging = true;
  initialX = e.clientX || e.touches[0].clientX;
  initialY = e.clientY || e.touches[0].clientY;
  xOffset = initialX - draggable.getBoundingClientRect().left;
  yOffset = initialY - draggable.getBoundingClientRect().top;
  initialPosLeft = draggable.offsetLeft;
  initialPosTop = draggable.offsetTop;
  draggable.style.cursor = 'grabbing';
}


function endDrag() {
  isDragging = false;
  draggable.style.cursor = 'grab';
}


function drag(e) {
  if (!isDragging) return;
  e.preventDefault();
  let currentX = e.clientX || e.touches[0].clientX;
  let currentY = e.clientY || e.touches[0].clientY;
  let offsetX = currentX - initialX;
  let offsetY = currentY - initialY;
  let newPosX = offsetX + initialPosLeft;
  let newPosY = offsetY + initialPosTop;
  draggable.style.transform = `translate(${newPosX}px, ${newPosY}px)`;
}
