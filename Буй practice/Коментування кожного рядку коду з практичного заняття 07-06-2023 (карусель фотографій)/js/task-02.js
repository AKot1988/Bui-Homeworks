/**
 * TASK-02 карусель відгуків [Антон]
 *
 * Користувач на екрані має бачити тільки один відгук за раз.
 * При завантаженні сторінки відразу має відобразитися перший відгук.
 * При натисканні на кнопку "Next" - має відобразитися наступний відгук.
 * При натисканні на кнопку "Prev" - має відобразитися попередній відгук.
 * Якщо відгуків немає - карусель не відображається на екрані.
 *
 * ЗАВДАННЯ НА СЬОГОДНІ:
 * 1 - "зациклити" послідовність слайдів. коли користувач натискає Next на останньому - переходити на перший, та коли натискає Prev на першому - переходити на останній
 * 2 - зробити так, щоб після кліку на будь яке місце карточки відгуку, відкривалась модалка з тою ж самою інформацією
 */

const _FEEDBACKS = [
  // оголошення змінної _FEEDBACKS в якиій лежить массив обєктів
  {
    id: 1,
    name: 'Gogi Doe',
    avatar: 'https://placehold.co/600x400',
    title: "I'm happy",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 2,
    name: 'Mogi Doe',
    avatar: 'https://placehold.co/600x400',
    title: 'I like it',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    id: 3,
    name: 'Lo Doe',
    avatar: 'https://placehold.co/600x400',
    title: 'I love it',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
];

const myReduceReplica = (
  arr,
  callBackFunction,
  startAccumulatorValue = null
) => {
  let res = startAccumulatorValue;

  for (let i = 0; i < arr.length; i++) {
    res = callBackFunction(res, arr[i], i, arr);
  }

  return res;
};

const createCardHTML = (card, isActive = false) => {
  return `<article class="feedback-card ${
    isActive ? 'feedback-card--active' : ''
  }" title="${card.title}">
    <picture class="feedback-card__avatar">
      <img src="${card.avatar}" alt="${card.title}">
    </picture>
    <h3 class="feedback-card__title">${card.name}</h3>
    <p class="feedback-card__text">${card.text}</p>
  </article>`;
};

// оголошення функції - конструктору Carusel з аргументом cardsList
function Carusel(cardsList) {
  this.cards = cardsList.map((singleCard, index) => {
    return createCardHTML(singleCard, index === 0); // виклик функції createCardHTML повертає HTML розмітку в форматі строки '<article>...</article>'
  }); // [{...}, ...] ===> ['<article>...</article>', ...]

  this.cardsListHTML = this.cards.join('\n');

  // оскільки Carusel- це функція конструктор. То я можу звернутись до об'єкта, який буде в return цієї функції та до властивостей цього обєкта за допомогою магічного слова this
  //В рядку нижче за допомогою конструкції "this.cardsListHTML" ми створюємо нову властивість "cardsListHTML" в створюваних за допомогою "Carusel" обєктів
  // Oскільки агрумент "cardList", що передається у функцію Carusel- це масив, то ми його можемо передати аргументом у колбек функцію методу REDUCE, в даному випадку цей метод - це Reduce
  //
  // this.cardsListHTML = cardsList.reduce((acc, currentCard, index) => {
  //   acc += `<article class="feedback-card ${
  //     index === 0 ? 'feedback-card--active' : ''
  //   }" title="${currentCard.title}">
  //     <picture class="feedback-card__avatar">
  //       <img src="${currentCard.avatar}" alt="${currentCard.title}">
  //     </picture>
  //     <h3 class="feedback-card__title">${currentCard.name}</h3>
  //     <p class="feedback-card__text">${currentCard.text}</p>
  //   </article>`;
  //   return acc;
  // }, '');

  this.controlls = {
    next: document.createElement('button'),
    prev: document.createElement('button'),
  };
}

Carusel.prototype.render = function (parentSelector) {
  this.parent = document.body.querySelector(parentSelector);
  this.parent.addEventListener('click', (ev) => this.handleSlideChange(ev));

  this.controlls.prev.textContent = 'Prev';
  this.controlls.prev.className = 'feedback__button feedback__button--prev';

  this.controlls.next.textContent = 'Next';
  this.controlls.next.className = 'feedback__button feedback__button--next';

  this.parent.insertAdjacentElement('afterbegin', this.controlls.prev);
  this.parent.insertAdjacentHTML('beforeend', this.cardsListHTML);
  this.parent.insertAdjacentElement('beforeend', this.controlls.next);
};

Carusel.prototype.handleSlideChange = function (ev) {
  if (ev.target.tagName !== 'BUTTON') return null;

  let activeCard = this.parent.querySelector('.feedback-card--active');

  if (ev.target === this.controlls.prev) {
    const prevCard = activeCard.previousElementSibling;

    if (prevCard.tagName !== 'BUTTON') {
      activeCard.classList.remove('feedback-card--active');
      prevCard.classList.add('feedback-card--active');
    } else {
      activeCard.classList.remove('feedback-card--active');
      activeCard.parentElement
        .querySelector('article:last-of-type')
        .classList.add('feedback-card--active');
    }
  } else if (ev.target === this.controlls.next) {
    const nextCard = activeCard.nextElementSibling;

    if (nextCard.tagName !== 'BUTTON') {
      activeCard.classList.remove('feedback-card--active');
      activeCard.nextElementSibling.classList.add('feedback-card--active');
    } else {
      activeCard.classList.remove('feedback-card--active');
      activeCard.parentElement
        .querySelector('article:first-of-type')
        .classList.add('feedback-card--active');
    }
  }
};

const myCarusel = new Carusel(_FEEDBACKS);

myCarusel.render('.feedback');
