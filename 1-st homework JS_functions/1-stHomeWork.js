// // ----------------------------------------Таска 1----------------------------------------------------------------------------------
// let findChar = function (word, index, char) {
//   let сharArray = word.charAt(index - 1);
//   if (сharArray === char) {
//     alert('Конгратюлейшнс, ю ар красавчік');
//     return true;
//   } else {
//     alert('Ти невгадав, бестолоч');
//     return false;
//   }
// };

// findChar(
//   prompt('Придумайте і введіть слово'),
//   +prompt('Введіть позицію літери'),
//   prompt('Запропонуйте літеру')
// );
// // ------------------------------------------------Кінець рішення таски 1-------------------------------------------------------------------

// // ----------------------------------------Таска 2----------------------------------------------------------------------------------

// let checkLength = function (str, expectedLength) {
//   if (str.length === expectedLength) {
//     return true;
//   } else {
//     return false;
//   }
// };

// checkLength(
//   prompt('Введіть будь яку комбінацію символів'),
//   +prompt('Вгадайте скільки символів ви ввели у попередньому рядку!?')
// );

// // ------------------------------------------------Кінець рішення таски 2-------------------------------------------------------------------

// // ------------------------------------------------Таска 3 (максимально намагався циклами)------------------------------------------------------------
let word = 'буй';
console.log(word);

let supousedChar = prompt('Загадайте букву');

let guessedChar = '';
let erorrCounter = 0;

while (supousedChar) {
  // debugger
  for (let char of word) {
    let boolFlag = false;
    if (char === supousedChar) {
      boolFlag = true;
      console.log(boolFlag);
      word = word.slice(1, word.length);
    }
    if (!boolFlag) {
      erorrCounter++;
      alert('Кількість помилок ' + erorrCounter);
      break;
    }
    if (boolFlag && guessedChar.indexOf(supousedChar) === -1) {
      // ця штука, вроде працює (не чіпати поки)
      guessedChar = guessedChar + supousedChar;
      alert(guessedChar);
      break;
    }
  }
  if (erorrCounter < 4) {
    supousedChar = prompt('Загадайте букву');
  } else {
    alert('You lose');
  }
}
// // ------------------------------------------------Кінець 3-ого варіанту рішення таски 3---------------------------------------------------
