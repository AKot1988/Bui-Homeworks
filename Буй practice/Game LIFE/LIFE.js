// Розміри ігрового поля
const width = 50;
const height = 50;
const cellSize = 10;

// Створення двовимірного масиву для збереження стану клітин
let grid = new Array(width);
let nextGeneration = new Array(width);

// Ініціалізація масиву
for (let i = 0; i < width; i++) {
  grid[i] = new Array(height);
  nextGeneration[i] = new Array(height);
}

// Ініціалізація початкового стану клітин
function initializeGrid() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      grid[i][j] = Math.floor(Math.random() * 2); // Випадкове присвоєння значення 0 або 1
    }
  }
}

// Оновлення стану клітин у наступному поколінні
function updateNextGeneration() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let neighbors = countNeighbors(i, j);
      if (grid[i][j] === 1) {
        if (neighbors < 2 || neighbors > 3) {
          nextGeneration[i][j] = 0; // Клітина помирає
        } else {
          nextGeneration[i][j] = 1; // Клітина залишається жити
        }
      } else {
        if (neighbors === 3) {
          nextGeneration[i][j] = 1; // Нова клітина з'являється
        }
      }
    }
  }
}

// Підрахунок кількості сусідніх живих клітин
function countNeighbors(x, y) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let neighborX = (x + i + width) % width;
      let neighborY = (y + j + height) % height;
      count += grid[neighborX][neighborY];
    }
  }
  count -= grid[x][y]; // Віднімаємо стан поточної клітини
  return count;
}

// Оновлення ігрового поля
function updateGrid() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      grid[i][j] = nextGeneration[i][j];
    }
  }
}

// Функція для відображення гри на веб-сторінці
function displayGrid() {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (grid[i][j] === 1) {
        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }
}

// Функція для запуску гри
function runGame() {
  initializeGrid();

  setInterval(() => {
    updateNextGeneration();
    updateGrid();
    displayGrid();
  }, 1000); // Оновлюємо стан гри кожну секунду (1000 мілісекунд)
}

// Запускаємо гру
runGame();
