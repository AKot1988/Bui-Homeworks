import './Button.css'; // імпортуєш тупо вміст файлу. от прям код тіпа імпортуватиметься

function Button(text, color) {
  this.text = text;
  this.color = color;
  this.self = document.createElement('button');
}

// .header-menu .my-button {
//  background-color: teal;
// }

Button.prototype.render = function (parent) {
  this.self.innerText = this.text;
  this.self.classList.add('my-button');

  if (this.color) {
    this.self.style.backgroundColor = this.color;
  }

  parent.append(this.self);
};
