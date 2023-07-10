export default function StartTimer(date = '01-09-2024') {
  this.date = date;
}

StartTimer.prototype.render = function () {
  let splittedEnteredDate = this.date.split('-');
  let enteredDateFormatted = new Date();
  enteredDateFormatted.setDate(splittedEnteredDate[0]);
  enteredDateFormatted.setMonth(splittedEnteredDate[1] - 1);
  enteredDateFormatted.setFullYear(splittedEnteredDate[2]);
  enteredDateFormatted.setHours(0);
  enteredDateFormatted.setMinutes(0);
  enteredDateFormatted.setSeconds(0);

  this.enteredDate = enteredDateFormatted;

  this.intervalID = setInterval(() => this.compareDate(), 1000);
};

StartTimer.prototype.compareDate = function () {
  // number of milliseconds between now and entered date
  let timeDifference = this.enteredDate.getTime() - Date.now();

  if (timeDifference <= 0) {
    clearInterval(this.intervalID);
  }

  let daysTogo = Math.floor(timeDifference / (1000 * 3600 * 24));
  let hoursTogo = Math.floor(timeDifference / (1000 * 3600)) - daysTogo * 24;
  let minutesTogo =
    Math.floor(timeDifference / (1000 * 60)) -
    daysTogo * 24 * 60 -
    hoursTogo * 60;
  let secondsTogo =
    Math.floor(timeDifference / 1000) -
    daysTogo * 24 * 60 * 60 -
    hoursTogo * 60 * 60 -
    minutesTogo * 60;

  document.querySelector('[data-timer="day"]').innerText =
    'Залишилось днів ' + daysTogo;
  document.querySelector('[data-timer="hours"]').innerText =
    hoursTogo + ' годин';
  document.querySelector('[data-timer="minute"]').innerText =
    minutesTogo + ' хвилин';
  document.querySelector('[data-timer="second"]').innerText =
    secondsTogo + ' секунд';
};
