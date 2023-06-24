/**
 * Moovie
 * @param {string} title
 * @param {string} description
 * @param {string} image
 * @param {number} year
 * @param {string} ticketCost
 */

/**
 * Room
 * @param {number} size
 * @param  {object with moovie} moovie
 * @param  {number} ticketCost
 * */

import Seat from './seat.js';
export default function Room(size = { x: 40, y: 8 }, moovie, seatsInRow = 8) {
  this.size = size;
  this.moovie = moovie;
  this.seatsInRow = seatsInRow;

  this.element = {
    self: undefined,
  };
}

Room.prototype.render = function (seatList) {
  this.element.seatList = seatList;

  this.element.allSeats = [];
  for (let row = 1; row <= this.size.row; row++) {
    for (let seat = 1; seat <= this.size.seats; seat++) {
      this.element.allSeats.push(new Seat(row, seat));
      
    }
  }
};
