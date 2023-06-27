//Створення функції яка буде генерувати випадкові числа у діапазоні від 1 до end
const getRandomNumber = (end) => Math.floor(Math.random() * end) + 1;

function Circle(data) {
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
  this.elements.self.style.borderColor = 
  parent.appendChild(this.elements.self);
};

const _CIRCLES_AMOUNT = 10;
for (let i = 0; i < _CIRCLES_AMOUNT; i++) {
  const randomCirclePosition = {
    x: getRandomNumber(100),
    y: getRandomNumber(100),
  };
  const oneCircle = new Circle(randomCirclePosition);
  oneCircle.render(document.querySelector('body'));
}

let clickCounter = 0;
let secondsCounter = 0;
document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    event.target.classList.remove('circle');
    clickCounter = clickCounter + 1;
  }

  if (clickCounter === 1) {
    const interval = setInterval(function startCounting() {
      if (clickCounter === _CIRCLES_AMOUNT) {
        clearInterval(interval);
      }
      secondsCounter = secondsCounter + 1;
      console.log(secondsCounter);
      const newSecondsCounter = new SecondDisplay();
      newSecondsCounter.render(document.querySelector('body'));
    }, 1000);
  }
});

function SecondDisplay(data) {
  this.elements = {
    self: document.createElement('div'),
  };
}

SecondDisplay.prototype.render = function (parent) {
  this.elements.self.innerText = '';
  this.elements.self.innerText = secondsCounter;
  this.elements.self.classList.add('displayedSeconds');
  parent.insertAdjacentElement('afterbegin', this.elements.self);
};
console.dir(secondsCounter);
