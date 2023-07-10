export default function UserForm() {
  this.elements = {
    form: document.createElement('form'),
    input: document.createElement('input'),
    button: document.createElement('button'),
  };
}

UserForm.prototype.render = function (parent) {
  this.elements.form.classList.add('user-form');
  this.elements.input.classList.add('user-form__input');
  this.elements.button.classList.add('user-form__button');

  this.elements.button.innerText = 'save';

  this.elements.form.append(this.elements.input, this.elements.button);
  parent.append(this.elements.form);
};
