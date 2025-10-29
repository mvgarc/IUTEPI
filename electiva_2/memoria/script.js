const gameBoard = document.getElementById("gameBoard");
const movesText = document.getElementById("moves");
const restartBtn = document.getElementById("restartBtn");

const images = [
    "🐶", "🐱", "🐭", "🐹",
    "🐰", "🦊", "🐻", "🐼"
];

// Duplicamos las imágenes para tener pares
let cardsArray = [...images, ...images];
let flippedCards = [];
let matchedCards = 0;
let moves = 0;

// Mezclar las cartas
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Crear el tablero
function createBoard() {
    gameBoard.innerHTML = "";
    const shuffled = shuffle(cardsArray);

    shuffled.forEach((img) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const inner = document.createElement("div");
        inner.classList.add("card-inner");

        const front = document.createElement("div");
        front.classList.add("card-front");
        front.textContent = "❓"; // ahora la parte frontal muestra el signo de pregunta

        const back = document.createElement("div");
        back.classList.add("card-back");
        back.textContent = img; // la parte trasera tiene el emoji oculto

        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);

        card.addEventListener("click", () => flipCard(card, img));
        gameBoard.appendChild(card);
    });
}

// Voltear cartas
function flipCard(card, img) {
    if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
        card.classList.add("flipped");
        flippedCards.push({ card, img });

        if (flippedCards.length === 2) {
        moves++;
        movesText.textContent = moves;
        checkMatch();
        }
    }
}

// Verificar si coinciden
function checkMatch() {
    const [first, second] = flippedCards;

    if (first.img === second.img) {
        matchedCards += 2;
        flippedCards = [];

        if (matchedCards === cardsArray.length) {
        setTimeout(() => alert(`🎉 ¡Ganaste en ${moves} intentos!`), 500);
        }
    } else {
        setTimeout(() => {
        first.card.classList.remove("flipped");
        second.card.classList.remove("flipped");
        flippedCards = [];
        }, 1000);
    }
}

// Reiniciar juego
function restartGame() {
    flippedCards = [];
    matchedCards = 0;
    moves = 0;
    movesText.textContent = moves;
    createBoard();
}

restartBtn.addEventListener("click", restartGame);

// Iniciar juego
createBoard();
