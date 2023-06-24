/**
 * TASK-04 [Іван]
 *
 * Відрендерити на сторінці список карточок камер Go-Pro.
 * Кожна карточка має наступні поля:
 * - назва моделі
 * - продавець
 * - ціна
 * - опис
 * - посилання на картинку
 *
 * Кожна картка має створюватись із кнопкною "Видалити".
 * Коли користувач натискає на кнопку "Видалити" - має "вспливати" модальне вікно з підтвердженням видалення.
 *
 * ЗАВДАННЯ НА СЬОГОДНІ:
 * 1 - рефактор коду. виправи все, що не подобається і здається що не на свому місці. можливо щось можна розбити на функції, щось винести і тд
 * 2 - додати кнопку Редагувати до кожної картки. по кліку на цю кнопку замість всіх текстових елементів мають зʼявлятись інпути та кнопка "Зберегти" на тому ж самому місці.
 *     по кліку на кнопку "Зберегти" - інпути пропадають а текстовий контент в картці стає оновленим
 */

const _CAMERAS = [
  {
    id: 1,
    name: "GoPro HERO9 Black",
    seller: "GoPro",
    price: 499,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://jabko.ua/image/cache/catalog/products/2020/09/170950/79%20(1)-1397x1397.jpg.webp",
  },
  {
    id: 2,
    name: "GoPro HERO8 Black",
    seller: "GoPro1",
    price: 299,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://techport.net.ua/image/cache/catalog/foto2/05a4eba5b2a741ff9cb1ffa43b51ed2f-700x700.jpg",
  },
  {
    id: 3,
    name: "GoPro HERO7 Black",
    seller: "GoPro2",
    price: 199,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image:
      "https://apple-mania.com.ua/media/catalog/product/cache/e026f651b05122a6916299262b60c47d/3/2/320_1500-600x600.webp",
  },
]

// класи модального вікна: modal-wrapper, modal, modal__text, modal__button, modal__button--positive, modal__button--negative

function CreateGoProGoodCard(product) {
  this.id = product.id
  this.name = product.name
  this.seller = product.seller
  this.price = product.price
  this.description = product.description
  this.image = product.image
  this.elements = {
    productCard: document.createElement("div"),
    productName: document.createElement("p"),
    productPrice: document.createElement("p"),
    productSeller: document.createElement("p"),
    productDescription: document.createElement("p"),
    productImage: document.createElement("img"),
    productDeleteButton: document.createElement("button"),
  }
}

CreateGoProGoodCard.prototype.render = function (parent) {
  this.parent = parent

  this.elements.productCard.append(
    this.elements.productName,
    this.elements.productImage,
    this.elements.productDescription,
    this.elements.productPrice,
    this.elements.productDeleteButton
  )

  this.elements.productName.innerText = this.name
  this.elements.productPrice.innerText = this.price
  this.elements.productSeller.innerText = this.seller
  this.elements.productDescription.innerText = this.description
  this.elements.productImage.src = this.image
  this.elements.productDeleteButton.innerText = "Видалити"

  this.elements.productImage.classList.add("camera__image")

  this.elements.productCard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      console.log("tutututuuuuu")
    }
  })

  this.elements.productCard.classList.add("camera__card")
  this.elements.productCard.id = this.id

  this.parent.appendChild(this.elements.productCard)
}

const newGoProStore = _CAMERAS.map((element) => {
  return new CreateGoProGoodCard(element)
})

newGoProStore.forEach((card) => {
  card.render(document.querySelector(".goProCardWrapper"))
})

const camerasWrapper = document.querySelector(".goProCardWrapper")

camerasWrapper.addEventListener("click", (cameraWrapperEvent) => {
  cameraWrapperEvent.preventDefault()
  if (cameraWrapperEvent.target.tagName !== "BUTTON") return null

  const modalWindow = document.createElement("div")
  const cameraCardToDelete = cameraWrapperEvent.target.closest(".camera__card")

  modalWindow.classList.add("modal-wrapper")

  modalWindow.insertAdjacentHTML(
    "afterbegin",
    `<div class="modal">
      Do you really want to delete this item?
      <button class="modal__button modal__button--negative">Delete?</button>
      <button class="modal__button modal__button--positive">Cancel</button>
    </div>`
  )

  modalWindow.addEventListener("click", (modalConfirmationEvent) => {
    if (
      modalConfirmationEvent.target.classList.contains("modal-wrapper") ||
      modalConfirmationEvent.target.classList.contains(
        "modal__button--positive"
      )
    ) {
      modalConfirmationEvent.currentTarget.remove()
    }

    if (
      modalConfirmationEvent.target.classList.contains(
        "modal__button--negative"
      )
    ) {
      modalConfirmationEvent.currentTarget.remove()
      cameraCardToDelete.remove()
    }
  })

  document.body.prepend(modalWindow)
})
