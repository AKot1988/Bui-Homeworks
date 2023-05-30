/**
 * TASK-01
 *
 * Реалізувати функціонал валідації текстового поля для вводу.
 * Якщо значення у полі успішно проходить валідацію - підсвічувати поле зеленим кольором.
 * Якщо значення у полі не проходить валідацію - підсвічувати поле червоним кольором.
 *
 * Правила для валідації:
 * - поле не може бути пустим;
 * - поле не може містити небуквенні символи;
 * - значення має складатися мімнімум з 10 символів;
 * - значення не може бути більше 100 символів;
 */

//Створюю функції, які виконують валідації (кожна функція свою валідацію окремо)
const isStringEmpty = (str) => str.length === 0;
const isNonChrExist = (str) => /[^a-zA-Z]/.test(str);
const isStrLengthInRange = (str) => str.length < 10 || str.length > 100;

const userInput = document.querySelector('.someInput');
console.dir(userInput);

userInput.addEventListener('keyup', (event) => {
  const userInputTextValue = event.target.value;
  if (
    isStringEmpty(userInputTextValue) ||
    isNonChrExist(userInputTextValue) ||
    isStrLengthInRange(userInputTextValue)
  ) {
    event.target.style.backgroundColor = 'red';
  } else {
    event.target.style.backgroundColor = 'green';
  }
});

/**
 * TASK-02
 *
 * Розробити функціонал, який дозволить танку на екрані рухатись за допомогою кліків по стрілочкам на клавіатурі.
 */

const _STEP = 1;
let _START_X = 0;
let _START_Y = 0;

function CreateTank(
  name,
  health,
  ammo,
  color = 'blue',
  parent = document.body
) {
  this.name = name;
  this.health = health;
  this.ammo = ammo;
  this.color = color;
  this.parent = parent;

  this.self = document.createElement('img');
}

CreateTank.prototype.moveTank = function () {
  //нижче я поставив дом елемент document, оскільки ДЖиПіТішка сказала, що в мене дом елемент, який був (this.self) він з тегом 'img', а такі елементи не можуть отримати фокус. Але я рілі падзавалив після коментів чату
  document.addEventListener('keydown', (eventObj) => {
    switch (eventObj.key) {
      case 'ArrowUp':
        this.self.style.top = parseInt(this.self.style.top) - _STEP + 'px';
        this.self.style.transform = 'rotate(180deg)';
        break;
      case 'ArrowDown':
        this.self.style.top = parseInt(this.self.style.top) + _STEP + 'px';
        this.self.style.transform = 'rotate(0deg)';
        break;
      case 'ArrowLeft':
        this.self.style.left = parseInt(this.self.style.left) - _STEP + 'px';
        this.self.style.transform = 'rotate(90deg)';
        break;
      case 'ArrowRight':
        this.self.style.left = parseInt(this.self.style.left) + _STEP + 'px';
        this.self.style.transform = 'rotate(-90deg)';
        break;
    }
  });
};

CreateTank.prototype.removeTank = function () {
  this.self.addEventListener('click', () => {
    this.self.remove();
  });
};

CreateTank.prototype.isInFrame = function () {
  const selfWidth = this.self.offsetWidth;
  const selfHeight = this.self.offsetHeight;
  const selfX = this.self.offsetLeft;
  const selfY = this.self.offsetTop;

  const frameWidth = window.innerWidth;
  const frameHeight = window.innerHeight;

  return (
    selfX >= 0 &&
    selfY >= 0 &&
    selfX <= frameWidth - selfWidth &&
    selfY <= frameHeight - selfHeight
  );
};

CreateTank.prototype.render = function () {
  this.self.src = `./img/tank-${this.color}.png`;
  this.self.style.position = 'absolute';
  this.self.style.left = `${_START_X}px`;
  this.self.style.top = `${_START_Y}px`;
  this.self.style.width = '50px';
  this.self.style.height = '50px';
  this.self.classList.add('tank');

  this.parent.prepend(this.self);

  document.addEventListener('keydown', (ev) => {
    if (this.isInFrame()) {
      this.self.style.outline = null;
      this.moveTank(ev);
    } else {
      this.self.style.outline = '10px solid red';
    }
  });
  challenger.removeTank();
};

const addTankBtn = document.querySelector('.add-tank');
const addEnemyBtn = document.querySelector('.add-enemy');

addTankBtn.addEventListener('click', () => {
  _START_X += 100;
  const challenger = new CreateTank(
    'challenger',
    100,
    15,
    'blue',
    document.querySelector('.tank__game--container')
  );
  challenger.render();
});

addEnemyBtn.addEventListener('click', () => {
  _START_Y += 100;
  const tank90 = new CreateTank(
    'tank90',
    50,
    10,
    'red',
    document.querySelector('.tank__game--container')
  );
  tank90.render();
});
