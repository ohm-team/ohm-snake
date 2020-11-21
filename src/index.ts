import { enableMobileConsole } from './console';
import './declare';
import './game';
import { startSnakeGame } from './game';
import { enableControls, initHeadControl, Movement } from './services/HeadControlService';
import { initImageCapture, makeGif, takePhoto } from './services/ImageCaptureService/imageCapture';
import { initVisibilityService, listenForVisibilityChange, VisibilityState } from './services/VisibilityService';
import { initVoiceService, PHRASES, saySomething, setUpUser } from './services/VoiceService/voice';
import './style/index.scss';

const startButton = $('#startButton');
const preloader = $('#preloader');
const startScreen = $('#start');
const gameScreen = $('#game');
const nameInput = $<HTMLInputElement>('#nameInput');

const initAllAPI = async () => {
  return Promise.all([
    initImageCapture(),
    initVoiceService(),
    initHeadControl({
      onCameraPersmissionFailed: () => alert('This game is head-controlled. You need to enable camera to play the game.'),
    }),
    initVisibilityService(),
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
    const handleMovement = (movement: Movement) => {
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

    await generateGif();
    // await takePhoto();
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

window.onload = async () => {
  enableMobileConsole();
  //   startSnakeGame();
  await initApp();
};
