import './style/index.scss';
import { PHRASES, saySomething, setUpUser } from './voice';

const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const gameScreen = document.getElementById('game');
const nameInput: HTMLInputElement = document.getElementById('nameInput') as HTMLInputElement;

const init = () => {
  gameScreen.style.display = 'none';
  startButton.setAttribute('disabled', 'true');

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
  gameScreen.style.display = null;
  startScreen.style.display = 'none';
  setUpUser(playerName);
  saySomething(PHRASES.HELLO);
};

init();
