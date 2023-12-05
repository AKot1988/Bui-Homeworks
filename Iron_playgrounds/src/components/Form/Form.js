import './Form.scss';
import Button from '@/components/Button/Button.js';
import { addDoc, updateDoc, doc } from 'firebase/firestore';
import { Router } from '@/routes';
import { playgroundCollectionRef } from '@/firebase/firebase.js';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

export default function Form({ type = 'create', afterSubmit }) {
  this.type = type;
  this.addToFavorite = false;
  this.author = auth.currentUser.uid;
  this.afterSubmit = afterSubmit;
  this.rateOptions = ['5', '4', '3', '2', '1'];
  this.typeOptions = [
    'Топовий майданчик для спортсменів',
    'Загальний майданчик для спортіків і дітей',
    'Крaще це, чим нічого',
  ];
  this.elements = {
    form: document.createElement('form'),
    formHeader: document.createElement('h2'),
    title: document.createElement('input'),

    coordinates: {
      longitude: document.createElement('input'),
      latitude: document.createElement('input'),
    },
    description: document.createElement('textarea'),
    photo: document.createElement('input'),
    type: document.createElement('select'),
    rate: document.createElement('select'),
    button: new Button({
      text: this.handleActionText(), // TODO: create handleActionText method
      className: 'newCard__form__submit__button',
      clickHandler: (e) => this.handleFormAction(e),
    }),
    date: new Date(),
  };
}

Form.prototype.render = function (parent, data) {
  this.elements.form.classList.add('newCard__form');
  this.elements.formHeader.classList.add('newCard__form__header');
  this.elements.title.classList.add('newCard__form__title__input');

  this.elements.coordinates.longitude.classList.add('newCard__form__longitude');
  this.elements.coordinates.latitude.classList.add('newCard__form__latitude');

  this.elements.description.classList.add('newCard__form__description__input');

  this.elements.photo.classList.add('newCard__form__photo__input');

  this.elements.type.classList.add('newCard__form__type__select');
  this.elements.rate.classList.add('newCard__form__rate__select');

  this.elements.formHeader.innerText =
    'Заповни форму для додавання твого майданчика';
  this.elements.title.placeholder = 'Влучно дай назву новому майданчику';

  this.elements.coordinates.longitude.placeholder = 'Введи довготу';
  this.elements.coordinates.latitude.placeholder = 'Введи широту';
  this.elements.coordinates.longitude.addEventListener(
    'input',
    this.coordinatesValidation.bind(this, 'longitude')
  );
  this.elements.coordinates.latitude.addEventListener(
    'input',
    this.coordinatesValidation.bind(this, 'latitude')
  );

  this.elements.description.placeholder = 'Опиши плюси і мінуси майданчика';
  this.elements.photo.placeholder = 'Прикріпи фото тут';

  if (data) {
    this.editData(data);
  } else {
    this.elements.type.innerHTML = this.createOptions({
      optionsSet: this.typeOptions,
    });
    this.elements.rate.innerHTML = this.createOptions({
      optionsSet: this.rateOptions,
    });
  }

  this.elements.title.name = 'title';
  this.elements.coordinates.name = 'coordinates';
  this.elements.coordinates.longitude.name = 'longitude';
  this.elements.coordinates.latitude.name = 'latitude';
  this.elements.description.name = 'description';
  this.elements.photo.name = 'photo';
  this.elements.type.name = 'type';
  this.elements.rate.name = 'rate';

  this.elements.form.append(
    this.elements.formHeader,
    this.elements.title,
    this.elements.coordinates.longitude,
    this.elements.coordinates.latitude,
    this.elements.description,
    this.elements.photo,
    this.elements.type,
    this.elements.rate
  );
  this.elements.button.render(this.elements.form);
  parent.append(this.elements.form);
};

Form.prototype.handleCreate = async function () {
  const formData = new FormData(this.elements.form);

  const ironCardData = {
    title: formData.get('title'),
    author: Router.user.uid,
    coordinates: {
      longitude: formData.get('longitude'),
      latitude: formData.get('latitude'),
    },
    description: formData.get('description'),
    photo: formData.get('photo'),
    type: formData.get('type'),
    rate: formData.get('rate'),
  };

  await addDoc(playgroundCollectionRef, ironCardData);
};

Form.prototype.handleEdit = async function () {
  const formData = new FormData(this.elements.form);

  const UPDironCardData = {
    title: formData.get('title'),
    coordinates: formData.get('coordinates'),
    coordinates: {
      latitude: formData.get('latitude'),
      longitude: formData.get('longitude'),
    },
    description: formData.get('description'),
    photo: formData.get('photo'),
    type: formData.get('type'),
    rate: formData.get('rate'),
  };

  const cardForUpdDock = doc(playgroundCollectionRef, this.id);

  await updateDoc(cardForUpdDock, { ...UPDironCardData });
};

