/**
 * СТВОРИТИ ФУНКЦІЇ-КОНСТРУКТОРИ для:
 *
 * 1) Карточки товару інтернет-магазину баскетбольних мʼячів
 * переметри: назва, діаметр, колір, вага, ціна
 *
 * 2) Одного пункту списку туду-ліста:
 * параметри: порядковий номер, приорітет, тайтл, isDone
 *
 * 3) Мобільний телефон:
 * параметри: назва, процесор, ОЗУ, розмір екрану, ціна
 *
 * Всі вони мають мати методи:
 * - render(parent) - записує в створені ДОМ елементи текстовий контент, запховує елементи один в інший як треба, викидує на стрінку в parent елемент що передається аргументом
 * - handleClick - метод, що має відпрацьовувати по кліку на кнопку "купити"
 */

// Task from Nikita

// 1) Карточки товару інтернет-магазину баскетбольних мʼячів
// * переметри: назва, діаметр, колір, вага, ціна
function BasketBall(
  title = 'Title not found',
  productPhoto = 'src="./img/Adidas ball.jpeg"',
  radius = 'radius good for you',
  color = 'undeclared radius',
  weight = 'undeclared weight',
  price = 'undeclared price'
) {
  this.title = title;
  this.productPhoto = productPhoto;
  this.radius = radius;
  this.color = color;
  this.weight = weight;
  this.price = price;

  this.elements = {
    productCard: document.createElement('div'),
    productTitle: document.createElement('h2'),
    productPhoto: document.createElement('img'),
    productDescription: document.createElement('div'),
    productRadius: document.createElement('p'),
    productColor: document.createElement('p'),
    productWeight: document.createElement('p'),
    productPrice: document.createElement('p'),
  };
}

BasketBall.prototype.render = function (parent) {
  this.elements.productCard.classList.add('productCard');
  this.elements.productCard.append(
    this.elements.productTitle,
    this.elements.productPhoto,
    this.elements.productDescription,
    this.elements.productPrice
  );
  this.elements.productDescription.append(
    this.elements.productRadius,
    this.elements.productColor,
    this.elements.productWeight
  );
  this.elements.productTitle.classList.add('productTitle');
  this.elements.productPhoto.classList.add('productPhoto');
  this.elements.productDescription.classList.add('productDescription');
  this.elements.productRadius.classList.add('productRadius');
  this.elements.productColor.classList.add('productColor');
  this.elements.productWeight.classList.add('productWeight');
  this.elements.productPrice.classList.add('productPrice');

  this.elements.productTitle.innerText = this.title;
  this.elements.productPhoto.src = this.productPhoto;
  this.elements.productRadius.innerText = this.radius;
  this.elements.productColor.innerText = this.color;
  this.elements.productWeight.innerText = this.weight;
  this.elements.productPrice.innerText = this.price;
  parent.appendChild(this.elements.productCard);
};

const basketBall1 = new BasketBall(
  'Tiger',
  './img/Tiger ball nike.jpg',
  '25"',
  'multicilored',
  '540 gramms',
  '150 usd'
);

const basketBall2 = new BasketBall(
  'Mikasa',
  './img/Mikasa ball.webp',
  '25"',
  'brown classic',
  '680 gramms',
  '120 usd'
);
const basketBall3 = new BasketBall(
  'Jordan',
  './img/Jordan ball nike.webp',
  '25"',
  'brown classic',
  '710 gramms',
  '50 usd'
);
const basketBall4 = new BasketBall(
  'Smile pro',
  './img/Smiley  ball.jpg',
  '25"',
  'Yellow  with smile',
  '490 gramms',
  '400 usd'
);
const basketBall5 = new BasketBall(
  'Wilson',
  './img/Wilson ball.webp',
  '25"',
  'Blue yellow',
  '570 gramms',
  '110 usd'
);

basketBall1.render(document.querySelector('.containerWithBalls'));
basketBall2.render(document.querySelector('.containerWithBalls'));
basketBall3.render(document.querySelector('.containerWithBalls'));
basketBall4.render(document.querySelector('.containerWithBalls'));
basketBall5.render(document.querySelector('.containerWithBalls'));

// * 2) Одного пункту списку туду-ліста:
// * параметри: порядковий номер, приорітет, тайтл, isDone

function CreateToDoList(listNumber, priority, title, isDone) {
  this.listNumber = listNumber;
  this.priority = priority;
  this.title = title;
  this.isDone = isDone;

  this.elements = {
    eventContainer: document.createElement('div'),
    eventNumber: document.createElement('p'),
    eventPriority: document.createElement('p'),
    eventName: document.createElement('p'),
    eventReady: document.createElement('p'),
  };
}

CreateToDoList.prototype.render = function (parent) {
  parent.append(this.elements.eventContainer);
  this.elements.eventContainer.append(
    this.elements.eventNumber,
    this.elements.eventPriority,
    this.elements.eventName,
    this.elements.eventReady
  );

  (this.elements.eventNumber.innerText = this.listNumber),
    (this.elements.eventPriority.innerText = this.priority),
    (this.elements.eventName.innerText = this.title),
    (this.elements.eventReady.innerText = this.isDone);
};

