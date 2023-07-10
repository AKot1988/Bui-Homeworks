//Створення функції яка буде генерувати випадкові числа у діапазоні від 1 до end
export const getRandomNumber = (end) => Math.floor(Math.random() * end) + 1;

export default getRandomNumber;
