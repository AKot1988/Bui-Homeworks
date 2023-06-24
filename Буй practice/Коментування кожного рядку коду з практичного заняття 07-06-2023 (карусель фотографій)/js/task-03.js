/**
 * TASK-03 Фільтрація по заголовку [Олег]
 *
 * Відрендерити на стрінці список обʼяв та поле для пошуку серед них.
 * При введенні тексту в поле для пошуку - відрендерити під ним список заголовків обʼяв, які містять введений текст.
 * По кліку на клавішу "Enter" - відрендерити список обʼяв, які містять введений текст.
 * Текст для пошуку має складатися мінімум з 2 символів, якщо менше то нічо не має працювати.
 *
 * ЗАВДАННЯ НА СЬОГОДНІ:
 * 1 - рефактор коду. виправи все, що не подобається і здається що не на свому місці. можливо щось можна розбити на функції, щось винести і тд
 * 2 - написати частину з підсвічуванням тексту заголовків
 */

const _ADVERTISEMENTS = [
  {
    id: 1,
    title: "Продамо автомобіль",
    price: 180000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    title: "Продамо телефон",
    price: 18000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    title: "Продамо ноутбук",
    price: 42200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 4,
    title: "10 живих москалів в рабство",
    price: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 5,
    title: "Продамо спіжжений танк",
    price: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
]

function MyAdvertismentAgency(ads) {
  this.adsList = ads
  this.adParent = document.querySelector(".advertisements")
  this.elements = {
    searchForm: document.createElement("form"),
    searchField: document.createElement("input"),
    searchFilterBtn: document.createElement("button"),
  }

  this.renderSearch = () => {
    this.elements.searchForm.classList.add("advertisements__search")
    this.elements.searchField.addEventListener("keyup", (e) => {
      this.inputHighlighter(e)
    })

    this.elements.searchFilterBtn.innerText = "Фільтрувати"
    this.elements.searchFilterBtn.addEventListener(
      "click",
      this.filterBtnHandler
    )

    this.elements.searchForm.append(
      this.elements.searchField,
      this.elements.searchFilterBtn
    )

    this.adParent.prepend(this.elements.searchForm)
  }

  this.inputHighlighter = (ev) => {
    const listCards = document.querySelectorAll(".advertisements > div > h2")

    listCards.forEach((el) => {
      const searchValue = this.elements.searchField.value
      el.textContent.indexOf(searchValue)

      el.innerHTML = el.textContent.includes(searchValue)
        ? el.textContent.replace(
            searchValue,
            `<span class="highlight">${searchValue}</span>`
          )
        : el.textContent
    })
  }

  this.filterBtnHandler = (e) => {
    e.preventDefault()
    const highlightedElements = document.querySelectorAll(
      ".advertisements > div"
    )
    highlightedElements.forEach((el) => {
      // console.log(el.childNodes[0].children[0])
      if (!el.querySelector("span")) {
        el.style.display = "none"
      } else {
        el.style.display = "flex"
      }
    })
  }

  this.renderOnlyCards = () => {
    this.adsList.forEach((element) => {
      const adCard = document.createElement("div")
      adCard.setAttribute("id", `${element.id}`)

      const adTitle = document.createElement("h2")

      adTitle.innerText = element.title

      const adPrice = document.createElement("p")
      adPrice.innerText = element.price

      const adDesc = document.createElement("p")
      adDesc.innerText = element.description

      adCard.append(adTitle, adPrice, adDesc)

      this.adParent.append(adCard)
    })
  }
  this.render = () => {
    this.renderSearch()
    this.renderOnlyCards()
  }
}

const myAds = new MyAdvertismentAgency(_ADVERTISEMENTS)

myAds.render()
