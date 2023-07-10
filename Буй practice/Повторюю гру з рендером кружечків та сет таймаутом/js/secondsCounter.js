export default function SecondsCounter(startValue = 0) {
  this.current = startValue;
  this.elements = {
    self: document.createElement('div'),
  };
}

SecondsCounter.prototype.render = function (parent) {
  this.elements.self.innerText = '';
  this.elements.self.innerText = this.current.toFixed(2) + ' sec';
  this.elements.self.classList.add('displayedSeconds');
  parent.insertAdjacentElement('afterend', this.elements.self);
};

SecondsCounter.prototype.increment = function () {
  this.current = this.current + 0.01;
};

SecondsCounter.prototype.decrement = function () {
  this.current = this.current - 0.01;
};