const createToDoList1 = new CreateToDoList(
  '1',
  'Важливо дуже! Піздец прям',
  'доробити дз по івентам',
  'ні'
);
createToDoList1.render(document.querySelector('.containerEvents'));

// * 3) Мобільний телефон:
// * параметри: назва, процесор, ОЗУ, розмір екрану, ціна
function CellPhoneProductCard(model, picture, stone, RAM, screenSize, price) {
  this.model = model;
  this.picture = picture;
  this.stone = stone;
  this.RAM = RAM;
  this.screenSize = screenSize;
  this.price = price;

  this.elements = {
    cellPhoneCard: document.createElement('div'),
    modelName: document.createElement('h2'),
    modelPicture: document.createElement('img'),
    modelDescriptionWrapper: document.createElement('div'),
    modelStone: document.createElement('p'),
    modelRAM: document.createElement('p'),
    modelScreenSize: document.createElement('p'),
    modelPrice: document.createElement('p'),
    buyButton: document.createElement('button'),
  };
}

CellPhoneProductCard.prototype.render = function (parent) {
  parent.appendChild(this.elements.cellPhoneCard);
  this.elements.cellPhoneCard.append(
    this.elements.modelName,
    this.elements.modelPicture,
    this.elements.modelDescriptionWrapper
  );
  this.elements.modelDescriptionWrapper.append(
    this.elements.modelStone,
    this.elements.modelRAM,
    this.elements.modelScreenSize
  );
  this.elements.cellPhoneCard.append(
    this.elements.price,
    this.elements.buyButton
  );
  this.elements.cellPhoneCard.classList.add('productCard');
  this.elements.modelName.classList.add('productTitle');
  this.elements.modelPicture.classList.add('productPhoto');
  this.elements.modelDescriptionWrapper.classList.add('productDescription');
  this.elements.modelStone.classList.add('modelStone');
  this.elements.modelRAM.classList.add('modelRAM');
  this.elements.modelScreenSize.classList.add('modelScreenSize');
  this.elements.modelPrice.classList.add('modelPrice');
  this.elements.buyButton.classList.add('buyButton');

  this.elements.modelName.innerText = this.model;
  this.elements.modelPicture.src = this.picture;
  this.elements.modelStone.innerText = this.stone;
  this.elements.modelRAM.innerText = this.RAM;
  this.elements.modelScreenSize.innerText = this.screenSize;
  this.elements.modelPrice.innerText = this.price;
  this.elements.buyButton.innerText = 'Клас, хочу такий';
  this.elements.cellPhoneCard.addEventListener('click', (event) => {
    const buyBtn = event.target;
    if (buyBtn.tagName === 'BUTTON') {
      console.log('ти додав товар у корзину');
      console.dir(buyBtn);
      console.log(this);
    }
  });
};

const samGalUltra23 = new CellPhoneProductCard(
  'Samsung Galaxy s23 ultra',
  './img/cell phones/s 23 ultra.jpg',
  'snapdragon 500gen',
  '12GB',
  '7"',
  '1300 usd'
);
const iph14ProMax = new CellPhoneProductCard(
  'IPhone 14 PRO MAX',
  './img/cell phones/pro max 14.webp',
  'm2',
  '12GB',
  '7"',
  '1200 usd'
);
const sonyXperia = new CellPhoneProductCard(
  'Sony xperia EXP',
  './img/cell phones/smartfon-sony-xperia-1-iv-256gb12gb-black-58761668140313.webp',
  'Exynos',
  '8GB',
  '5"',
  '900usd'
);
const xiaomi = new CellPhoneProductCard(
  'Xiaomi FlagMan Phone',
  './img/cell phones/xiaomi.avif',
  'Exynos',
  '8GB',
  '5.5"',
  '6500usd'
);
const somePhone = new CellPhoneProductCard(
  'Zalupa Phone',
  './img/cell phones/Залупа фонг.webp',
  'Чіп від калькулятора CITIZEN',
  '15 kB',
  '0.5"',
  '15usd'
);

samGalUltra23.render(document.querySelector('.containerWithCellPhones'));
iph14ProMax.render(document.querySelector('.containerWithCellPhones'));
sonyXperia.render(document.querySelector('.containerWithCellPhones'));
xiaomi.render(document.querySelector('.containerWithCellPhones'));
somePhone.render(document.querySelector('.containerWithCellPhones'));

// //examples 22.05.2023 individual work with Nick
// function ProductCard(title, description, price) {
//   this.title = title;
//   this.description = description;
//   this.price = price;

//   this.elements = {
//     card: document.createElement('div'),
//     title: document.createElement('h3'),
//     description: document.createElement('p'),
//     price: document.createElement('p'),
//   };
//   console.log('inside the constructor ---> ', this.title);
// }

// ProductCard.prototype.render = function () {
//   console.log('inside the prototype method ---> ', this.title);
// };

// const testObject = new ProductCard('gogi item', 'best', Infinity);
// testObject.render();
// console.log(
//   'outside the constructor, after creating a variable ---> ',
//   testObject.title
// );
