let kysiaShopProducts = [
  // Массив, що містить в собі товари (обєкти) що є в магазині
  {
    name: 'Brit care',
    price: 50,
    stock: 70,
  },
  {
    name: 'whiskas',
    price: 40,
    stock: 30,
  },
  {
    name: 'kotyachi sneki',
    price: 100,
    stock: 15,
  },
  {
    name: 'Мяв',
    price: 20,
    stock: 0,
  },
];

let productsOnStorage = [
  // Массив, що містить в собі товари (обєкти) що є на складі
  {
    name: 'Brit care',
    price: 50,
    stock: 100,
  },
  {
    name: 'whiskas',
    price: 40,
    stock: 25,
  },
  {
    name: 'kotyachi sneki',
    price: 100,
    stock: 45,
  },
  {
    name: 'Мяв',
    price: 20,
    stock: 200,
  },
];

function profileMagazine(
  label,
  schedule,
  products = [],
  description,
  startSaleDate,
  team
) {
  const makeBlackFriday = function (discount) {
    for (let product of this.products) {
      discountedPrice = product.price * discount;
    }
  };

  const verifyStore = function (storageItems = []) {
    this.products.forEach((product) => {
      let targetStorageProduct = storageItems.find(
        (storageProduct) => product.name === storageProduct.name
      );
      if (product.stock !== targetStorageProduct.stock) {
        product.stock = targetStorageProduct.stock;
      }
    });
  };
  const ellipsisText = function (text, maxLength) {
    let lengthSourceText = text.length;
    if (lengthSourceText > maxLength) {
      let splittedString = text.split('');
      splittedString.splice(maxLength, splittedString.length - 1, '...');
      text = splittedString.join('');
    }
    console.log(text);
  };

  const censorshipCheck = function (advertisement, forbiddenWord) {
    if (advertisement.includes(forbiddenWord)) {
      console.error('матюки знайдені, паскудник!');
      while (advertisement.includes(forbiddenWord)) {
        let clearedStr = advertisement.replace(forbiddenWord, '');
        advertisement = clearedStr;
      }
      console.log(advertisement);
    }
  };

  const checkDayToSale = function (startSaleDate) {
    let todayDate = new Date();
    todayDate.setHours(0);
    let salesStartDate = new Date(startSaleDate);
    let floatToSalesBeginning = (salesStartDate - todayDate) / 86400000;
    let daysToSalesBeginning = Math.round(floatToSalesBeginning);
    return daysToSalesBeginning;
  };

  const prepareInventory = function () {
    let allProductsStock = 0;
    this.products.forEach((product) => {
      if (product.stock > 0) {
        allProductsStock = allProductsStock + product.stock;
      }
    });

    let doesTeamEnough =
      allProductsStock / (this.team * 10 * this.checkDayToSale());
    if (doesTeamEnough >= 1) {
      return true;
    }
  };

  return {
    label,
    schedule,
    products,
    description,
    startSaleDate,
    team,

    makeBlackFriday,
    verifyStore,
    ellipsisText,
    censorshipCheck,
    checkDayToSale,
    prepareInventory,
  };
}

let kysiaShop = profileMagazine(
  'KysiaShop',
  'mon-fri 7am- 6pm',
  kysiaShopProducts,
  'KysiaShop - це суперсучасний магазин товарів для ваших вихованців, каптажників, буханок, булочок, шорстявих піздюків... Нам байдуже якими словами ви висоловлюєте любов до свого улюбленця... Ми його любимо не менше ніж ви самі...',
  '05.26.023',
  5
);

kysiaShop.verifyStore(productsOnStorage);
kysiaShop.ellipsisText('Avada Kedavra, Gogi', 16);
kysiaShop.censorshipCheck('Avada Kedavra, Gogi Kedavra', 'Kedavra');
console.log(kysiaShop.checkDayToSale('05.26.2023'));
console.log(kysiaShop.prepareInventory());
console.log(kysiaShop);
