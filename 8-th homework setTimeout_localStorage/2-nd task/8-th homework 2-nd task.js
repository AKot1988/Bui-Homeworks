import { GOODS__ARRAY } from './goods__array.js';
import Storage from './checkLocalStorage.js';
import ItemCard from './itemCard.js';

let basketStorage = new Storage('basket');

let basketIdsArray = [];
let data = basketStorage.getProperty();
if (!data) {
  console.error('The basket is empty');
  GOODS__ARRAY.map((data) => {
    let newItem = new ItemCard(data);
    newItem.render(document.getElementById('root_storage'));
  });
} else {
  console.error('Smth putted into the basket');
  let basketGoodsForRenderArray = [];
  GOODS__ARRAY.forEach((card) => {
    if (data.includes(card.id.toString())) {
      basketGoodsForRenderArray.push(card);
      console.log(basketGoodsForRenderArray);
    }
  });
  basketGoodsForRenderArray.map((basketCard) => {
    let basketItem = new ItemCard(basketCard);
    basketItem.render(document.getElementById('root_storage'));
  });
}

document.body.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.closest('.itemCard')) {
    let selectedCard = event.target.closest('.itemCard');
    console.log(selectedCard.dataset.id);
    if (!basketIdsArray.includes(selectedCard.dataset.id)) {
      basketIdsArray.push(selectedCard.dataset.id);
      basketStorage.setNewData(basketIdsArray);
    }
  }
});
