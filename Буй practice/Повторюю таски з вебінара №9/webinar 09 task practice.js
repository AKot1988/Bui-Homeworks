const createDomElement = (
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
      `Класи не задані для елементу ${tagName} що знаходиться в середині ${parent.tagname}`
    );
  }

  element.className = classes.join(' ');

  if (tagName == 'a' || (tagName == 'img' && !attributes.length)) {
    console.warn(
      `Атрибути не задані для еклемента ${tagName} в середині елемента ${parent.tagName}`
    );
  }

  attributes.forEach((attribute) => {
    element.setAttribute(attribute.name, attribute.value);
  });
};

// * - parent - селектор батьківського елементу, або батьківський DOM елемент.
// * - tagName - тег елемента
// * - classes - класи елемента у вигляді масиву. може бути пустим.
// * - text - текст в елементі. може бути пустим.
// * - attributes - атрибути елемента у вигляді масиву. може бути пустим.
// * - children - дочірні елементи елемента у вигляді масиву. може бути пустим.
