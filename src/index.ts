import './index.scss';

const startbutton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const gameScreen = document.getElementById('game');

const init = () => {
  gameScreen.style.display = 'none';
};

startbutton.onclick = () => {
  gameScreen.style.display = null;
  startScreen.style.display = 'none';
};

init();
