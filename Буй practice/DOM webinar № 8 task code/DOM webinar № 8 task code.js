//Друга функція
let checkAge = (age) => {
  if (age < 18) {
    return 'red';
  } else if (age > 18 && age < 35) {
    return 'violet';
  } else {
    return 'green';
  }
};

//Третя функція
const fillText = (element, value) => {
  element.textContent = value;
};

//Перша функція
const fillProfile = (name, sex, age, about, preferences) => {
  const profileName = document.querySelector('.profile__name');
  const profileSex = document.getElementById('profile__sex');
  const profileAge = document.getElementById('profile__age');
  const profileAbout = document.querySelector('.profile__about');
  const profilePreferences = document.getElementById('profile__preferences');

  fillText(profileName, name);
  fillText(profileSex, sex);
  fillText(profileAge, age);
  fillText(profileAbout, about);
  fillText(profilePreferences, preferences);

  profileName.style.color = checkAge(age);
};

fillProfile(
  prompt("Введи своє ім'я"),
  prompt('Введи свою стать'),
  prompt('Введи свій вік'),
  prompt('Розкажи щось про себе'),
  prompt('Розкажи свої вподобання')
);

if (confirm('Чи бажаеш внести корективи у введені данні?')) {
  const answer = prompt('Які данні хочеш змінити');

  switch (answer) {
    case 'name':
      fillText(
        document.querySelector('.profile__name'),
        prompt("Введи своє ім'я")
      );
      break;
    case 'sex':
      fillText(
        document.getElementById('profile__sex'),
        prompt('Введи свою стать')
      );
      break;
    case 'age':
      fillText(
        document.getElementById('profile__age'),
        prompt('Введи свій вік')
      );
      break;
    case 'about':
      fillText(
        document.querySelector('.profile__about'),
        prompt('Розкажи щось про себе')
      );
      break;
    case 'preferences':
      fillText(
        document.getElementById('profile__preferences'),
        prompt('Розкажи свої вподобання')
      );
      break;
  }
}
