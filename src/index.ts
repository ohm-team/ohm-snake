import './index.scss';

const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const gameScreen = document.getElementById('game');

const init = () => {
  gameScreen.style.display = 'none';
};

const startGame = () => {
  gameScreen.style.display = null;
  startScreen.style.display = 'none';
};

startButton.onclick = () => {
  startGame();
};

init();
