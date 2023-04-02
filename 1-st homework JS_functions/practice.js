task-01
Записати вичерпне пояснення того як спрацьовують наступні HZLRB JavaScript коду:

const RAM = 16 //Створює змінну RAM, якій прийвоється значення 16 (числове)
const userCashDefault = 2048  //Створює змінну userCashDefault, якій прийвоється значення 16 (числове)
const userCash = userCashDefault + calcAdditionalRAM(user) // Створюємо змінну назвою userCash,  результатом якої буде 2024 + return функції calcAdditionalRAM з аргументом user

if ("false" === true) {                            //у нас є розшалудження, котре винонує строге порівняння рядка і буля. Ця умова не виконується...
  console.log("sounds confusing")       // Оскільки if не виконався- консольЛог не буде працювати
}  
//===============
const user = { name: "Gogi", age: Infinity }  // створення Обєкту user
console.log(user) // виводим обєкт user у консоль
const abUser = user  // створює ще одну змінну, яка є посиланням на обєкт user
abUser.harshBehaviour = true // створення нового key-value у user
console.log(user) // виводим обєкт user у консоль з новою властивістю
//===============
var condom = "durex" // створення нової глобальної змінної condom з рядковим значенням
var wareCondom = function (object) {  //оголошення функції "wareCondom" яка приймає агрумент із назвою object
  if (condom) {              //у нас є розгалудження, котре певіряє чи змінна condom = true, але воно видає помилку (false), оскільки ми звертаємось до VAR змінної, яка ще не оголошена, 
    object.protected = true // оскільки поперекджня умовва false то у обєкт object не присвоється властивість protected = true
  }
  var condom = null // оголошенняі змінної типу VAR з назвою comdom і значенням null
  console.log(object) // вивід у консолm аргументу
}
wareCondom(user) //виклик функції wareCondom аргументом в яку переходить user (у данному випадку юсер-це об'єкт)
//===============
let x, y, z
x = 6
--x
x--
y = 15
z = 4
z = --x - y * 5
console.log(x, y, z)

x = 6
y = 15
z = 4
y /= x + (5 % z)
console.log(x, y, z)

x = 6
y = 15
z = 4
x += y - x++ * z
console.log(x, y, z)

console.log(!!"true" == !!"false") // видасть значення true або undefined
console.log("true" == true)
console.log("true" === true)
console.log(NaN == 1)
console.log(NaN == NaN)
console.log(NaN === NaN)


// // task-02
// // На складі є патрони таких калібрів:

// // 7,62
// // 5,56
// // 4,6 30мм
// // 4,85
// // 5,6 50мм
// // Намалюйте блок-схему взаємодії солдата зі зброєю, якому потрібні набої, з завскладом, що їх видає. Ми вважаємо шо солдат який прийшов на склад вже знає калібр патронів, що йому потрібен та кількість таких набоїв.

// // додатково
// // перепишість намальовану блок-схему на JavaScript код