import { enableMobileConsole } from './console';
import './declare';
import './game';
import { startSnakeGame } from './game';
import { initHeadControl, MOVEMENT } from './services/HeadControlService';
import { initImageCapture, takePhoto } from './services/ImageCaptureService/imageCapture';
import { initVoiceService, PHRASES, saySomething, setUpUser } from './services/VoiceService/voice';
import './style/index.scss';
import { initVisibilityService, VISIBILITY_STATE } from './services/VisibilityService';

const startButton = $('#startButton');
const preloader = $('#preloader');
const startScreen = $('#start');
const gameScreen = $('#game');
const nameInput = $<HTMLInputElement>('#nameInput');

const initAllAPI = async () => {
  const handleMovement = (movement: MOVEMENT) => {
    if (movement === 'up' || movement === 'down') {
      // ignore up and down
      return;
    }
    console.log(movement);
  };

  const handleVisibilityChange = (visibilityState: VISIBILITY_STATE) => {
    if (visibilityState === 'visible') {
      console.log('unpause!');
      return;
    }
    console.log('pause!');
    return;
  };

  return Promise.all([
    initImageCapture(),
    initVoiceService(),
    initHeadControl({
      onMovement: handleMovement,
      onCameraPersmissionFailed: () => alert('This game is head-controlled. You need to enable camera to play the game.'),
    }),
    initVisibilityService({
      onVisibilityChange: handleVisibilityChange,
    }),
  ])
    .then(() => {
      preloader.hide();
      startScreen.show();
    })
    .catch((e) => {
      console.log(e);
    });
};

const initApp = async () => {
  const fb = document.getElementById('faceButton');
  console.log(fb);
  fb.addEventListener('click', async () => {
    console.log('poto ebla');
    gameScreen.show();
    startScreen.hide();
    await takePhoto();
  });
  preloader.show();
  gameScreen.hide();
  startScreen.hide();
  await initAllAPI();
  nameInput.on('input', () => {
    if (nameInput.val()) {
      startButton.prop('disabled', false);
    } else {
      startButton.prop('disabled', true);
    }
  });

  startButton.click(async () => {
    await startGame(nameInput.val() as string);
  });
};

const startGame = async (playerName: string) => {
  try {
    console.log('start game');
    gameScreen.show();
    startScreen.hide();
    setUpUser(playerName);
    saySomething(PHRASES.HELLO);
    startSnakeGame();
    // await takePhoto();
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

window.onload = async () => {
  enableMobileConsole();
  await initApp();
};
