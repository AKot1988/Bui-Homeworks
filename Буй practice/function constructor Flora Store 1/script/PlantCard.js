// import Cart from './createCart.js';
// export { myCart };
// const myCart = new Cart();
// const cartSection = document.createElement('div');
// cartSection.classList.add('cart__section');
// myCart.render(cartSection);
export default function PlantCard(plant, isInCart = false) {
  this.id = plant.id;
  this.name = plant.name;
  this.image = plant.image;
  this.description = plant.description;
  this.price = plant.price;
  this.buttonToCartText = plant.buttonToCart;
  this.isInCart = isInCart;

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
  this.elements.plantPrice.classList.add('plants__section__card--price');
  this.elements.plantDescription.classList.add(
    'plants__section__card--description'
  );

  this.elements.plantCardItem.dataset.id = this.id;

  if (this.isInCart) {
    this.elements.plantCardItem.dataset.amount = 1;
    this.elements.plantCardItem.append(
      this.elements.plantName,
      this.elements.plantImage,
      this.elements.plantPrice
    );
  } else {
    this.elements.plantCardItem.append(
      this.elements.plantName,
      this.elements.plantImage,
      this.elements.plantDescription,
      this.elements.plantPrice,
      this.elements.plantButtonToCard
    );
  }
  const pricePostfix = this.elements.plantCardItem.dataset.amount
    ? ` X ${this.elements.plantCardItem.dataset.amount}`
    : '';

  this.elements.plantName.innerText = this.name;
  this.elements.plantImage.src = this.image;
  this.elements.plantDescription.innerText = this.description;
  this.elements.plantPrice.innerText = this.price + pricePostfix;
  this.elements.plantButtonToCard.innerText = this.buttonToCartText;

  // this.elements.plantButtonToCard.addEventListener('click', (event) => {
  //   const selectedPlant = {
  //     name: this.name,
  //     image: this.image,
  //     description: this.description,
  //     price: this.price,
  //     buttonToCartText: this.buttonToCart,
  //   };
  //   console.log(selectedPlant);
  //   myCart.addItem(selectedPlant);
  // });

  parent.appendChild(this.elements.plantCardItem);
};
