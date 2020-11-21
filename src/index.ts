import HeadControlService from './services/HeadControlService';
import { takePhoto } from './imageCapture';
import './style/index.scss';
import { setUpUser } from './voice';
import { createFile } from './fileSystem';
import { enableMobileConsole } from './console';

enableMobileConsole();

document.addEventListener('DOMContentLoaded', () => {
  const headControlService = new HeadControlService('head-preview', { disableRestPosition: false });
  headControlService.toggle(true);
  headControlService.addEventListener('mouse opened', () => console.log('mouse opened'));
  headControlService.addEventListener('mouse closed', () => console.log('mouse closed'));
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
