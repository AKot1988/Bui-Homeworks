import './Form.scss';
import Button from '@/components/Button/Button.js';
import { addDoc, updateDoc, doc } from 'firebase/firestore';
import { CreateMap } from '@/utils';
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
  const mapContainerID = 'form__mapWrapper__container';
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
  // const lng = this.marker[0]
  // const lat = this.marker[1]
  const [lng, lat] = this.marker;

  const formData = new FormData(this.elements.form);
  const ironCardData = {
    title: formData.get('title'),
    author: Router.user.uid,
    //поправити координати і брати їх не з інпуів, а з мапи після драгу
    coordinates: {
      longitude: lng,
      latitude: lat,
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

//navigator.geolocation - перевіряє чи є доступ до геолокації в принципі у браузера

Form.prototype.getUserLocation = function () {
  new Promise(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newMap = new CreateMap({
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
          console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
          // Тут можна використовувати отримані координати
        },
        async () => {
          console.log(
            'Користувач не надав доступ до данних про місцезнаходження'
          );
          if (confirm('Обрати місце на мапі вручну?')) {
            const map = new CreateMap({
              longitude: 30.56163,
              latitude: 50.44887,
              mapContainerID: 'form__mapWrapper__container',
              customMarkerHTML: mapPointerSVG,
              mapScale: 8,
            });
            map.render();
            const mapContainer = document.getElementById(
              'form__mapWrapper__container'
            );
            const clickedCoordinates = await map.getCoordinates();
            this.elements.coordinates.longitude.value =
              clickedCoordinates.longitude;
            this.elements.coordinates.latitude.value =
              clickedCoordinates.latitude;
            console.log(clickedCoordinates);
            const marker = map.addMarker({
              longitude: this.elements.coordinates.longitude.value,
              latitude: this.elements.coordinates.latitude.value,
            });
            const getCoordAfterDrag = JSON.parse(
              localStorage.getItem('coordsAfterDrag')
            );
            this.elements.coordinates.longitude.value = getCoordAfterDrag[0];
            this.elements.coordinates.latitude.value = getCoordAfterDrag[1];
            console.log(this);
            console.log(getCoordAfterDrag);
          } else if (confirm('Ну тоді координати потрібно вводити руцями')) {
            this.elements.mapContainer.remove();

            //TODO: remove this. you don't need it
            this.elements.coordinates.longitude.style.display = 'block';
            this.elements.coordinates.latitude.style.display = 'block';
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
  this.marker = [longitude, latitude];
  console.log('New Coordinates arrived, suka! - ', this.marker);
};
