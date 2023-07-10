import getRandomNumber from './getRandomNumber.js';
import Circle from './Circle.js';
import SecondsCounter from './secondsCounter.js';
import UserForm from './UserForm.js';
import Modal from './modal.js';

const scoreModal = new Modal();

const newUserForm = new UserForm();
newUserForm.render(document.getElementById('root'));
newUserForm.elements.button.addEventListener('click', (event) => {
  event.preventDefault();

  const _CIRCLES_AMOUNT = 2;
  for (let i = 0; i < _CIRCLES_AMOUNT; i++) {
    const randomCirclePosition = {
      x: getRandomNumber(100),
      y: getRandomNumber(100),
    };
    const oneCircle = new Circle(randomCirclePosition);
    oneCircle.render(document.querySelector('body'));
  }

  let clickCounter = 0;

  const newSecondsCounter = new SecondsCounter();
  const userInfoInput = document.querySelector('.user-form__input');

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
      event.target.classList.remove('circle');
      clickCounter = clickCounter + 1;
    }

    if (clickCounter === 1) {
      const interval = setInterval(function startCounting() {
        if (clickCounter === _CIRCLES_AMOUNT) {
          clearInterval(interval);
          scoreModal.render(
            userInfoInput.value,
            newSecondsCounter.current.toFixed(2)
          );
          document
            .querySelector('.modal__window')
            .addEventListener('click', (event) => {
              if (event.target.tagName !== 'BUTTON') {
                return null;
              } else {
                scoreModal.reloadPage();
              }
            });
        }

        newSecondsCounter.increment();

        newSecondsCounter.render(document.querySelector('.user-form'));
        document.querySelector('.displayedSeconds').style.color = `hsl(
        ${getRandomNumber(255)},
        100%,
        50%
        )`;
        localStorage.setItem(
          userInfoInput.value,
          newSecondsCounter.current.toFixed(2)
        );
      }, 10);
    }
  });
});
