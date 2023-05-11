// const userName = prompt("What is your name?");
// console.log(userName);

// const pageTitle = document.createElement("h2");
// pageTitle.textContent = `Hello ${userName}`;

// document.body.insertAdjacentElement("afterbegin", pageTitle);

// document.body.insertAdjacentHTML(
//   "afterbegin",
//   `<h2 class='user-name'>${userName}</h2>`
// );

// const pageContainer = document.querySelector(".container");

// // pageContainer.children[0].style.display = "none";
// // pageContainer.children[0].remove();
// pageContainer.removeChild(pageContainer.children[0]);

const creatorDomElement = (
  parent = document.body,
  tagName = 'div',
  classes = [],
  text = '',
  attributes = [],
  children = []
) => {};

/**
 * TASK
 *
 * Написати функцію, яка буде створювати елементи на сторінці.
 *
 * Аргументи:
 * - parent - селектор батьківського елементу, або батьківський DOM елемент.
 * - tagName - тег елемента
 * - classes - класи елемента у вигляді масиву. може бути пустим.
 * - text - текст в елементі. може бути пустим.
 * - attributes - атрибути елемента у вигляді масиву. може бути пустим.
 * - children - дочірні елементи елемента у вигляді масиву. може бути пустим.
 *
 * Return value:
 * DOM елемент із зазначеними властивостями.
 */

const createElement = (
  parent = document.body,
  tagName = 'div',
  classes = [],
  text = '',
  attributes = [],
  children = []
) => {
  const element = document.createElement(tagName);

  if (!classes.length) {
    console.warn(
      `Класи не задані для елемента ${tagName} всередині ${parent.tagName}`
    );
  }

  element.className = classes.join(' '); //class-1 class-2 gogi
  // classes.forEach(className => {
  //   element.classList.add(className);
  // })

  if ((tagName == 'a' || tagName == 'img') && !attributes.length) {
    console.warn(
      `Атрибути не задані для елемента ${tagName} всередині ${parent.tagName}`
    );
  }

  attributes.forEach((attribute) => {
    element.setAttribute(attribute.name, attribute.value);
  });

  element.textContent = text;

  // element.append(children[0], children[1], children[2], children[3]);
  element.append(...children);

  parent.appendChild(element);
};

createElement(document.body, 'p', ['class-1', 'class-2', 'gogi'], 'Hello', [
  { name: 'id', value: 'gogi' },
]);

// const createElement = (options) => {
//   options.parent = options.parent ? options.parent : document.body;
//   options.tagName = options.tagName ? options.tagName = : "div";
//   options.classes = options.classes ? options.classes : [];
//   options.text = options.text ? options.text : "";
//   options.attributes = options.attributes ? options.attributes : [];
//   options.children = options.children ? options.children : [];
// };

// const createElement = ({
//   parent = document.body,
//   tagName = "div",
//   classes = [],
//   text = "",
//   attributes = [],
//   children = [],
// }) => {};

// const createElement = (options) => {
//   const {
//     parent = document.body,
//     tagName = "div",
//     classes = [],
//     text = "",
//     attributes = [],
//     children = [],
//   } = options
// };
