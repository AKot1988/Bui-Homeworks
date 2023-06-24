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
  parent.appendChild(this.elements.productCard);
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

// name: 'Samsung Galaxy s23 ultra',
// imgSourse: './img/cell phones/s 23 ultra.jpg',
// processor: 'snapdragon 500gen',
// cellPhoneRAM: '12GB',
// screenSize: '7"',
// stockPrice: '1300 usd',

let mobilePhoneModelsStoreArray = [
  {
    name: 'Samsung Galaxy s23 ultra',
    imgSourse: './img/cell phones/s 23 ultra.jpg',
    processor: 'snapdragon 500gen',
    cellPhoneRAM: '12GB',
    screenSize: '7"',
    stockPrice: '1300 usd',
  },

  {
    name: 'IPhone 14 PRO MAX',
    imgSourse: './img/cell phones/pro max 14.webp',
    processor: 'm2',
    cellPhoneRAM: '12GB',
    screenSize: '7"',
    stockPrice: '1200 usd',
  },

  {
    name: 'Sony xperia EXP',
    imgSourse:
      './img/cell phones/smartfon-sony-xperia-1-iv-256gb12gb-black-58761668140313.webp',
    processor: 'Exynos',
    cellPhoneRAM: '8GB',
    screenSize: '5"',
    stockPrice: '900usd',
  },

  {
    name: 'Xiaomi FlagMan Phone',
    imgSourse: './img/cell phones/xiaomi.avif',
    processor: 'Exynos',
    cellPhoneRAM: '8GB',
    screenSize: '5.5"',
    stockPrice: '6500usd',
  },

  {
    name: 'Zalupa Phone',
    imgSourse: './img/cell phones/Залупа фонг.webp',
    processor: 'Чіп від калькулятора CITIZEN',
    cellPhoneRAM: '15 kB',
    screenSize: '0.5"',
    stockPrice: '15usd',
  },
];

function CellPhoneProductCard(product) {
  this.model = product.name;
  this.picture = product.imgSourse;
  this.stone = product.processor;
  this.RAM = product.cellPhoneRAM;
  this.screenSize = product.screenSize;
  this.price = product.stockPrice;

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
      console.log(this);
    }
  });
  parent.appendChild(this.elements.cellPhoneCard);
};

const someGoodMaps = mobilePhoneModelsStoreArray.map((element) => {
  return new CellPhoneProductCard(element);
});

console.log(someGoodMaps);

someGoodMaps.forEach((card) => {
  console.log(card);
  card.render(document.getElementsByClassName('containerWithCellPhones')[0]);
});
console.log(someGoodMaps);

// function CellPhoneProductsRow(rowParent, phoneArray) {
//   this.parent = rowParent;
//   const phoneCards = phoneArray.map((element) => {
//     return new CellPhoneProductCard(element);
//   });
//   this.cards = phoneCards;
// }

// CellPhoneProductsRow.prototype.render = function () {
//   this.cards.forEach((card) => {
//     card.render(this.parent);
//   });
// };

// let productsParent = document.getElementsByClassName(
//   'containerWithCellPhones'
// )[0];
// const phonesRow = new CellPhoneProductsRow(
//   productsParent,
//   mobilePhoneModelsStoreArray
// );
// phonesRow.render();
