import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import './Places.scss';
import {
  getAllPlaygrounds,
  getAllPlaygroundsByUser,
  getAllPlaygroundsFavorites,
} from '@/firebase/API.js';
import IronCard from '@/components/IronCard/IronCard.js';
import Form from '@/components/Form/Form.js';
import './Places.scss';

export default function PlacesPage() {
  this.filterOptions = [
    'Всі майданчики',
    'Мої майданчики',
    'Обрані майданчики',
  ];
  this.dataArray = null;
  this.cardsArray = [];
  this.elements = {
    wrapper: document.createElement('div'),
    optionsWrapper: document.createElement('div'),
    cardsWrapper: document.createElement('div'),
    filterOptions: document.createElement('select'),
    addNewCardButton: new Button({
      text: 'Create card',
      className: 'places__add__button',
      onClick: this.handleAdd,
    }),
  };
}

PlacesPage.prototype.render = function (parent) {
  this.elements.wrapper.classList.add('places');
  this.elements.wrapper.dataset.bui = 'places';
  this.elements.optionsWrapper.classList.add('places__options__wrapper');
  this.elements.cardsWrapper.classList.add('places__cards__wrapper');
  this.elements.filterOptions.classList.add('places__filterOptions');

  this.elements.filterOptions.innerHTML = this.createFilterList();

  this.elements.optionsWrapper.append(this.elements.filterOptions);
  this.elements.addNewCardButton.render(this.elements.optionsWrapper);

  this.renderFilteredPlaces(this.elements.cardsWrapper, getAllPlaygrounds());
  this.elements.filterOptions.addEventListener('change', (e) => {
    this.elements.cardsWrapper.innerHTML = '';
    const selectedOttionIndex = e.target.selectedIndex;
    const filter = e.target.options[selectedOttionIndex].dataset.filter;

    switch (filter) {
      case 'Всі майданчики':
        this.renderFilteredPlaces(
          this.elements.cardsWrapper,
          getAllPlaygrounds()
        );
        break;
      case 'Мої майданчики':
        this.renderFilteredPlaces(
          this.elements.cardsWrapper,
          getAllPlaygroundsByUser()
        );
        break;
      case 'Обрані майданчики':
        this.renderFilteredPlaces(
          this.elements.cardsWrapper,
          getAllPlaygroundsFavorites()
        );
        break;
    }
  });

  this.elements.wrapper.append(
    this.elements.optionsWrapper,
    this.elements.cardsWrapper
  );

  parent.append(this.elements.wrapper);

  const footer = new Footer();
  footer.render(parent);
};

PlacesPage.prototype.handleAdd = function () {
  console.log('Кнопень притиснули');
  const button = document.querySelector('.places__add__button');
  button.addEventListener('click', (e) => {
    const newForm = new Form();
    newForm.render(parent);
  });
};

PlacesPage.prototype.renderFilteredPlaces = async function (
  parent,
  APIFilterMethod
) {
  const allPlaces = await APIFilterMethod;
  allPlaces.forEach((cardData) => {
    const newCard = new IronCard(cardData);
    this.cardsArray.push(newCard.data);
    newCard.render(parent);
  });
};

PlacesPage.prototype.createFilterList = function () {
  return [
    ...new Set(
      this.filterOptions.map(
        (item) =>
          `<option value="${item}" data-filter="${item}">${item}</option>`
      )
    ),
  ].join();
};
