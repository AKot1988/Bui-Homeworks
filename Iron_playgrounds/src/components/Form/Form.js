import './Form.scss';
import Button from '@/components/Button/Button.js';
import { addDoc, updateDoc, doc } from 'firebase/firestore';
import { createMap } from '@/utils';
import { Router } from '@/routes';
import { playgroundCollectionRef } from '@/firebase/firebase.js';
import { getAuth } from 'firebase/auth';
import { mapPointerSVG } from '@/assets/images/svg/svg.js';

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

    mapContainer: document.createElement('div'),

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

Form.prototype.render = async function (parent, data) {
  this.elements.coordinates.longitude.style.display = 'none';
  this.elements.coordinates.latitude.style.display = 'none';
  const mapContainerID = 'mapWrapper__container';
  this.elements.form.classList.add('newCard__form');
  this.elements.formHeader.classList.add('newCard__form__header');
  this.elements.title.classList.add('newCard__form__title__input');
  this.elements.mapContainer.id = mapContainerID;

  this.elements.description.classList.add('newCard__form__description__input');
  this.elements.photo.classList.add('newCard__form__photo__input');
  this.elements.type.classList.add('newCard__form__type__select');
  this.elements.rate.classList.add('newCard__form__rate__select');
  this.elements.formHeader.innerText =
    'Заповни форму для додавання нового майданчика';
  this.elements.title.placeholder = 'Дай назву майданчику';

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

  this.elements.coordinates.longitude.classList.add('newCard__form__longitude');
  this.elements.coordinates.latitude.classList.add('newCard__form__latitude');
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

  this.elements.title.name = 'title';
  this.elements.coordinates.name = 'coordinates';
  this.elements.coordinates.latitude.name = 'latitude';
  this.elements.coordinates.longitude.name = 'longitude';
  this.elements.description.name = 'description';
  this.elements.photo.name = 'photo';
  this.elements.type.name = 'type';
  this.elements.rate.name = 'rate';

  this.elements.form.append(
    this.elements.formHeader,
    this.elements.title,
    this.elements.coordinates.longitude,
    this.elements.coordinates.latitude,
    this.elements.mapContainer,
    this.elements.description,
    this.elements.photo,
    this.elements.type,
    this.elements.rate
  );
  this.elements.button.render(this.elements.form);
  parent.append(this.elements.form);

  await this.getUserLocation();

  console.log(this);
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
  switch (this.type) {
    case 'edit':
      const cardForUpdDock = doc(playgroundCollectionRef, this.id);
      await updateDoc(cardForUpdDock, { ...ironCardData });
      break;
    case 'create':
      await addDoc(playgroundCollectionRef, ironCardData);
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

Form.prototype.getUserLocation = function () {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.elements.coordinates.longitude.value =
            position.coords.longitude.toString();
          this.elements.coordinates.latitude.value =
            position.coords.latitude.toString();
          console.log(this.elements.coordinates);
          createMap({
            longitude: this.elements.coordinates.longitude.value,
            latitude: this.elements.coordinates.latitude.value,
            mapContainerID: 'mapWrapper__container',
          });
          console.log(position.coords);
          console.log(this.elements.coordinates);
          resolve(); // Викликаємо resolve, якщо отримали координати успішно
        },
        (error) => {
          if (confirm('Вибрати місце самостійно на мапі?')) {
            const map = createMap({
              longitude: 30.56163,
              latitude: 50.44887,
              mapContainerID: 'mapWrapper__container',
              customMarkerHTML: mapPointerSVG,
              mapScale: 8,
            });

            const mapContainer = document.getElementById(
              'mapWrapper__container'
            );
            mapContainer.addEventListener('click', (e) => {
              const selectedCoordinates = JSON.parse(
                localStorage.getItem('coordinates')
              );
              const selectedDIVposition = JSON.parse(
                localStorage.getItem('DIVposition')
              );
              this.elements.coordinates.longitude.value =
                selectedCoordinates.longitude.toString();
              this.elements.coordinates.latitude.value =
                selectedCoordinates.latitude.toString();
              console.log(selectedCoordinates);
              console.log(selectedDIVposition);
            });

            map.on('load', function () {
              const markerEl = document.createElement('div');
              markerEl.innerHTML = mapPointerSVG;
              markerEl.classList.add('map-page__marker');
              markerEl.style.position = 'absolute';
              markerEl.style.left = selectedDIVposition.x + 'px';
              markerEl.style.top = selectedDIVposition.y + 'px';
            });
          } else if (confirm('Ну тоді координати потрібно вводити руцями')) {
            this.elements.mapContainer.remove();
            this.elements.coordinates.longitude.style.display = 'block';
            this.elements.coordinates.latitude.style.display = 'block';
          }
          reject(error); // Викликаємо reject у випадку помилки
        }
      );
    }
  });
};
