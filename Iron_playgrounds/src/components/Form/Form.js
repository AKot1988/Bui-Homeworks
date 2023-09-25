import Button from '@/components/Button/Button.js';
import { addDoc, getDocs } from 'firebase/firestore';
import { playgroundCollectionRef } from '@/firebase/firebase.js';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

export default function Form() {
  elements = {
    form: document.createElement('form'),
    formHeader: document.createElement('h2'),
    title: document.createElement('input'),
    author: null,
    coordinates: {
      longitude: null,
      altitude: null,
    },
    description: document.createElement('input'),
    photo: document.createElement('input'),
    type: document.createElement('select'),
    rate: document.createElement('select'),
    button: new Button({
      text: 'Create iron place',
      className: 'newCard__form__submit__button',
      onClick: this.handleCreate,
    }),
    date: new Date(),
  };
}

Form.prototype.render = function (parent) {
  this.elements.self.classList.add('newCard__form');
  this.elements.formHeader.classList.add('newCard__form__header');
  this.elements.title.classList.add('newCard__form__title__input');
  this.elements.description.classList.add('newCard__form__description__input');

  this.elements.photo.classList.add('newCard__form__photo__input');
  this.elements.photo.setAttribute('type', 'file');

  this.elements.type.classList.add('newCard__form__type__select');
  this.elements.rate.classList.add('newCard__form__rate__select');

  this.element.fomHeader.innerText =
    'Заповни форму для додавання твого майданчика';
  this.element.title.placeholder = 'Влучно дай назву новому майданчику';
  this.element.description.placeholder = 'Опиши плюси і мінуси майданчика';
  this.element.photo.placeholder = 'Прикріпи фото тут';
  this.element.type.placeholder = 'Обери тип майданчика';
  this.element.rate.placeholder = 'Порадь майданчик спортсменам-однодумцям';
  this.element.author.innerText = auth.currentUser.displayName;

  this.elements.title.name = 'title';
  this.elements.author.name = 'author';
  this.elements.coordinates.name = 'coordinates';
  this.elements.description.name = 'description';
  this.elements.photo.name = 'photo';
  this.elements.type.name = 'type';
  this.elements.rate.name = 'rate';

  this.elements.self.append(
    this.elements.title,
    this.elements.description,
    this.elements.photo,
    this.elements.rate,
    this.elements.button
  );
  parent.append(this.elements.form);
};

Form.prototype.handleCreate = async function () {
  const newIronCard = new FormData(this.elements.form);

  const newDataToPost = {
    title: newIronCard.get('title'),
    author: newIronCard.get('author'),
    coordinates: newIronCard.get('coordinates'),
    description: newIronCard.get('description'),
    photo: newIronCard.get('photo'),
    type: newIronCard.get('type'),
    rate: newIronCard.get('rate'),
  };

  await playgroundCollectionRef(addDoc, newDataToPost);
};
