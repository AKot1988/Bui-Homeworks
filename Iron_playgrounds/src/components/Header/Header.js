import Button from '@/components/Button/Button';
import { IRON_LOGO } from '../../images/svg/svg.js';

import './Header.scss';

export default function Header() {
  this.isLoggedIn = false;

  this.elements = {
    self: document.createElement('div'),
    menu: document.createElement('div'),
    home: document.createElement('div'),
    map: document.createElement('div'),
    button: new Button({
      text: 'Log in',
      className: 'header__button',
      onClick: this.handleLogin,
    }),
    myPlaces: document.createElement('div'),
  };
}

Header.prototype.render = function (parent) {
  this.elements.self.classList.add('header');
  this.elements.menu.classList.add('header__menu__wrapper');
  this.elements.home.classList.add('header__home');
  this.elements.map.classList.add('header__map');
  this.elements.myPlaces.classList.add('header__my-places');

  this.elements.home.textContent = 'Home';
  this.elements.map.textContent = 'Map';
  this.elements.myPlaces.textContent = 'My places';
  this.elements.self.insertAdjacentHTML('afterbegin', IRON_LOGO);

  // if (!this.isLoggedIn) {
  //   this.elements.self.append(
  //     this.elements.home,
  //     this.elements.map,
  //     this.elements.myPlaces
  //   );
  // } else {
  //   this.elements.button.changeText('Log Out');
  //   this.elements.self.append(
  //     this.elements.home,
  //     this.elements.map,
  //     this.elements.myPlaces
  //   );
  // }
  if (!this.isLoggedIn) {
    this.elements.button.changeText('Log Out');
    this.elements.menu.append(
      this.elements.home,
      this.elements.map,
      this.elements.myPlaces
    );
    this.elements.button.render(this.elements.menu);
    this.elements.self.append(this.elements.menu);
  }

  parent.append(this.elements.self);
};
