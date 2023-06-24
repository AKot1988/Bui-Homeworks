/**
 * TASK-01 Пошук значення слів [Роман]
 *
 * Користувач на екрані має бачити один інпут і кнопку "Search".
 * Кнпока не активна, доки користувач не введе хоча б три символи в інпут.
 * Після того як користувач ввів слово і натиснув на кнопку "Search" - відправляти запит на API, відрендерити результати запиту на екрані.
 *
 * Поки ми чекаємо на відповідь на запит від API - на екрані має бути напис "Loading...".
 * Якщо запит повернув помилку - вивести текст помилки під полем для пошуку і підсвітити його червоним кольором.
 *
 * посилання на доки API - https://dictionaryapi.dev/
 *
 * ЗАВДАННЯ НА СЬОГОДНІ:
 * 1 - рефактор коду. виправи все, що не подобається і здається що не на свому місці. можливо щось можна розбити на функції, щось винести і тд
 */

function Searcher() {
  this.parent = document.querySelector(".search-word-meaning")
  this.elements = {
    form: document.createElement("form"),
    input: document.createElement("input"),
    btn: document.createElement("button"),
    response: document.createElement("div"),
  }
  this.render = () => {
    this.elements.response.classList.add("response")

    this.elements.input.placeholder = "Type a word in"
    this.elements.input.addEventListener("keyup", this.btnToggler)

    this.elements.btn.textContent = "Search"
    this.elements.btn.disabled = true
    this.elements.btn.addEventListener("click", this.requestAPI)

    this.elements.form.append(this.elements.input, this.elements.btn)
    this.parent.append(this.elements.form, this.elements.response)
  }
  this.requestAPI = (e) => {
    e.preventDefault()

    const words = fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${this.elements.input.value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token abf199437ae0e258382f85ef62221a00e8844091",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          this.renderError(data)
        } else {
          this.wordCardRender(data)
        }
      })

    this.elements.response.innerHTML = ""
    const loadingMsg = document.createElement("p")
    loadingMsg.innerText = "Loading..."
    this.elements.response.append(loadingMsg)
  }
  this.renderError = (data) => {
    this.elements.response.innerHTML = ""

    const errorMsg = document.createElement("p")
    errorMsg.innerText = data.title
    errorMsg.style.color = "red"

    this.elements.response.append(errorMsg)
  }

  this.wordCardRender = (data) => {
    this.elements.response.innerHTML = ""

    const wordCard = document.createElement("div")
    const wordItself = document.createElement("h3")
    wordItself.innerText = data[0].word

    const definitionsList = document.createElement("ol")

    data[0].meanings.forEach((m) => {
      definitionsList.insertAdjacentHTML(
        "beforeend",
        `<h3>${m.partOfSpeech}</h3>`
      )
      m.definitions.forEach((element) => {
        const definitionLine = document.createElement("li")
        definitionLine.innerText = element.definition

        definitionsList.append(definitionLine)
      })
    })

    wordCard.append(wordItself, definitionsList)

    this.elements.response.append(wordCard)
  }

  this.btnToggler = (e) => {
    if (this.elements.input.value.length >= 3) {
      this.elements.btn.disabled = false
    } else {
      this.elements.btn.disabled = true
    }
  }
}

const newSearcher = new Searcher()
newSearcher.render()
