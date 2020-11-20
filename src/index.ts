import './index.scss';

const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const gameScreen = document.getElementById('game');
const nameInput = document.getElementById('nameInput');

const init = () => {
  gameScreen.style.display = 'none';
  startButton.setAttribute('disabled', true);

  nameInput.oninput = () => {
    if (nameInput.value) {
      startButton.removeAttribute('disabled');
    } else {
      startButton.setAttribute('disabled', true);
    }
  };
  startButton.onclick = () => {
    startGame(nameInput.value);
  };
};

const startGame = (playerName: string) => {
  gameScreen.style.display = null;
  startScreen.style.display = 'none';
};

init();
