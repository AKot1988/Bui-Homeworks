import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { googleAuthProvider } from '@/firebase/firebase';

import Button from '@/components/Button/Button';
import { IRON_LOGO } from '@/assets/images/svg/svg.js';

import './Header.scss';

const auth = getAuth();

export default function Header() {
  this.elements = {
    wrapper: document.createElement('div'),
    self: document.createElement('div'),
    menu: document.createElement('div'),
    home: document.createElement('div'),
    map: document.createElement('div'),
    userPhoto: document.createElement('img'),
    button: new Button({
      text: 'Log in',
      className: 'header__button',
      onClick: this.handleLogin,
    }),
    myPlaces: document.createElement('div'),
  };
}

Header.prototype.renderLoggedIn = function (parent) {
  this.elements.wrapper.innerHTML = '';
  this.elements.self.classList.add('header');
  this.elements.wrapper.classList.add('header__wrapper');
  this.elements.menu.classList.add('header__menu__wrapper');
  this.elements.home.classList.add('header__home');
  this.elements.map.classList.add('header__map');
  this.elements.myPlaces.classList.add('header__my-places');
  this.elements.userPhoto.classList.add('header__user-photo');

  this.elements.home.textContent = 'Home';
  this.elements.map.textContent = 'Map';
  this.elements.myPlaces.textContent = 'My places';
  this.elements.wrapper.insertAdjacentHTML('afterbegin', IRON_LOGO);

  this.elements.userPhoto.src = auth.currentUser.photoURL;
  this.elements.menu.append(
    this.elements.home,
    this.elements.map,
    this.elements.myPlaces,
    this.elements.userPhoto
  );

  // this.elements.button.onClick = this.handleLogout();

  this.elements.wrapper.append(this.elements.menu);
  this.elements.button.render(this.elements.menu);

  this.elements.self.append(this.elements.wrapper);
  parent.insertAdjacentElement('afterbegin', this.elements.self);
};

Header.prototype.renderLoggedOut = function (parent) {
  this.elements.wrapper.innerHTML = '';
  this.elements.self.classList.add('header');
  this.elements.wrapper.classList.add('header__wrapper');
  this.elements.menu.classList.add('header__menu__wrapper');

  this.elements.wrapper.insertAdjacentHTML('afterbegin', IRON_LOGO);
  this.elements.button.render(this.elements.wrapper);

  this.elements.self.append(this.elements.wrapper);
  // this.elements.button.onClick = this.handleLogout();
  parent.insertAdjacentElement('afterbegin', this.elements.self);
};

Header.prototype.handleLogin = async function () {
  const response = await signInWithPopup(auth, googleAuthProvider);
  this.elements.button.textContent = 'Log Out';
  console.log(response);
};

Header.prototype.handleLogout = async function () {
  try {
    await signOut(auth);
    this.elements.button.textContent = 'Log In';
    console.log('logged out');
  } catch (e) {
    console.error(`Logout went wrong - ${e.message}`);
  }
};
