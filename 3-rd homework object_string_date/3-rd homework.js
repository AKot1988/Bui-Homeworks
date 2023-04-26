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
  startSaleDate
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
      let cuttedString = splittedString.splice(
        maxLength,
        splittedString.length - 1,
        '...'
      );
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

  const checkDaytoSale = function (startSaleDate) {
    let date = new Date();
    let salesStart = new Date();
    salesStart.setDate(startSaleDate);
    console.log(date.getDay);
  };

  return {
    label,
    schedule,
    products,
    description,
    startSaleDate,

    makeBlackFriday,
    verifyStore,
    ellipsisText,
    censorshipCheck,
    checkDaytoSale,
  };
}

let kysiaShop = profileMagazine(
  'KysiaShop',
  'mon-fri 7am- 6pm',
  kysiaShopProducts
);

kysiaShop.verifyStore(productsOnStorage);
kysiaShop.ellipsisText('Avada Kedavra, Gogi', 13);
kysiaShop.censorshipCheck('Avada Kedavra, Gogi Kedavra', 'Kedavra');
kysiaShop.checkDaytoSale('22.07.2023');
