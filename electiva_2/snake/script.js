const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
let score = 0;
let direction;
let snake = [];
let food;
let game;

// función que inicializa todo
function initGame() {
  score = 0;
  document.getElementById("score").textContent = score;
  direction = undefined;
  snake = [{ x: 9 * box, y: 10 * box }];
  food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
  };

  if (game) clearInterval(game);
  game = setInterval(draw, 100);
}

document.addEventListener("keydown", changeDirection);
document.getElementById("restartBtn").addEventListener("click", restartGame);

function changeDirection(event) {
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // comida
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // serpiente
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "LEFT") snakeX -= box;
  if (direction === "UP") snakeY -= box;
  if (direction === "RIGHT") snakeX += box;
  if (direction === "DOWN") snakeY += box;

  // comer comida
  if (snakeX === food.x && snakeY === food.y) {
    score++;
    document.getElementById("score").textContent = score;
    food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box
    };
  } else {
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
  return array.some(part => head.x === part.x && head.y === part.y);
}

function restartGame() {
  initGame();
}

// iniciar por primera vez
initGame();
