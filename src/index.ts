import { enableMobileConsole } from './console';
import './declare';
import './game';
import { startSnakeGame } from './game';
import { enableControls, initHeadControl, MOVEMENT } from './services/HeadControlService';
import { initImageCapture, makeGif, takePhoto } from './services/ImageCaptureService/imageCapture';
import { initVoiceService, PHRASES, saySomething, setUpUser } from './services/VoiceService/voice';
import './style/index.scss';
import { initVisibilityService, VISIBILITY_STATE } from './services/VisibilityService';

const startButton = $('#startButton');
const preloader = $('#preloader');
const startScreen = $('#start');
const gameScreen = $('#game');
const nameInput = $<HTMLInputElement>('#nameInput');

const initAllAPI = async () => {
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
const delay = () => new Promise((r) => setTimeout(r, 1000));

const generateGif = async () => {
  await takePhoto();
  await delay();
  await takePhoto();
  await delay();
  await takePhoto();
  makeGif();
};
const initApp = async () => {
  const fb = document.getElementById('faceButton');

  fb.addEventListener('click', async () => {
    console.log('photo ebla');
    gameScreen.show();
    startScreen.hide();
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
    const { turnLeft, turnRight } = startSnakeGame();
    const handleMovement = (movement: MOVEMENT) => {
      if (movement === 'left') {
        turnLeft();
      }
      if (movement === 'right') {
        turnRight();
      }
    };
    enableControls({ onMovement: handleMovement });
    await generateGif();
    // await takePhoto();
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

window.onload = async () => {
  enableMobileConsole();
  await initApp();
};
