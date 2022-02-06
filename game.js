const statusDisplay = document.querySelector('game-status');

let gameActive = true;

let currentPlayer = "X"

let gameState = ["", "", "", "", "", "", "", "", "",];

const winningMessage = `Player ${currentPlayer} has won!`;
const drawMessage = `Game ended in a Draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed() {

}

function handlePlayerChange() {

}

function handleResultValidation() {

}

function handleCellClick() {

}

function handleRestartGame() {

}

document.querySelectorAll('.cell').forEach(cell)