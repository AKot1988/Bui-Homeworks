import { GOODS__PLANTS } from './objects.js';

// const myCart = new Cart();
// const cartSection = document.createElement('div');
// cartSection.classList.add('cart__section');
// myCart.render(cartSection);

// ---------------------------Create cart and methods------------------------------------------------
const myPlantsForCart = [];
const cartContainer = document.createElement('div');
cartContainer.classList.add('cart__container--hidden');
document.body.insertAdjacentElement('afterbegin', cartContainer);

function CartItem(data) {
  this.name = data.name;
  this.image = data.image;
  this.description = data.description;
  this.price = data.price;
  this.elements = {
    cartPlantCardItem: document.createElement('div'),
    cartPlantName: document.createElement('p'),
    cartPlantImage: document.createElement('img'),
    cartPlantDescription: document.createElement('p'),
    cartPlantPrice: document.createElement('p'),
  };
}

//Нижче парентом повинен буди просто докюмент
CartItem.prototype.render = function (parent) {
  this.elements.cartPlantName.innerText = this.name;
  this.elements.cartPlantImage.src = this.image;
  this.elements.cartPlantDescription.innerText = this.description;
  this.elements.cartPlantPrice = this.price;

  this.elements.cartPlantImage.classList.add('plants__section__card--image');
  this.elements.cartPlantCardItem.classList.add('plants__section__cards');

  this.elements.cartPlantCardItem.append(
    this.elements.cartPlantName,
    this.elements.cartPlantImage,
    this.elements.cartPlantDescription,
    this.elements.cartPlantPrice
  );
  parent.append(this.elements.cartPlantCardItem);
};

// const myCart = new Cart();
// myCart.render(document.getElementsByTagName('body')[0]);

// ---------------------------Create plants cards and methods-----------------------------------------
function PlantCard(plant) {
  this.name = plant.name;
  this.image = plant.image;
  this.description = plant.description;
  this.price = plant.price;
  this.buttonToCartText = plant.buttonToCart;

  const plantCard = document.createElement('div');
  plantCard.classList.add('plants__section__cards');

  this.elements = {
    plantCardItem: document.createElement('div'),
    plantName: document.createElement('p'),
    plantImage: document.createElement('img'),
    plantDescription: document.createElement('p'),
    plantPrice: document.createElement('p'),
    plantButtonToCard: document.createElement('button'),
  };
}

PlantCard.prototype.render = function (parent) {
  this.elements.plantCardItem.classList.add('plants__section__card--item');
  this.elements.plantImage.classList.add('plants__section__card--image');
  this.elements.plantDescription.classList.add(
    'plants__section__card--description'
  );

  this.elements.plantCardItem.append(
    this.elements.plantName,
    this.elements.plantImage,
    this.elements.plantDescription,
    this.elements.plantPrice,
    this.elements.plantButtonToCard
  );

  this.elements.plantName.innerText = this.name;
  this.elements.plantImage.src = this.image;
  this.elements.plantDescription.innerText = this.description;
  this.elements.plantPrice.innerText = this.price;
  this.elements.plantButtonToCard.innerText = this.buttonToCartText;

  this.elements.plantButtonToCard.addEventListener('click', (event) => {
    const selectedPlant = {
      name: this.name,
      image: this.image,
      description: this.description,
      price: this.price,
      buttonToCartText: this.buttonToCart,
    };
    console.log(selectedPlant);
    myPlantsForCart.push(selectedPlant);
    console.log(myPlantsForCart);
  });
  parent.appendChild(this.elements.plantCardItem);
};

// пропси + рендер карток

const newCardsForStore = GOODS__PLANTS.map((plant) => {
  return new PlantCard(plant);
});
newCardsForStore.forEach((plantCard) => {
  plantCard.render(document.querySelector('.plants__section'));
});

//по кліку на корзинку клас '.cart__container--hidden' повинен стати '.cart__container--active' через тогл

const svgCartElement = document.querySelector('.cart__svg');
svgCartElement.addEventListener('click', (event) => {
  cartContainer.innerHTML = '';
  const plantsCart = myPlantsForCart.map((plantCart) => {
    return new CartItem(plantCart);
  });

  plantsCart.forEach((plantCart) => {
    plantCart.render(cartContainer);
    console.dir(plantCart);
  });

  cartContainer.classList.toggle('cart__container--active');
});
