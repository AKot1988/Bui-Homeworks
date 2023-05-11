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


// let cars = [
//   {
//     manufacturer: "citroen",
//     model: "C5Aircross"
//   },
//   'peugeot',
//   'BMW',
//   'volksWagen',
//   'mercedes'
// ]

// boolFlagMethhod = false
// for (let vehicle of cars) {
//   debugger
//   if (vehicle === "citroen") {
//     console.log("машина такої марки є у списку")
//     boolFlagMethhod = true
//     console.log(boolFlagMethhod)
//   }
// }

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
//   {
//     manufacturer: "seat",
//     model: "leon"
//   },
// ];


// let stringAllModels = ""
// for (let klych in transports)
// {
//   console.log(klych)
// }


// test = (array, keyWord) => {
//   let filteredArray = []
//   for (let key of array)
// { 
//   if (key.model === filter) {
//     filteredArray.push(model)
//   }
//   console.log(filteredArray)
// }
// }

// test(transports, model);

let transports = [
  {
    name: "citroen",
    model: "C5Aircross"
  },
  {
    name: "peugeot",
    model: "4008"
  },
  {
    name: "BMW",
    model: "M5"
  },
  {
    name: "mersedes",
    model: "sprinter"
  },
  {
    name: "seat",
    model: "ateca"
  },
  {
    name: "seat",
    model: "leon"
  },
];

test = (array, keyWord) => {
  debugger
  let filteredArray = []
  for (let key of array) {
    if (key.name === keyWord) {
      filteredArray.push(key.name)
    }
  }
  return filteredArray
}
console.log (test (transports, "seat"))



