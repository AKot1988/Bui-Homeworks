//Task-01

const renderList = (list = { name: 'Unknown name', price: 'Undef. price' }) => {
  let iceCreamList = document.getElementsByTagName('UL');
  list.forEach((item, i) => {
    let createNewIceCream = document.createElement('li');
    iceCreamList[0].insertAdjacentElement('beforeend', createNewIceCream);
    let iceCreamName = document.createElement('h2');
    let iceCreamPrice = document.createElement('p');
    iceCreamName.innerText = item.name;
    iceCreamPrice.innerText = item.price;
    createNewIceCream.insertAdjacentElement('beforeend', iceCreamName);
    createNewIceCream.insertAdjacentElement('beforeend', iceCreamPrice);
  });
};

const dataIceCream = [
  { name: 'хрещатик', price: '7,99 uah' },
  { name: '100% пломбір', price: '2,50 uah' },
  { name: 'maximus', price: '12,99 uah' },
  { name: 'пташине молоко', price: '20,99 uah' },
  { name: 'БУЙ в шоколаді', price: '30,41 uah' },
  { name: 'Канхфета від Гамлетовського дяді', price: '0,00 uah' },
];

renderList(dataIceCream);

//Task-02

const clearLinksPage = () => {
  // за допомогою query Selector All отримали Node коллекцію
  let linksCollection = document.querySelectorAll('a');
  linksCollection.forEach((link) => {
    hrefAttributes = link.getAttribute('href');
    if (!hrefAttributes) {
      link.remove();
      console.log('Так тут немае нічого в атрибуті href');
    }
  });
};
clearLinksPage();

//Task-03
const filterClothes = (color) => {
  const inputField = document.querySelector('.field');
  let newInformation = document.createElement('p');
  newInformation.innerText = 'такого кольору немає в асортименті';
  newInformation.style.color = 'red';
  // let boolFlag = false;
  let counter = 0;

  let listItemCollection = document.querySelectorAll('.list__item');
  listItemCollection.forEach((item) => {
    console.dir(item);
    if (!item.innerText.includes(color)) {
      item.style.display = 'none';
    } else {
      counter++;
    }
  });

  if (counter === 0) {
    inputField.insertAdjacentElement('afterend', newInformation);
  }
};

document.getElementById('filterBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const valueField = document.querySelector('.field').value;
  // виклик вашої функції
  filterClothes(valueField);
});
