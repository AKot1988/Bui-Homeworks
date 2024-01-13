export default function createElement({
  tagName,
  className,
  onClick,
  name,
  id,
  innerText,
}) {
  const element = document.createElement(tagName);
  if (className) element.classList.add(className);
  if (onClick) element.onClick = onClick;
  if (name) element.name = name;
  if (id) element.id = id;
  if (innerText) element.innerText = innerText;
  return element;
}

