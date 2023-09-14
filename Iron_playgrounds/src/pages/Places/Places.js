import Button from '@/components/Button/Button.js';
import {
  getAllPlaygrounds,
  getAllPlaygroundsByUser,
  getAllPlaygroundsByFilter,
} from '@/firebase/API.js';
import IronCard from '@/components/IronCard/IronCard.js';
import Form from '@/components/Form/Form.js';

export default function Places() {
  this.elements = {
    cardsArray: [],
    wrapper: document.createElement('div'),
    optionsWrapper: document.createElement('div'),
    cardsWrapper: document.createElement('div'),
    filterOptions: document.createElement('select'),
    addNewCardButton: new Button({
      text: 'add new card',
      className: 'places__add__button',
      onClick: this.handleAdd,
    }),
  };
}

Places.prototype.render = function (parent) {
  this.elements.wrapper.classList.add('places__wrapper');
  this.elements.optionsWrapper.classList.add('places__options__wrapper');
  this.elements.cardsWrapper.classList.add('places__cards__wrapper');
  this.elements.filterOptions.classList.add('places__filterOptions');

  this.elements.optionsWrapper.append(
    this.elements.filterOptions,
    this.elements.addNewCardButton
  );
  this.elements.cardsWrapper.append(this.elements.cardsArray);

  this.elements.wrapper.append(
    this.elements.optionsWrapper,
    this.elements.cardsWrapper
  );
};

Places.prototype.renderFilteredPlaces = function (filteredCardsArray) {
  filteredCardsArray.forEach((cardItem) => {
    this.elements.cardsArray.push(new IronCard(cardItem));
  });

  this.elements.cardsArray.forEach((cardItem) => {
    cardItem.render(this.elements.cardsWrapper);
  });
};

Places.prototype.handleAdd = function (parent) {
  const createCard = this.elements.addNewCardButton;
  createCard.addEventListener('click', () => {
    const newForm = new Form();
    newForm.render(parent);
  });
};
