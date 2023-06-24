import { GOODS__PLANTS } from './objects.js';
import PlantCard from './PlantCard.js';

const productsWrapper = document.querySelector('.plants__section');

const mapedArrayOfPlants = GOODS__PLANTS.map((plant) => {
  const plantCard = new PlantCard(plant);
  plantCard.render(productsWrapper);

  return plantCard;
});

const cartSection = document.createElement('div');
cartSection.classList.add('cart__section');
document.body.insertAdjacentElement('afterbegin', cartSection);

productsWrapper.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return null;

  const selectedPlant = event.target.closest('.plants__section__card--item');
  // запховування товару до корзини
  const selectedPlantID = +selectedPlant.dataset.id;
  const samePlantInCart = cartSection.querySelector(
    `[data-id="${selectedPlantID}"]`
  );

  if (samePlantInCart) {
    samePlantInCart.dataset.amount = +samePlantInCart.dataset.amount + 1;
    const plantPrice = samePlantInCart.querySelector(
      '.plants__section__card--price'
    );

    const priceSplitted = plantPrice.textContent.split(' X ');
    plantPrice.textContent =
      priceSplitted[0] + ' X ' + samePlantInCart.dataset.amount;
    return null;
  }

  // Сюда навіть не доходить. GPT каже, що я у іфі нижче повинен стукатись у ДОМ елемент за айдішкою для порівняння...
  for (let plant of GOODS__PLANTS) {
    if (plant.id === selectedPlantID) {
      const selectedPlantCard = new PlantCard(plant, true);
      selectedPlantCard.render(cartSection);
      break;
    }
  }

  // викликати на ній метод render() і передати йому аргументом корзину, куди ти хочеш відрендерити ці карточки
});
