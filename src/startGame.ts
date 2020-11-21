import { startSnakeGame } from './game';
import { enableControls, Movement } from './services/HeadControlService';
import { makeGif, takePhoto } from './services/ImageCaptureService/imageCapture';
import { listenForVisibilityChange, VisibilityState } from './services/VisibilityService';
import { PHRASES, saySomething, setUpUser } from './services/VoiceService/voice';

const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const generateGif = async () => {
  await delay(10000);
  await makeGif();
};

export const startGameController = async (playerName: string) => {
  try {
    setUpUser(playerName);
    saySomething(PHRASES.HELLO);

    const { turnLeft, turnRight } = startSnakeGame();
    const handleMovement = (movement: Movement) => {
      takePhoto();
      if (movement === 'left') {
        turnLeft();
      }
      if (movement === 'right') {
        turnRight();
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

    await delay(10000);
    endGame();
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
};
