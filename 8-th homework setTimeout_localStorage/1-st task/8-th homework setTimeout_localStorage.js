import StartTimer from './timer.js';

let userInputSetData = document.querySelector('.setTimer__field');
let userButtonSetData = document.querySelector('.setTimer__submit');

userButtonSetData.addEventListener('click', (event) => {
  event.preventDefault();
  let newCountdown = new StartTimer(userInputSetData.value);
  newCountdown.render();
});
