let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameStarted = false;
let gameIsOver = false;

//players array
const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

//backdrop
const backdropElement = document.getElementById('back-drop');
const gameOverOverlay = document.getElementById('game-over');

backdropElement.addEventListener('click', closeOverlay);
gameOverOverlay.addEventListener('click', closeOverlay);
//player cards
const editPlayerOneBtn = document.getElementById('player-1');
const editPlayerTwoBtn = document.getElementById('player-2');
const firstPlayerName = document.getElementById('first-name');
const secondPlayerName = document.getElementById('second-name');

editPlayerOneBtn.addEventListener('click', editPlayer);
editPlayerTwoBtn.addEventListener('click', editPlayer);

//overlay
const playerConfigOverlay = document.getElementById('config-overlay');
const formElement = document.querySelector('.modal form');
const cancelBtn = document.getElementById('btn-cancel');

formElement.addEventListener('submit', saveConfig);
cancelBtn.addEventListener('click', closeOverlay);

//game
const startGameBtn = document.getElementById('start-game-btn');
const gameBoardElement = document.getElementById('game-board');
const headerGameOverElement = document.querySelector('#game-over h2');

startGameBtn.addEventListener('click', startGame);
gameBoardElement.addEventListener('click', playerMove);

//error
const errorElement = document.querySelector('#start-game p');
