export default function Modal() {
  this.elements = {
    self: document.createElement('div'),
  };
}

Modal.prototype.render = function (user, score) {
  this.elements.self.classList.add('modal__window');
  this.elements.self.insertAdjacentHTML(
    'afterbegin',
    `<div class="modal">
      Hey, ${user}! Your result is ${score} seconds
      <button class="modal__button modal__button--positive">ОК</button>
    </div>`
  );

  document.body.prepend(this.elements.self);
};

Modal.prototype.reloadPage = function () {
  location.reload();
};
