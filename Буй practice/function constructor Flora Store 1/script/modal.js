export default function Modal(parent, card) {
  parent.addEventListener(click, (event) => {
    document.appendChild(modalWindow);
    modalWindow.classList.add('.modal');
    modalWindow.insertAdjacentHTML('afterbegin',
    `<div class="modal-content">
      <h2>Моя перша модалка</h2>
      <button>Добре</button>
      <button>Харашо</button>
    </div>`);
  });
}
