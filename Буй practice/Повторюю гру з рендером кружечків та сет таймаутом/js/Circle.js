import getRandomNumber from './getRandomNumber.js';

export default function Circle(data) {
  this.top = data.x;
  this.left = data.y;

  this.elements = {
    self: document.createElement('div'),
  };
}

Circle.prototype.render = function (parent) {
  this.elements.self.classList.add('circle');
  this.elements.self.style.position = 'absolute';
  this.elements.self.style.top = this.top + '%';
  this.elements.self.style.left = this.left + '%';
  this.elements.self.style.borderColor = `hsl(
    ${getRandomNumber(255)},
    100%,
    50%
    )`;

  parent.appendChild(this.elements.self);
};
