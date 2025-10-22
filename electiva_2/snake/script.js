const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20; // tamaño de cada bloque
let score = 0;

// posición inicial de la serpiente
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

// posición de la comida
let food = {
  x: Math.floor(Math.random() * 19 + 1) * box,
  y: Math.floor(Math.random() * 19 + 1) * box
};

// dirección inicial
let direction;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // dibujar comida
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // dibujar serpiente
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  // movimiento
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "LEFT") snakeX -= box;
  if (direction === "UP") snakeY -= box;
  if (direction === "RIGHT") snakeX += box;
  if (direction === "DOWN") snakeY += box;

  // si come la comida
  if (snakeX === food.x && snakeY === food.y) {
    score++;
    document.getElementById("score").textContent = score;
    food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box
    };
  } else {
    // elimina el último bloque (movimiento normal)
    snake.pop();
  }

  const newHead = { x: snakeX, y: snakeY };

  // colisiones
  if (
    snakeX < 0 ||
    snakeY < 0 ||
    snakeX >= canvas.width ||
    snakeY >= canvas.height ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    alert("Fin del juego. Tu puntaje: " + score);
  }

  snake.unshift(newHead);
}

function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x === array[i].x && head.y === array[i].y) {
      return true;
    }
  }
  return false;
}

const game = setInterval(draw, 100);
