const burger = document.querySelector('.burger__menu');

burger.addEventListener('click', () => {
  const popUpMenu = document.querySelector('.popUpMenu');
  popUpMenu.classList.toggle('popUpMenu--active');
});

const mockedCursor = document.createElement('div');
mockedCursor.classList.add('root-cursor');
mockedCursor.classList.add('root-cursor--position');
document.body.insertAdjacentElement('beforeend', mockedCursor);

document.body.addEventListener('mousemove', (e) => {
  mockedCursor.style.left = e.pageX + 'px';
  mockedCursor.style.top = e.pageY + 'px';
});

const keyTorch = document.addEventListener('keydown', (event) => {
  console.log(event);
});
