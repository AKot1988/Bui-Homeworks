//Task-01
//Create a new HTML element and append that bad boy to an existing element using JavaScript like a boss.
//Make an existing HTML element your bitch and update its content using JavaScript, yo.
//Blast an existing HTML element into oblivion by deleting that sucker with the power of JavaScript.
//Flex on those normie HTML elements by changing their style using JavaScript like a baller.
//Make a form that takes user input and uses JavaScript to update the content of an HTML element based on that input like a freakin' genius.

// 1)  Створіть новий HTML-елемент і додайте цього поганого хлопчика до існуючого елемента за допомогою JavaScript, як бос.
// 2)  Зробіть існуючий HTML-елемент своєю сукою та оновіть його вміст за допомогою JavaScript, йо.
// 3)  Знищите існуючий елемент HTML, видаливши його за допомогою потужності JavaScript.
// 4)  Змінюйте стандартні HTML-елементи, змінюючи їхній стиль за допомогою JavaScript.
// 5)  Створіть форму, яка приймає введені користувачем дані та використовує JavaScript для оновлення вмісту елемента HTML на основі цих введених даних, як геній.

const newDomObject = document.createElement('h1'); // Перша таска від GPT
document.body.insertAdjacentElement('afterbegin', newDomObject); // Перша таска від GPT
newDomObject.classList.add('main__header'); // Друга таска від GPT
newDomObject.innerText = 'Здоров, мене звати Котямба'; // Друга таска від GPT
newDomObject.innerHTML = '<span>Здоров, мене звати Котямба</span>'; // Друга таска від GPT

// document.body.removeChild(newDomObject); // Третя таска від GPT newDomObject.remove()   або    document.body.children[0].remove();

// Четверта таска від GPT
newDomObject.addEventListener('click', () =>
  newDomObject.classList.toggle('main__header--secondary--color')
);

// const
//Task-02
//А також стваорити функцію, яка стоворює картки товару (тіпа OLX/Rozetka)/ Функція отримує даніф у вигляді ургументів (здати у діскорд, отримати додаткове завдання по функції)
