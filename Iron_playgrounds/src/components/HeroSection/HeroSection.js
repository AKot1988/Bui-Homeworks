import { textHeroSection } from '../../assets/commonVariables.js';
import './HeroSection.scss';
import { ironPlaygroundsCollection } from '../../assets/mockDataForCards.js';
import IronCard from '../IronCard/IronCard.js';

export default function HeroSection() {
  this.elements = {
    self: document.createElement('div'),
    wrapper: document.createElement('div'),
    descriptionWrapper: document.createElement('div'),
    descriptionSlogan: document.createElement('h1'),
    description: document.createElement('h3'),
    carouselWrapper: document.createElement('div'),
  };
}

HeroSection.prototype.render = function (parent) {
  this.elements.self.classList.add('hero-section');
  this.elements.wrapper.classList.add('hero-section__wrapper');
  this.elements.descriptionWrapper.classList.add(
    'hero-section__description__wrapper'
  );
  this.elements.descriptionSlogan.classList.add(
    'hero-section__description__slogan'
  );
  this.elements.description.classList.add('hero-section__description');
  this.elements.carouselWrapper.classList.add(
    'hero-section__carousel__wrapper'
  );

  this.elements.descriptionSlogan.innerHTML = textHeroSection.heroSlogan;
  this.elements.description.innerText = textHeroSection.heroDescription;

  this.elements.descriptionWrapper.append(
    this.elements.descriptionSlogan,
    this.elements.description
  );

  this.elements.wrapper.append(
    this.elements.descriptionWrapper,
    this.elements.carouselWrapper
  );
  this.elements.self.append(this.elements.wrapper);
  parent.append(this.elements.self);
};

ironPlaygroundsCollection.forEach((item) => {
  // debugger;
  const newIronCard = new IronCard(item);
  newIronCard.render(
    document.querySelector('.hero-section__carousel__wrapper')
  );
  // setTimeout(() => {
  //   document.querySelector('.hero-section__carousel__wrapper').innerHTML = '';
  // }, 3000);
});
