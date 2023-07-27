const items = document.querySelectorAll('.container .box');

let dragElement = null;

const dragStart = (event) => {
  event.target.classList.add('dragging');

  dragElement = event.currentTarget;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', event.target.innerText);
};
const resetHandler = (event) => {
  if (event.preventDefault) {
    event.preventDefault();
  }
  return false;
};
const dragEnter = (event) => {
  event.target.classList.add('over');
};
const dragLeave = (event) => {
  event.target.classList.remove('over');
};
const handleDrop = (event) => {
  event.stopPropagation();
  if (dragElement !== event.target) {
    event.target.classList.remove('dragging');
  }
  dragElement.innerHTML = event.target.innerHTML;
  event.target.innerHTML = event.dataTransfer.getData('text/html');
};

const dragEnd = (event) => {
  event.target.classList.remove('dragging');

  document
    .querySelectorAll('.over')
    .forEach((item) => item.classList.remove('over'));
};

items.forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', resetHandler);

  item.addEventListener('dragenter', dragEnter);
  item.addEventListener('dragleave', dragLeave);

  item.addEventListener('drop', handleDrop);
  item.addEventListener('dragend', dragEnd);
});
