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

//Task #3

document.addEventListener('keydown', (event) => {
  console.log(event);
  let buttonValue = event.key.toLowerCase();
  let controlButtonValue = event.code;
  console.log(event);
  liCollection = document.querySelectorAll('li');
  for (searchButton of liCollection) {
    if (searchButton.innerText.toLowerCase() === buttonValue) {
      searchButton.classList.toggle('hit');
    } else if (searchButton.dataset.value === controlButtonValue) {
      searchButton.classList.toggle('hit');
    }
  }
});
