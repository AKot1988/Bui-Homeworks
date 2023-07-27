const listWrapper = document.querySelector('.container');
//оголошення змінної в яку ляже у handleDragStart об'єкт, який ми потягнули
let dragTarget = null;

//тут у у аргумент ми не передаємо e\ev\event чи ще щось тіпа того, а знаючи, що там івент і у нього є тагрет, ми через фігурні дужки звертаємось одразу до ev.target реально прикольно
const handlerDragStart = ({ target, dataTransfer }) => {
  dragTarget = target;

  dragTarget.classList.add('dragging');

  dataTransfer.effectAllowed = 'move';
  dataTransfer.setData('text/html', dragTarget.outerHTML);
};

const handleDrop = (ev) => {
  ev.stopPropagation();

  if (dragTarget !== ev.target) {
    dragTarget.classList.remove('dragging');

    dragTarget.outerHTML = ev.target.outerHTML;
    ev.target.outerHTML = dragTarget.outerHTML;
  }

  return false;
};

const resetHandler = (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }
};

listWrapper.addEventListener('dragstart', handlerDragStart);
listWrapper.addEventListener('dragover', resetHandler);
listWrapper.addEventListener('drop', handleDrop);
