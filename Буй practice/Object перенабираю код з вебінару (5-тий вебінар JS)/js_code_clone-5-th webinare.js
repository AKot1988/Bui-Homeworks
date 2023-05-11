// * TASK-01
// *
// * Написати функцію, яка буде приймати 3 параметри - "назва фільму", "розклад сеансів", "вартість квитка"
// * Створюване значення цієї функції - об'єкт з трьома ключами фільму, розкладу та вартості квитків,
// * куди будуть записані значення переданих функцій аргументів. Та описати метод який буде розраховувати вартість знижки на квитки




// __________________________________________________________________________________________________________________________________
let createMovie = function(movieName, movieSchedule, ticketPrice, seats = 50) {
  const movie = {
    movieName,
    movieSchedule,
    ticketPrice,
    seats,
    discountPriceCounter: function (discount) {
      if (discount > 0 && discount < 1) {
        ticketPrice = this.ticketPrice * (1 - discount)
      }
    }
  }
  return movie;
}

let thor = createMovie ("Thor", "Su 12-00", 50)
let captaineAmerica = createMovie ("Captaine America", "Mo 19-00", 40)
let wakandaForever = createMovie ("Wakanda forever", "Wed 13-00", 80)
let arrival = createMovie ("Arrival", "Sat 18-00", 100)

function createTheatre (nameTheatre, addressTheatre, movieCollection = []) {
  const createdCinema = {
    name: nameTheatre,
    address: addressTheatre,
    movieCollection,
    sumAllTicket: function () {
      let budget = 0

      for (let movie of movieCollection) {
        debugger
        budget = budget + movie.ticketPrice * movie.seats
      }
      return budget
    }
  }
  return createdCinema
}

let planetaKinoMovieCollection = [
  captaineAmerica,
  wakandaForever,
  arrival
]

createTheatre("Планета Кіно", "місто Київ, вулиця Степана Бандери 28", planetaKinoMovieCollection)
console.log(createTheatre("Планета Кіно", "місто Київ, вулиця Степана Бандери 28", planetaKinoMovieCollection));

let allTicketPrise = planetaKino.sumAllTicket()
console.log(allTicketPrise)

// __________________________________________________________________________________________________________________________________

// let createMoovie = function(moovieName, moovieSchedule, ticketPrice, seats = 50) {
//   const discountPriceCounter = function (discount) {
//     if (discount > 0 && discount < 1) {
//       ticketPrice = this.ticketPrice * (1 - discount)
//     }
    
//   }
//   return {
//     moovieName,
//     moovieSchedule,
//     ticketPrice,
//     seats,
//     discountPriceCounter
//   }

// }

// let thor = createMoovie ("Thor", "Su 12-00", 50)
// console.log(thor.discountPriceCounter (0,4)) // summary)
// let captaineAmerica = createMoovie ("Captaine America", "Mo 19-00", 40)
// let wakandaForever = createMoovie ("Wakanda forever", "Wed 13-00", 80)
// let arrival = createMoovie ("Arrival", "Sat 18-00", 100)

// function createTheatre (nameTheatre, addressTheatre, movieCollection = []) {
//   const sumAllTicket = function () {
//     let budget = 0
//     for (let totalMoviePrice of movieCollection) {
//       budget += totalMoviePrice.ticketPrice * totalMoviePrice.seats
//     }
//     return budget
//   }

//   // const budgetCounter ()
//   return {
//     name: nameTheatre,
//     address: addressTheatre,
//     movieCollection: movieCollection,
//     // movieRandom: filmsRelease
//   }
// }


// let planetaKinoMovieCollection = [
//   createMoovie ("Captaine America", "Mo 19-00", 40, 150),
//   createMoovie ("Wakanda forever", "Wed 13-00", 80, 50),
//   createMoovie ("Arrival", "Sat 18-00", 100, 250)
// ]

// createTheatre("Планета Кіно", "місто Київ, вулиця Степана Бандери 28", planetaKinoMovieCollection)
// console.log(createTheatre("Планета Кіно", "місто Київ, вулиця Степана Бандери 28", planetaKinoMovieCollection));

// let allTicketPrise = planetaKino.sumAllTicket
// console.log(allTicketPrise)

/**
 * TASK-02
 *
 * Доповнити функціонал першої задачі, написати функцію для створення кінотеатру
 *
 * Аргументи - імʼя кіонтеатру, адреса, набір фільмів.
 * Якщо набір фільмів не був переданий при виклику функції - присвоїти пустий масив.
 *
 * Створюване значення цієї функції - об'єкт з такими ключами: name, address, filmsStock, filmsRelease.
 *
 * Написати метод для сумми всіх квитків з фільмів які має кінотеатр. В результаті його роботи
 * створювати власивість budget, куди записувати отриману цифру.
 *
 * Написати метод який буде по четвергам релізити рандомний фільм з кінотеатру
 */