import { startSnakeGame } from './game';
import { enableControls, Movement } from './services/HeadControlService';
import { makeGif, takePhoto } from './services/ImageCaptureService/imageCapture';
import { playBoo, stopMusic, playGameOver } from './services/MusicService';
import { listenForVisibilityChange, VisibilityState } from './services/VisibilityService';
import { HELLO_PHRASE, PHRASES, randomPhrase, saySomething, setUpUser } from './services/VoiceService/voice';

const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const generateGif = async () => {
  await delay(10000);
  await makeGif();
};

const onFood = () => {
  saySomething(randomPhrase());
};

export const startGameController = async (playerName: string) => {
  try {
    setUpUser(playerName);
    saySomething(HELLO_PHRASE);

    const { turnLeft, turnRight } = startSnakeGame(endGame, onFood);
    const handleMovement = (movement: Movement) => {
      takePhoto();
      if (movement === 'left') {
        turnLeft();
        playBoo();
      }
      if (movement === 'right') {
        turnRight();
        playBoo();
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
  $('#game').hide();
  $('#gameover').show();
  $('#replay').click(() => {
    window.location.reload();
  });
  makeGif();
  stopMusic();
  playGameOver();
};
