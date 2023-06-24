export default function Cart() {
  this.items = [];
  this.elements = {
    self: document.createElement('div'),
  };
}

Cart.prototype.render = function (parent) {
  this.elements.parent = parent;
  this.items.forEach((selectedPlant) => {
    this.elements.self.insertAdjacentHTML(
      'beforeend',
      `<p>${selectedPlant.title}</p>`
    );
  });

  parent.append(this.elements.self);
};

Cart.prototype.addItem = function (item) {
  this.items.push(item);
  this.elements.self.innerHTML = '';
  this.render(this.elements.parent);
};
