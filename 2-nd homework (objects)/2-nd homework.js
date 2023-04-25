// ## TASK-01
const without = function (object, propertyName) {
  // створення функції, яка приймає два параметри (обєкт та ключ властивості)
  for (let prop in object) {
    // в умові цикла створюємо змінну prop та передаємо обєкт який передали аргументом у функцію
    if (prop === propertyName) {
      //оскільки цикл in то ми проходимось по ключам обєкта і шукаємо співпадіння з передеаною аргументом зміною propertyName
      object[propertyName] = null; // якщо умова ifу спрацювала то ми предаємо відповідному ключу нове значення, в данному випадку null
    }
  }
  return object; // після завершення циклу (коли ми пройшли по всім властивостям) ретерном функції є обєкт (або оригінал, апо відредагований, при умові спрацювання іфу)
};
const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kyiv' }; // приклад обєкту для передачі у функцію
console.log(without(data, 'address')); // виклик функції з потрібними аргументами

// ## TASK-02

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

function profileMagazine(label, schedule, products = []) {
  // оголошення функції яка приймає агрументами 2 рядки та один масив
  const makeBlackFriday = function (discount) {
    // Оголошення функції, яка є методом створеного у ретерні обєкту
    for (let product of this.products) {
      // цикл фор оф, оголошуємо в ньому змінну product (в цю змінну прилітає обєкт з масиву товарів) і передаємо у цикл масив продуктів. Оскільки функція makeBlackFriday є методом обєкту створеного який повертає функція profileMagazine то ми за допомогою this оголошуемо, що працюемо з масивом товарів, який лежить у ретюрні profileMagazine
      discountedPrice = product.price * discount; // на кожній ітерації циклу в кожному обєкті змінюємо значення, яке лежить під ключем price просто перемножаемо його на значення discount
    }
  };
  const verifyStore = function (storageItems = []) {
    // Оголошуємо функцію, яка є медодом створеного за допомогою функції profileMagazine обєкту,
    // product - Об'єкт одного з продуктів у магазині
    this.products.forEach((product) => {
      //звертаємось до products за допомогою this оскільки verifyStore та products є частиною одного обєкту в ретюрн. Для products викликаємо метод масивів forEach (метод який виконує функцію для кожного з елементів масиву). В форИч аргументом колбек функції прилітає product, яка приймае в себе по черзі обєкти продуктів в магазині
      //storageProduct - Об'єкт одного з продуктів на складі
      let targetStorageProduct = storageItems.find(
        // це перший рядок тіла колл бек функції в forEach. Тут оголошуемо змінну targetStorageProduct яка в себе прийме результат (знайдений обєкт з масиву storageItems), оскільки метод файнд повертає перший елемент масиву, який відповідає умові у колбек функції
        (storageProduct) => product.name === storageProduct.name //стрілкова функція, в якій оголошенно змінну storageProduct, значення якої прилетить у targetStorageProduct. Функція приймає в себе product з 78 рядка, і пробігає по масиву storageItems шукаючи обєкт із однаковим ключем name.
      );
      if (product.stock !== targetStorageProduct.stock) {
        // Після того як ми знайшли на 83 рядку 2 відповідних обєкти в 2-х масивах ми за допомогою розгалудження іф перевіряємо значення їх ключів "stock", якщо ці значення не дорівнюють...
        product.stock = targetStorageProduct.stock; // то зняченню stock в магазині присвоюемо значення stock зі складу
      }
    });
  };

  return {
    label,
    schedule,
    products,

    makeBlackFriday,
    verifyStore,
  };
}

let kysiaShop = profileMagazine(
  // Оголошення змінної яка містить в собі виклик функції profileMagazine
  'KysiaShop', // назва магазину, яка передається аргументом у функцію
  'mon-fri 7am- 6pm', //  розклад, передається аргументом у функцію
  kysiaShopProducts // масив товарів, який передається аргументом у функцію. Товари які буде містити в собі магазин
);

kysiaShop.verifyStore(productsOnStorage); //виклик методу verifyStore для створеного, за допомогою функції profileMagazine обєкту магазину
