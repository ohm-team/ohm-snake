import HeadControlService from './services/HeadControlService';
import './style/index.scss';
import { takePhoto } from './imageCapture';
import { PHRASES, saySomething, setUpUser } from './voice';

document.addEventListener('DOMContentLoaded', () => {
  const headControlService = new HeadControlService();
  headControlService.addEventListener('down', () => console.log('down'));
  headControlService.addEventListener('up', () => console.log('up'));
  headControlService.addEventListener('left', () => console.log('left'));
  headControlService.addEventListener('right', () => console.log('right'));
});

const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const gameScreen = document.getElementById('game');
const nameInput: HTMLInputElement = document.getElementById('nameInput') as HTMLInputElement;

const init = () => {
  gameScreen.style.display = 'none';

  nameInput.oninput = () => {
    if (nameInput.value) {
      startButton.removeAttribute('disabled');
    } else {
      startButton.setAttribute('disabled', 'true');
    }
  };
  startButton.onclick = () => {
    startGame(nameInput.value);
  };
};

const startGame = (playerName: string) => {
  takePhoto();
  gameScreen.style.display = null;
  startScreen.style.display = 'none';
  setUpUser(playerName);
  // saySomething(PHRASES.HELLO);
};

init();
