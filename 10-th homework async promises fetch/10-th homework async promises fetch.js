const requestURL = 'https://dog.ceo/api/breeds/image/random';

const mainPageForm = document.querySelector('.form');
const mainPageFormInput = document.querySelector('.form__field');
const mainPageFormButton = document.querySelector('.form__submit');

mainPageFormButton.addEventListener('click', (event) => {
  event.preventDefault();
  let pictureNumber = +mainPageFormInput.value;
  while (pictureNumber > 0) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((response) => {
        let newDog = new DogPicture(response);
        console.dir(newDog);
        newDog.render(document.querySelector('.wrapper'));
      });
    pictureNumber = pictureNumber - 1;
  }
});

function DogPicture(doggyResponse) {
  this.data = doggyResponse;
  this.elements = {
    doggyImage: document.createElement('img'),
  };
}

DogPicture.prototype.render = function (parent) {
  this.elements.doggyImage.src = this.data.message;

  this.elements.doggyImage.classList.add('doggyImage');

  parent.append(this.elements.doggyImage);
};

// function sendRequest(method, URL) {
//   const xhr = new XMLHttpRequest();
//   return new Promise((resolve, reject) => {
//     xhr.open(method, URL);
//     xhr.responseType = 'json';
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(console.error('Якась шляпа відбувається'));
//       } else {
//         resolve(JSON.parse(xhr.response));
//       }
//     };
//   });
// }

// sendRequest('GET', requestURL).then((data) => console.log(data));
