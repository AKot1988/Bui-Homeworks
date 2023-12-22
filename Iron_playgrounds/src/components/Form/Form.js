import './Form.scss';
import Button from '@/components/Button/Button.js';
import { addDoc, updateDoc, doc } from 'firebase/firestore';
import { Map } from '@/utils';
import { Router } from '@/routes';
import { playgroundCollectionRef } from '@/firebase/firebase.js';
import { uploadToStorage } from '@/firebase/API.js';
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
  this.receivedCoord = [];
  this.photoRef = null;
  this.elements = {
    form: document.createElement('form'),
    formHeader: document.createElement('h2'),
    title: document.createElement('input'),
    mapContainer: document.createElement('div'),
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
  const mapContainerID = 'form__mapWrapper__container';
  this.elements.form.classList.add('newCard__form');
  this.elements.formHeader.classList.add('newCard__form__header');
  this.elements.title.classList.add('newCard__form__title__input');
  this.elements.mapContainer.id = mapContainerID;

  this.elements.description.classList.add('newCard__form__description__input');
  this.elements.photo.classList.add('newCard__form__photo__input');
  this.elements.photo.id = 'photo__input';
  this.elements.type.classList.add('newCard__form__type__select');
  this.elements.rate.classList.add('newCard__form__rate__select');
  this.elements.formHeader.innerText =
    'Заповни форму для додавання нового майданчика';
  this.elements.title.placeholder = 'Дай назву майданчику';

  this.elements.description.placeholder = 'Опиши плюси і мінуси майданчика';
  // this.elements.photo.innerText = 'Прикріпи фото тут';
  this.elements.photo.type = 'file';
  this.elements.photo.addEventListener('change', async (ev) => {
    const file = ev.target.files[0];
    if (file) {
      this.photoRef = await uploadToStorage('photo__input');
      console.log(this);
    } else {
      console.log('no file');
    }
  });

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
  this.elements.description.name = 'description';
  this.elements.type.name = 'type';
  this.elements.rate.name = 'rate';

  this.elements.form.append(
    this.elements.formHeader,
    this.elements.title,
    this.elements.mapContainer,
    this.elements.description,
    this.elements.photo,
    this.elements.type,
    this.elements.rate
  );
  this.elements.button.render(this.elements.form);
  parent.append(this.elements.form);

  await this.getUserLocation();
};

Form.prototype.editData = function (data) {
  this.elements.title.value = data.title;
  console.log(this.receivedCoord);
  this.receivedCoord.latitude = data.coordinates.latitude;
  this.receivedCoord.longitude = data.coordinates.longitude;
  console.log(this.receivedCoord);
  this.elements.description.value = data.description;
  this.elements.photoURL = data.photo;
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
  // const lng = this.marker[0]
  // const lat = this.marker[1]
  const [lng, lat] = this.receivedCoord;

  const formData = new FormData(this.elements.form);
  const ironCardData = {
    title: formData.get('title'),
    author: Router.user.uid,
    coordinates: {
      longitude: this.receivedCoord,
      latitude: this.receivedCoord,
    },
    description: formData.get('description'),
    photo: this.photoRef,
    type: formData.get('type'),
    rate: formData.get('rate'),
  };
  console.log(ironCardData);
  switch (this.type) {
    case 'edit':
      const cardForUpdDock = doc(playgroundCollectionRef, this.id);
      console.log(this.receivedCoord);
      ironCardData.photo = this.elements.photoURL;
      ironCardData.coordinates.longitude = this.receivedCoord.longitude;
      ironCardData.coordinates.latitude = this.receivedCoord.latitude;
      console.log(ironCardData);
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

Form.prototype.getUserLocation = function () {
  new Promise(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newMap = new Map({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            mapContainerID: 'form__mapWrapper__container',
            customMarkerHTML: mapPointerSVG,
            markerDragged: (...allArgs) => this.markerDragged(...allArgs),
          });

          newMap.render();

          newMap.addMarker({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          });
        },
        async () => {
          console.log(
            'Користувач не надав доступ до данних про місцезнаходження'
          );
          if (confirm('Обрати місце на мапі вручну?')) {
            const kyivCoords = {
              longitude: 30.56163,
              latitude: 50.44887,
            };
            const map = new Map({
              longitude: kyivCoords.longitude,
              latitude: kyivCoords.latitude,
              mapContainerID: 'form__mapWrapper__container',
              customMarkerHTML: mapPointerSVG,
              mapScale: 8,
              markerDragged: (...allArgs) => this.markerDragged(...allArgs),
            });
            map.render();
            map.addMarker({
              longitude: kyivCoords.longitude,
              latitude: kyivCoords.latitude,
            });
          } else {
            document.querySelector('.modal__wrapper').remove();
            this.elements.form.remove();
            throw new Error(
              'Вибачте, але без координат ми не зможемо вам допомогти'
            );
          }
        }
      );
    } else {
      console.log(
        'Geolocation is not supported by your browser. Please, use search'
      );
    }
  });
};

Form.prototype.markerDragged = function (longitude, latitude) {
  this.receivedCoord = [longitude, latitude];
  console.log('New Coordinates arrived, suka! - ', this.receivedCoord);
  return this.receivedCoord;
};
