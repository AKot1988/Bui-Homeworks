import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getAllPlaygrounds } from '@/firebase';
import IronCard from '@/components/IronCard/IronCard.js';
import '@/scss/HeroSection.scss';
import '@/scss/main.scss';

export default function Home() {}

Home.prototype.render = function (parent) {
  const header = new Header();
  header.render(parent);

  const newHeroSection = new HeroSection();
  newHeroSection.render(parent);

  const footer = new Footer();
  footer.render(parent);
};

function HeroSection() {
  this.currentSlideIndex = 0;
  this.prevSlide = null;
  this.elements = {
    // delete the fuck out
    self: document.createElement('div'),
    //only this div is needed, because it holds two elements inside
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

  this.elements.descriptionSlogan.innerHTML =
    'Будь сильним!<br>Ставай кращим!<br>Завжди та повсюду';
  this.elements.description.innerText =
    "Фізична активність дає змогу сучасній людині повертатись до свого я, звернути увагу на своє тіло і відчути його, розвантажити мозок і привести до ладу думки. Для нашої команди спорт асоціюється з такими словами, як здоров'я, дисципліна, медитація і чудовий настрій. Ми любимо тренуватись на вулиці, оскільки, окрім спорту, ми любимо наше місто - Київ. Саме турніки дають можливість не прив'язуватись до одного місця, фіксованого часу та закритого приміщення. Ви можете уявити себе легендарним Майком Тайсоном, який тренувався на вулиці коли ще не встало сонце і з'являвся вранішній туман. Або можете уявити себе вигаданим Рокі Бальбоа, який тренувався як скажений при будь-якій погоді. Ким би ви себе не відчували, я поділюсь з вами кращими спортивними майданчиками Києва";

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

  this.handleCarousel();
};

HeroSection.prototype.handleCarousel = async function (parent) {
  const ironPlaygroundsCollection = await getAllPlaygrounds();

  const firstIronCard = new IronCard(
    ironPlaygroundsCollection[this.currentSlideIndex]
  );
  firstIronCard.render(this.elements.carouselWrapper);
  this.prevSlide = firstIronCard;

  setInterval(() => {
    if (
      ironPlaygroundsCollection.length === 1 ||
      this.currentSlideIndex >= ironPlaygroundsCollection.length - 1
    ) {
      this.currentSlideIndex = 0;
    }

    this.prevSlide.remove();

    const newIronCard = new IronCard(
      ironPlaygroundsCollection[this.currentSlideIndex]
    );

    newIronCard.render(this.elements.carouselWrapper);
    this.currentSlideIndex++;
    this.prevSlide = newIronCard;
  }, 3000);
};
