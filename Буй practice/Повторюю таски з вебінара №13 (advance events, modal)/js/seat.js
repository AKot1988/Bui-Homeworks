import { STATUSES, SEAT_SVG } from './utils.js';

export default function Seat(row, number, status = STATUSES.FREE) {
  (this.row = row), (this.number = number), (this.status = status);

  this.element = {
    self: null,
  };
}

Seat.prototype.render = function (parent) {
  this.element.self = document.createElement('div');
  this.element.self.classList.add('seats__item');
  this.element.self.classList.add(`seats__item--${this.status}`);

  this.element.self.insertAdjacentHTML('afterbegin', SEAT_SVG);
  this.element.self.addEventListener('click', () => {
    if (this.status === STATUSES.FREE) {
      this.changeStatus(STATUSES.PICKED);
    } else if (this.status === STATUSES.PICKED) {
      this.changeStatus(STATUSES.CHOICE);
    }
  });

  parent.appendChild(this.element.self);
};

Seat.prototype.changeStatus = function (newStatus) {
  this.element.self.classList.remove(`seats__item--${this.status}`);
  this.status = newStatus;
  this.element.self.classList.add(`seats__item--${this.status}`);
};
