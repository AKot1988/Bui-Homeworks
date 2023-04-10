// // --------------------------------------------------Таска 1--------------------------------------------------------------------------------
// // ## TASK-01

// // Написати фунцію, яка буде визначати чи є буква в слові на визначеній позиції.

// // ##### Arguments:

// // - _word_ - слово, на якому треба буде перевіряти наявність букви
// // - _index_ - позиція символу на якому треба перевірити здогадку
// // - _char_ - буква, наявність якої треба перевіряти в слові

// // ##### Return value

// // true або false, залежно від того є буква в слові чи ні.

// // ----------------------------------------Рішення такси 1----------------------------------------------------------------------------------
// let findChar = function (word, index, char) {
//   let сharArray = word.charAt(index-1);
//   if (сharArray === char) {
//     alert('Конгратюлейшнс, ю ар красавчік');
//     return true;
//   }
//   else { 
//     alert("Ти невгадав, бестолоч")
//     return false; }
// };

// findChar (prompt('Придумайте і введіть слово'), +prompt("Введіть позицію літери"), prompt('Запропонуйте літеру'))
// // ------------------------------------------------Кінець рішення таски 1-------------------------------------------------------------------










// // --------------------------------------------------Таска 2--------------------------------------------------------------------------------
// // ## TASK-02

// // Напишіть функцію, яка перевірятиме довжину свого аргументу.

// // ##### Arguments:

// // - str - строка, довжину якої має перевіряти функція
// // - expectedLength - очікувана довжина строки

// // ##### Return value

// // true або false


// // ----------------------------------------Рішення такси 2----------------------------------------------------------------------------------

// let checkLength = function(str, expectedLength) {
//   if (str.length === expectedLength) {
//     return true;
//   } else { 
//     return false;
//   }
// }

// checkLength (prompt("Введіть будь яку комбінацію символів"), +prompt("Вгадайте скільки символів ви ввели у попередньому рядку!?"))

// // ------------------------------------------------Кінець рішення таски 2-------------------------------------------------------------------






















// --------------------------------------------------Таска 3--------------------------------------------------------------------------------
// ## TASK-03

// Напишіть гру для відгадування слова.

// #### Game flow:

// - Спитати чи користувач хоче зіграти у гру?
// - Попросити користувача загадати слово.
// - Для кожного символу у загаданому слові, перевірити чи є такий символ у слові взагалі та чи співпадає здогадка користувача із символом на поточній позиції.
// - Якщо здогадка користувача _вірна_ - переходити до наступного символу
// - Якщо здогадка користувача _не вірна_ - повторювати запит символу допоки не набереться 5 помилкових здогадок, далі - вивести в консоль "You lose!". Якщо одна зі здогадок виявилася вірною - переходити на відгадування наступного символу.
// - Якщо користувач виграв - вивести у консоль "You win!"

// ----------------------------------------Рішення такси 3----------------------------------------------------------------------------------

// let charPosition = [
//   "першій",
//   "другій",
//   "третій",
//   "четвертій",
//   "п'ятій",
//   "шостій",
//   "сьомій",
//   "восьмій",
//   "дев'ятій",
//   "десятій"
// ];


// let game = function () {
//   let askedWords = prompt('ОК, придумай слово!');
//   let charArray = askedWords.split('');
//   console.log(charArray);
//   let errorsCounter = 0;
//   if (errorsCounter < 2) {
//     for (let i = 0; i < charArray.length; i++) {
//       let supousedChar = prompt('Як гадаєш яка буква на' + charPosition[i] + ' позиції у загаданому слові?');
//       if (charArray[i] === supousedChar) {
//         alert('Вірно, переходим до наступної букви');
//       };  if (charArray[i] !== supousedChar) {
//         alert('невгадав')
//         errorsCounter += errorsCounter;
//       }; if (errorsCounter == 2) {
//         alert('You lose!');
//         break
//       } else {errorsCounter += errorsCounter};
//     };
//   };
// }


// let mainQestion = confirm('Привіт, завай зіграємо в гру!?');

// if (mainQestion) {
//   game ()
// } else {alert('Щож, якщо захочеш заробити шальних бабок- оновиш сторінку');
// };

// ------------------------------------------------Кінець рішення таски 3-------------------------------------------------------------------







// ------------------------------------------------2-гий варіант рішення таски 3------------------------------------------------------------

// let gameAcceptQestion = function (str) {
//   while (str) {
//     str = getWord()
//   }
// }

// let getWord = function () {
//   let newWord = prompt('Загадай слово');
//   if (!newWord || newWord===Number) {
//     return console.error ("Потрібно ввести слово")
//     } else {
//       let charArray = newWord.split('')
//       return charArray
//     }
// }
  
// let getChar = function () {
//   let getChar = prompt('Введіть букву')
//   if (!getChar) {
//     console.error('необхідно ввести одну букву')
//   }
//   if (get = Number) {
//     console.error('необхідно ввести саме одну букву')
//   }
// }

// gameAcceptQestion (confirm("dude, do you want play the game?"));
// ------------------------------------------------Кінець 2-гого варіанту рішення таски 3---------------------------------------------------






// ------------------------------------------------3-тій варіант рішення таски 3 (максимально намагався циклами)------------------------------------------------------------
let word = "буй"
console.log (word)

let supousedChar = prompt('Загадайте букву')

let guessedChar = ""
let erorrCounter = 0


while (supousedChar) {
  // debugger
  for (let char of word) {
    let boolFlag = false
    if (char === supousedChar) {
      boolFlag = true
      console.log(boolFlag);
      word = word.slice(1, word.length)
    } 
    if (!boolFlag) {
      erorrCounter ++
      alert("Кількість помилок " + erorrCounter);
      break
    }
    if(boolFlag && guessedChar.indexOf(supousedChar) === -1) { // ця штука, вроде працює (не чіпати поки)
      guessedChar = guessedChar + supousedChar
      alert(guessedChar)
      break
    }
  }
  if(erorrCounter < 4) {
    supousedChar = prompt('Загадайте букву')
  } else { alert ("You lose")}
}
// ------------------------------------------------Кінець 3-ого варіанту рішення таски 3---------------------------------------------------








// let word = "gogetta"
// for (let i = 0; i < word.length; i++){
//   console.log(word[i])
// }



// // в коді нижче змінна "bykva" чомусь не бачиться у серезині циклу, питання - чому так (10.04.2023 23-48 не вірішено)
// let word = "котік"
// debugger
// let bykva = prompt("жени букву!")

// for (let char of word) {
//   if (char === bykva) {
//     console.log('прапвильно, Пес, а ти кмітливий!')
//   }
//   let bykva = prompt("жени букву!")
// }

