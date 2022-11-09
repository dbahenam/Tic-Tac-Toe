function editPlayer(event) {
  if (gameStarted) {
    errorElement.classList.add('error');
    errorElement.textContent =
      'There is a game in progress. Do you want to start over?';
  }
  backdropElement.style.display = 'block';
  playerConfigOverlay.style.display = 'block';
  editedPlayer = +event.target.dataset.playerid;
}

function closeOverlay() {
  backdropElement.style.display = 'none';
  playerConfigOverlay.style.display = 'none';
  gameOverOverlay.style.display = 'none';
  const inputElement = document.getElementById('player-name');
  inputElement.value = '';
}

function saveConfig(event) {
  /* remove default behavior of submitting form(i.e http request to some server) */
  event.preventDefault();

  /* use object blueprint to gather input data */
  const formData = new FormData(event.target);

  // get value of input 'name', trim removes whitespace after content
  const enteredPlayerName = formData.get('player-name').trim();
  if (enteredPlayerName.length < 1 || enteredPlayerName === '') {
    console.log('Names must contain atleast one character');
    return;
  }
  if (editedPlayer === 1) {
    firstPlayerName.textContent = enteredPlayerName;
  } else {
    secondPlayerName.textContent = enteredPlayerName;
  }
  players[editedPlayer - 1].name = enteredPlayerName;
  console.log(players);
  closeOverlay();
}
