// ---------task #1-------------------
const without = function (object, propertyName) {
  for (let prop in object) {
    if (prop === propertyName) {
      object[propertyName] = null
    }
  }
  return object
}
const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kyiv' }
console.log(without(data, 'address'))


// ## TASK-02
// Написати функцію `profileMagazine`, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним.

// #### Arguments:
// - _label_ - назва магазину
// - _schedule_ - розклад роботи
// - _products_ - масив продуктів, наявних на складі
// #### Return value
// Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 2 методи - `makeBlackFriday`, `verifySore`

// ## метод `makeBlackFriday`
// Перебрати увесь масив товарів, для кожного товару вирахувати нову ціну, просто перемноживши стару ціну на розмір знижки.

// #### Arguments:
// - _discount_ - розмір знижки числом від 0 до 1

// #### Return value
// Відсутнє

// ## метод `verifyStore`
// Метод має "пробігати" по усім товарам магазину, та для кожного звіряти його кількість з таким самим товаром на складі.
// Якщо кількість товару у магазині не збігається - переназначити її таку ж як на складі.

// #### Arguments:
// - _store_ - массив товарів на складі

// #### Return value
// Строка зі списком назв товарів кількість яких не зпівпала з наявністю у магазині.

let KysiaShopProducts = [
  {
    name: 'Brit care',
    price: 50,
    stock: 70
  },
  {
    name: 'whiskas',
    price: 40,
    stock: 30
  },
  {
    name: 'kotyachi sneki',
    price: 100,
    stock: 15
  },
  {
    name: 'Мяв',
    price: 20,
    stock: 0
  }
]

let productsOnStorage = [
  {
    name: 'Brit care',
    price: 50,
    stock: 100
  },
  {
    name: 'whiskas',
    price: 40,
    stock: 25
  },
  {
    name: 'kotyachi sneki',
    price: 100,
    stock: 45
  },
  {
    name: 'Мяв',
    price: 20,
    stock: 200
  }
]

function profileMagazine (label, schedule, products = []) {

  const makeBlackFriday = function (discount) {
    for (let product of this.products) {
      discountedPrice = product.price * discount
    }
  }
  // const verifyStore = function (store = []) {
  //   let balanceShop = 0
  //   let balanceStore = 0
  //   for (let key of this.products) {
  //     balanceShop = key.stock
  //     console.log(balanceShop)
  //   }
  //   for (let key of productsOnStorage) {
  //     balanceStore = key.stock
  //     console.log(balanceStore)
  //   }
  // }

    const verifyStore = function (store = []) {
    let balanceShop = 0
    let balanceStore = 0
    for (let key of this.products) {
      balanceShop = key.stock
      if (key = stock)
      console.log([stock])
    }
    for (let key of productsOnStorage) {
      balanceStore = key.stock
      console.log(balanceStore)
    }
  }

  return {
    label,
    schedule,
    products,

    makeBlackFriday,
    verifyStore
  }
}

let KysiaShop = profileMagazine ('KysiaShop', "mon-fri 7am- 6pm", KysiaShopProducts)
console.log(KysiaShop)
console.log(KysiaShop.verifyStore(productsOnStorage))