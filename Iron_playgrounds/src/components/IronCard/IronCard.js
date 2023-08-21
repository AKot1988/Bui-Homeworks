export default function IronCard(data) {
  this.data = data;
  this.elements = {
    self: document.createElement('div'),
    title: document.createElement('h3'),
    description: document.createElement('p'),
    photo: document.createElement('img'),
    longitude: document.createElement('p'),
    latitude: document.createElement('p'),
    rate: document.createElement('p'),
    author: document.createElement('p'),
  };
}

IronCard.prototype.render = function (parent) {
  this.elements.self.classList.add('iron-card');
  this.elements.title.classList.add('iron-card__title');
  this.elements.description.classList.add('iron-card__description');
  this.elements.photo.classList.add('iron-card__photo');
  this.elements.longitude.classList.add('iron-card__longitude');
  this.elements.latitude.classList.add('iron-card__latitude');
  this.elements.rate.classList.add('iron-card__rate');
  this.elements.author.classList.add('iron-card__author');

  this.elements.title.innerText = this.data.title;
  this.elements.description.innerText = this.data.description;
  this.elements.photo.src = this.data.photo;
  this.elements.longitude.innerText = this.data.coordinates.longitude;
  this.elements.latitude.innerText = this.data.coordinates.latitude;
  this.elements.rate.innerText = this.data.rate;
  this.elements.author.innerText = this.data.author;

  this.elements.self.append(
    this.elements.photo,
    this.elements.title,
    this.elements.description,
    this.elements.rate
  );
  parent.append(this.elements.self);
};
