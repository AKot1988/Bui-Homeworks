import { getAllPlaygrounds } from '@/firebase';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import IronCard from '@/components/IronCard/IronCard.js';

import '@/scss/main.scss';
import './LogInPage.scss';

export default function LogInPage() {}
LogInPage.prototype.render = function (parent) {
  const newHeader = new Header();
  newHeader.render(parent);

  const newLogIn = new LogIn();
  newLogIn.render(parent);

  const newFooter = new Footer();
  newFooter.render(parent);
};

function LogIn() {
  this.elements = {
    self: document.createElement('div'),
    form: document.createElement('form'),
    emailLogInHeader: document.createElement('h3'),
    email: document.createElement('input'),
    password: document.createElement('input'),
    button: document.createElement('button'),

    socialLogInHeader: document.createElement('h3'),
    socialButtons: document.createElement('div'),
    googleButton: document.createElement('button'),
    facebookButton: document.createElement('button'),
  };
}

LogIn.prototype.render = function (parent) {
  //Вхід за мейлом
  this.elements.self.classList.add('log-in');
  this.elements.form.classList.add('log-in__form');
  this.elements.emailLogInHeader.classList.add('log-in__email-log-in-header');
  this.elements.email.classList.add('log-in__email');
  this.elements.password.classList.add('log-in__password');
  this.elements.button.classList.add('log-in__button');

  this.elements.emailLogInHeader.innerText = 'Log In with Email';

  this.elements.email.type = 'email';
  this.elements.email.placeholder = 'Email';
  this.elements.email.required = true;

  this.elements.password.type = 'password';
  this.elements.password.placeholder = 'Password';
  this.elements.password.required = true;

  this.elements.button.innerText = 'Log In';

  //Вхід за сокіабле
  this.elements.socialButtons.classList.add('log-in__social-buttons');
  this.elements.socialLogInHeader.classList.add('log-in__social-log-in-header');
  this.elements.googleButton.classList.add('log-in__google-button');
  this.elements.facebookButton.classList.add('log-in__facebook-button');

  this.elements.socialLogInHeader.innerText = 'Log In with Social';

  this.elements.googleButton.innerText = 'Log In with Google';
  this.elements.facebookButton.innerText = 'Log In with Facebook';

  this.elements.socialButtons.append(
    this.elements.socialLogInHeader,
    this.elements.googleButton,
    this.elements.facebookButton
  );

  this.elements.form.append(
    this.elements.emailLogInHeader,    
    this.elements.email,
    this.elements.password,
    this.elements.button
  );

  this.elements.self.append(this.elements.form, this.elements.socialButtons);
  parent.append(this.elements.self);
};
