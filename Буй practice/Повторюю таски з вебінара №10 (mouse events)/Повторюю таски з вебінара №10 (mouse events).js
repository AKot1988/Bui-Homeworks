/**
 * TASK-01
 *
 * На сторінці є секція з табами.
 * Потрібно написати функцію, що спрацьовуватиме по кліку на будь яку з вкладок
 * і додаватиме клас "tabs__item--active" до елементу на який натиснули.
 * за замовчуванням треба ховати усі елементі всередині tabs-content, окрім першого.
 * По кліку на будь яку з вкладок має відображатись контент прив'язаний до неї.
 */

const tabsList = document.querySelector('.tabs');

tabsList.addEventListener('click', (event) => {
  const clickedButton = event.target;

  if (clickedButton.tagName === 'LI') {
    const lastActiveButton = event.currentTarget.querySelector(
      '.tabs__item--active'
    );
    const tabName = clickedButton.dataset.tab;
    const tabContentItem = document.querySelector(
      `.tabs-content__item[data-tab="${tabName}"]`
    );
    const lastActiveTabContent = document.querySelector(
      '.tabs-content__item--active'
    );

    if (clickedButton !== lastActiveButton) {
      // знак питання можна не проставляти після "lastActiveButton" у тому випадку, якщо ми в html одразу ініціалізували хоч одну з цих лішок із класом "tabs__item--active"
      // lastActiveButton?.classList.remove('tabs__item--active');
      lastActiveButton.classList.remove('tabs__item--active');
    }

    if (lastActiveTabContent !== tabContentItem) {
      lastActiveTabContent?.classList.remove('tabs-content__item--active');
    }
    tabContentItem.classList.add('tabs-content__item--active');
    clickedButton.classList.add('tabs__item--active');
  }
});

/**
 * TASK-03
 *
 * Напишіть невеличку гру "Том і Джеррі".
 * Суть гри у тому щоб картинка кота Тома ганялася за картинкою Джеррі.
 * Положення картинки Джеррі задається координатами миші.
 * Положення картинки Тома задається теж координатами миші, але із затримкою, щоб дати гравцю можливість втікти.
 */
