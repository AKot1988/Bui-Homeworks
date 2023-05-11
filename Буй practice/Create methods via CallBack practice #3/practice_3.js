let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //Нижче метод, myForEach
// let myForEach = function (array, avadaKedavra) {
//   for (let i = 0; i < array.length; i++) {
//     avadaKedavra(array[i], i);
//   }
// };

// myForEach(
//   ['dsfgsdf', 'edfged', 'eqftewdgf', 'erf'],
//   function lumos(element, index) {
//     console.log(element, index);
//   }
// );

// //Нижче метод, myFind
// let myFind = function (array, patronus) {
//   for (let i = 0; i < array.length; i++) {
//     if (patronus(array[i], i)) {
//       return array[i];
//     }
//   }
// };

// console.log(
//   myFind(testArray, (el) => {
//     return el % 2 === 0;
//   })
// );

// //Нижче метод, який створює новий масив і не чіпає оригінальний масив
// let myFindAll = function (array, ingardiumLeviosa) {
//   newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (ingardiumLeviosa(array[i], i)) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// };

// console.log(
//   myFindAll(testArray, (arrEl) => {
//     return arrEl % 2 === 0;
//   })
// );

// //Нижче метод, який змінює оригінальний масив
// let myFindAll = function (array, ingardiumLeviosa) {
//   for (let i = 0; i < array.length; i++) {
//     if (!ingardiumLeviosa(array[i], i)) {
//       array.splice(i, 1);
//     }
//   }
//   return array;
// };

// console.log(
//   myFindAll(testArray, (arrEl) => {
//     return arrEl % 2 === 0;
//   })
// );

// let mySome = function (array, alohomora) {
//   for (let i = 0; i < array.length; i++) {
//     return alohomora(array[i], i);
//   }
// };

// console.log(
//   mySome(testArray, (testArrElement) => {
//     return testArrElement === 11;
//   })
// );

let mySome = function (array, alohomora) {
  for (let i = 0; i < array.length; i++) {
    if (alohomora(array[i], i)) {
      return true;
    }
  }
  return false;
};

console.log(
  mySome(testArray, (testArrElement) => {
    return testArrElement === 9;
  })
);