Form.prototype.editData = function (data) {
  this.elements.title.value = data.title;
  this.elements.coordinates.latitude.value = data.coordinates.latitude;
  this.elements.coordinates.longitude.value = data.coordinates.longitude;
  this.elements.description.value = data.description;
  this.elements.photo.value = data.photo;
  this.elements.type.innerHTML = this.createOptions({
    optionsSet: this.typeOptions,
    type: 'edit',
    value: data.type,
  });
  console.log(this.elements.type.innerHTML);
  this.elements.rate.innerHTML = this.createOptions({
    optionsSet: this.rateOptions,
    type: 'edit',
    value: data.rate,
  });
  this.id = data.id;
};

Form.prototype.createOptions = function ({
  optionsSet = [],
  type = 'create',
  value,
}) {
  switch (type) {
    case 'edit':
      return optionsSet.reduce((accumulator, currentValue) => {
        if (currentValue === value) {
          return (
            accumulator +
            `<option value="${currentValue}" data-filter="${currentValue}" selected>${currentValue}</option>`
          );
        } else {
          return (
            accumulator +
            `<option value="${currentValue}" data-filter="${currentValue}">${currentValue}</option>`
          );
        }
      }, '');

    case 'create':
      return optionsSet.reduce((accumulator, currentValue) => {
        return (
          accumulator +
          `<option value="${currentValue}" data-filter="${currentValue}">${currentValue}</option>`
        );
      }, '');

    default:
      return '';
  }
};

Form.prototype.handleFormAction = async function (e) {
  e.preventDefault();

  switch (this.type) {
    case 'edit':
      await this.handleEdit();
      break;
    case 'create':
      await this.handleCreate();
      break;
    default:
      throw TypeError('Wrong form type - ' + this.type);
  }

  this.afterSubmit();
};

Form.prototype.handleActionText = function () {
  switch (this.type) {
    case 'edit':
      return 'Edit iron place';
      break;
    case 'create':
      return 'Create iron place';
      break;
    default:
      throw TypeError('Wrong form type - ' + this.type);
  }
};

Form.prototype.coordinatesValidation = function (type) {
  if (type === 'longitude') {
    const longitude = this.elements.coordinates.longitude.value;
    const longitudeTemplate = '-?([1]?[0-7]?[0-9](.d+)?|180(.0+)?)';
    this.elements.coordinates.longitudeErrorMessages =
      document.createElement('p');
    this.elements.coordinates.longitudeErrorMessages.classList.add(
      'newCard__form__coordinates__longError'
    );
    this.elements.coordinates.longitudeErrorMessages.innerText =
      'Довгота повинна бути від -180 до 180';

    if (!longitude.match(longitudeTemplate)) {
      document
        .querySelector('.newCard__form__coordinates__longError')
        ?.remove();
      this.elements.coordinates.longitude.insertAdjacentElement(
        'beforebegin',
        this.elements.coordinates.longitudeErrorMessages
      );
    } else {
      document
        .querySelector('.newCard__form__coordinates__longError')
        ?.remove();
    }
  } else if (type === 'latitude') {
    const latitude = this.elements.coordinates.latitude.value;
    const latitudeTemplate = '-?([1-8]?[0-9](.d+)?|90(.0+)?)';
    this.elements.coordinates.latitudeErrorMessages =
      document.createElement('p');
    this.elements.coordinates.latitudeErrorMessages.classList.add(
      'newCard__form__coordinates__latError'
    );
    this.elements.coordinates.latitudeErrorMessages.innerText =
      'Широта повинна бути від -90 до 90';

    if (!latitude.match(latitudeTemplate)) {
      document.querySelector('.newCard__form__coordinates__latError')?.remove();
      this.elements.coordinates.latitude.insertAdjacentElement(
        'beforebegin',
        this.elements.coordinates.latitudeErrorMessages
      );
    } else {
      document.querySelector('.newCard__form__coordinates__latError')?.remove();
    }
  }
};

const showPosition = function (position) {
  this.elements.coordinates.longitude = position.coords.longitude;
  this.elements.coordinates.latitude = position.coords.latitude;

  console.log(
    'Latitude: ' +
      position.coords.latitude +
      'Longitude: ' +
      position.coords.longitude
  );
};

const getLocation = function () {
  navigator.geolocation.getCurrentPosition(showPosition);
};
