function startGame() {
  for (const player of players) {
    if (player.name === '' || player.name.length < 1) {
      errorElement.classList.add('error');
      errorElement.textContent = 'Please set a name for each player correctly';
      return;
    }
  }
  errorElement.classList.remove('error');
  errorElement.textContent = '';
  gameBoardElement.style.display = 'grid';
}

function clearBoard() {
  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameBoardElement.children[index].textContent = '';
      gameBoardElement.children[index].classList.remove('unavailable1');
      gameBoardElement.children[index].classList.remove('unavailable2');
      index++;
    }
  }
  currentRound = 1;
  gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  editedPlayer = 0;
  activePlayer = 0;
  gameStarted = false;
  gameIsOver = false;
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    //check rows
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
    //check columns
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound == 9) {
    return -1;
  }
  return 0;
}

function playerMove(event) {
  // if using gameBoardElement, validat user clicks on non-white space
  if (event.target.tagName !== 'LI' || gameIsOver) {
    return;
  }
  if (currentRound % 2 != 0) {
    activePlayer = 1;
  } else {
    activePlayer = 2;
  }
  const gameField = event.target;
  let row = gameField.dataset.row;
  let col = gameField.dataset.col;
  gameData[--row][--col] = activePlayer;
  console.log(currentRound);
  console.log(activePlayer);
  gameField.textContent = players[activePlayer - 1].symbol;
  gameField.classList.add('unavailable' + activePlayer);
  const winnerID = checkWinner();
  currentRound++;
  endGame(winnerID);
}

function endGame(anId) {
  if (anId === 0) {
    return;
  } else if (anId === 1) {
    console.log('Player1 won!');
    backdropElement.style.display = 'block';
    gameOverOverlay.style.display = 'block';
    headerGameOverElement.textContent = 'Player 1 has won!';
    clearBoard();
  } else if (anId === 2) {
    console.log('Player2 won!');
    backdropElement.style.display = 'block';

    gameOverOverlay.style.display = 'block';
    headerGameOverElement.textContent = 'Player 2 has won!';
    clearBoard();
  } else {
    console.log('It was a tie');
    backdropElement.style.display = 'block';

    gameOverOverlay.style.display = 'block';
    headerGameOverElement.textContent = 'Tie game!';
    clearBoard();
  }
}
