const checkMoney = () => {
  const listFundraising = document.querySelectorAll('.list__item'); // Оголошуємо змінну listFundraising яка в себе отримує (за допомогою querrySelectorAll) Node коллекцію елементів. Як я розумію, у NODE коллекції є успадкована властивість, яка дає змогу нам працювати з цією коллекцією за допомогою невеликої кількості медодів масивів. (forEach входить в цей список методів)
  // За допомогою методу forEach ми проходимось по массиву (по Node коллекції) об'єктів які собою являють певні Контейнери з HTML (в конкретному випадку сюди прилітають по черзі 4 ри лішки з класом .list__title)
  listFundraising.forEach((element) => {
    // отримали нод ліст з елементами в яких лежить текстом прописане значення грошей, яке треба зібрати на конкретну задачу
    const goalValue = element.querySelector('.list__goal-value');
    // отримали нод ліст з елементами в яких текстом прописано значення скільки вже зібрано на конкретну ціль
    const alreadyCollected = element.querySelector('.list__value');

    const goalValueFilled = +goalValue.textContent;
    console.log(goalValueFilled);

    const alreadyCollectedFilled = +alreadyCollected.textContent;
    console.log(alreadyCollectedFilled);

    if (alreadyCollectedFilled / goalValueFilled < 1 / 5) {
      alreadyCollected.style.color = 'red';
    }
    if (
      alreadyCollectedFilled / goalValueFilled < 1 / 2 &&
      alreadyCollectedFilled / goalValueFilled > 1 / 5
    ) {
      alreadyCollected.style.color = 'yellow';
    }
    if (alreadyCollectedFilled / goalValueFilled >= 9 / 10) {
      alreadyCollected.style.color = 'green';
    }
  });
};

checkMoney();
