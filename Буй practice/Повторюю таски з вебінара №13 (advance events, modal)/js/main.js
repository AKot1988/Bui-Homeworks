import { STATUSES } from './utils.js';
import Room from './rooms.js';
// import Seat from './seat.js';

// const newOne = new Seat(1, 1, STATUSES.FREE);

const allSeatsContainer = document.querySelector('.seats');

// newOne.render(allSeatsContainer);

const kysiaMoovie = {
  title: 'Kysia vs food',
  description: 'Kysia eating smth',
  image: 'https://via.placeholder.com/177',
  year: 2023,
  ticketCost: '200',
};

const roomSize = { x: 5, y: 8 };
const kysiaCinemaTheatre = new Room(roomSize, kysiaMoovie);
kysiaCinemaTheatre.render(allSeatsContainer);
console.log(kysiaCinemaTheatre.title);
