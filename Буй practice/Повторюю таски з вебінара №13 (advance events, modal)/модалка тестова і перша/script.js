// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Перший варіант просто стровення модального вікна

// const modalBtn = document.getElementById('modal');

// modalBtn.addEventListener('click', (event) => {
//   event.target.insertAdjacentHTML(
//     'afterend',
//     `<div class="modal">
//     <div class="modal-content">
//       <h2>Моя перша модалка</h2>
//     </div>
//   </div>`
//   );
// });
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Другий варіант стровення і закривання модального вікна
modalBtn = document.getElementById('modal');

modalBtn.addEventListener('click', (event) => {
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');

  // event.target.after(modalWindow);
  document.body.appendChild(modalWindow); // і можна так додати modalwindow
  modalWindow.insertAdjacentHTML(
    'afterbegin',
    `<div class="modal-content">
      <h2>Моя перша модалка</h2>
      <button>Добре</button>
      <button>Харашо</button>
    </div>`
  );

  modalWindow.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.currentTarget.remove();
    }
  });
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
