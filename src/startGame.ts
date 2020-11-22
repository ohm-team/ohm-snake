import { startSnakeGame } from './game';
import { disableControls, enableControls, Movement } from './services/HeadControlService';
import { makeGif, takePhoto } from './services/ImageCaptureService/imageCapture';
import { playBoo, stopMusic, playGameOver } from './services/MusicService';
import { listenForVisibilityChange, VisibilityState } from './services/VisibilityService';
import { HELLO_PHRASE, PHRASES, randomPhrase, saySomething, setUpUser } from './services/VoiceService/voice';
import { hideElement, showElement } from './utils/html';

const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const generateGif = async () => {
  await delay(10000);
  await makeGif();
};

const onFood = () => {
  saySomething(randomPhrase());
};

document.getElementById('console').addEventListener('click', () => {
  endGame();
});

export const startGameController = async (playerName: string, { isDebug }: { isDebug: boolean }) => {
  try {
    setUpUser(playerName);
    saySomething(HELLO_PHRASE);

    const { turnLeft, turnRight, slowDown, speedUp } = startSnakeGame(endGame, onFood);
    const handleMovement = (movement: Movement) => {
      takePhoto();
      if (movement === 'left') {
        if (isDebug) {
          console.log('Head left');
        }
        turnLeft();
        playBoo('left');
      }
      if (movement === 'right') {
        if (isDebug) {
          console.log('Head right');
        }
        turnRight();
        playBoo('right');
      }
      if (movement === 'mouth opened') {
        slowDown();
        playBoo('down');
        if (isDebug) {
          console.log('Mouth opened');
        }
      }
      if (movement === 'mouth closed') {
        speedUp();
        playBoo('up');
        if (isDebug) {
          console.log('Mouth closed');
        }
      }
    };
    enableControls({ onMovement: handleMovement });
    const handleVisibilityChange = (visibilityState: VisibilityState) => {
      if (visibilityState === 'visible') {
        console.log('unpause!');
        return;
      }
      console.log('pause!');
      return;
    };
    listenForVisibilityChange({ onVisibilityChange: handleVisibilityChange });
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

const endGame = () => {
  hideElement(document.getElementById('game'));
  showElement(document.getElementById('gameover'));
  document.getElementById('replay').addEventListener('click', () => {
    window.location.reload();
  });
  disableControls();
  makeGif();
  stopMusic();
  playGameOver();
};
