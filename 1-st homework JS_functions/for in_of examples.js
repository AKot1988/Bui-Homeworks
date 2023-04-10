// let abUser = {
//   age: 35,
//   sex: "male",
//   hobby: "bicycle",
//   pets: ["cat"]
// }

// let animals = [
//   'dog',
//   'horse',
//   'camel'
// ]

// for (let key in abUser) {
//  console.log(key) // age, sex, hobby... (key - це просто змінна, назву якої ми придумали саме в цьому циклі, можна назвати як завгодно)
// }


// for (let klytch in abUser) {
//   if (klytch === "pets") {
//     console.log ("ok, dude, you got pets")
//   } else {console.log("nameOff")}
// }


// let boolFlag = false;
// for (let klytch in abUser) {
//   if (klytch === "hobby") {
//     boolFlag = true
//   }
// }

// if (boolFlag) {
//   console.log ("OK key exists")
// } else {
//   console.error('нє, не існує')
// }


// for (let values of animals) {
//   console.log (values)
// }

// for (let values of animals) {
//   if (values === "horse") {
//     console.log ("Коняка в списку є")
//   }
// }

// let word = 'Сміття'
// for (findChar of word) {
//   if (findChar === 'т')
//   console.log ('у загаданому слові є буква ' + '"' + findChar + '"')
// }


let cars = [
  {
    manufacturer: "citroen",
    model: "C5Aircross"
  },
  'peugeot',
  'BMW',
  'volksWagen',
  'mercedes'
]

boolFlagMethhod = false
for (let vehicle of cars) {
  debugger
  if (vehicle === "citroen") {
    console.log("машина такої марки є у списку")
    boolFlagMethhod = true
    console.log(boolFlagMethhod)
  }
}

// for (let vehileInd in cars) {
//   console.log(vehileInd)
// }

// for (let vehileInd of cars) {
//   console.log(vehileInd)
// }

// for (let vehileInd in cars) {
//   console.log(cars[vehileInd])
// }


// let transports = [
//   {
//     manufacturer: "citroen",
//     model: "C5Aircross"
//   },
//   {
//     manufacturer: "peugeot",
//     model: "4008"
//   },
//   {
//     manufacturer: "BMW",
//     model: "M5"
//   },
//   {
//     manufacturer: "mersedes",
//     model: "sprinter"
//   },
//   {
//     manufacturer: "seat",
//     model: "ateca"
//   },
// ];

// for (let model of transports)
// {
//   if (model === "M5") {
//     console.log("yes we have bmw");
//   } console.log("no we haven't")
// }

