export default function ItemCard(item, isInCart = false) {
  this.item = item;
  this.id = item.id;
  this.img = item.imgUrl;
  this.title = item.title;
  this.description = item.description;
  this.isInCart = isInCart;

  this.elements = {
    itemCard: document.createElement('div'),
    itemId: document.createElement('p'),
    itemImg: document.createElement('img'),
    itemTitle: document.createElement('p'),
    itemDescription: document.createElement('p'),
    itemButtonToCart: document.createElement('button'),
  };
}

ItemCard.prototype.render = function (parent) {
  this.elements.itemCard.dataset.id = this.id;
  this.elements.itemImg.src = this.img;
  this.elements.itemImg.classList.add('item--card--img');
  this.elements.itemTitle.innerText = this.title;
  this.elements.itemDescription.innerText = this.description;
  this.elements.itemButtonToCart.innerText = 'add to cart';
  this.elements.itemCard.dataset.amount = 1;

  this.elements.itemCard.classList.add('itemCard');
  this.elements.itemCard.append(
    this.elements.itemImg,
    this.elements.itemTitle,
    this.elements.itemDescription,
    this.elements.itemButtonToCart
  );

  parent.append(this.elements.itemCard);
};
