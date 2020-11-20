import { takePhoto } from './imageCapture';
import './style/index.scss';
import { setUpUser } from './voice';
import { createFile } from './fileSystem';

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
  startButton.onclick = async () => {
    await startGame(nameInput.value);
  };
};

const startGame = async (playerName: string) => {
  try {
    await takePhoto();
    gameScreen.style.display = null;
    startScreen.style.display = 'none';
    setUpUser(playerName);
    // saySomething(PHRASES.HELLO);
  } catch (e) {
    alert(e);
  }
};

init();
