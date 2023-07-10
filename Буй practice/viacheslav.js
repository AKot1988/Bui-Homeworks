// TASK - 01;
// Написати функцію without, котра повертає новий обь'єкт без вказаних значень.

// Arguments:
// object - будь-який обь'єкт
// propertyName - назва властивості для видалення
// Return value
// Jбʼєкт, у якого вказана властивість має значення null.

// Код для перевірки:
// const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' }
// console.log(without(data, 'address',)) // { login: 'gogi', password: 'GloryOfUkraine', address: null}

function without(obj, propertyName) {
  const newObj = {};
  for (let key in obj) {
    if (key !== propertyName) {
      newObj[key] = obj[key];
    } else {
      newObj[key] = null;
    }
  }

  return newObj;
}
const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' };
console.log(without(data, 'address')); // { login: 'gogi', password: 'GloryOfUkraine', address: null}
