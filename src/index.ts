import HeadControlService from './services/HeadControlService';

document.addEventListener('DOMContentLoaded', () => {
    new HeadControlService();
});

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
