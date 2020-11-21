import { enableMobileConsole } from './console';
import { initHeadControl } from './services/HeadControlService';
import { initImageCapture, takePhoto } from './services/ImageCaptureService/imageCapture';
import { initVoiceService, PHRASES, saySomething, setUpUser } from './services/VoiceService/voice';
import './declare';
import './style/index.scss';

const startButton = $('#startButton');
const preloader = $('#preloader');
const startScreen = $('#start');
const gameScreen = $('#game');
const nameInput = $<HTMLInputElement>('#nameInput');

const initAllAPI = async () => {
  return Promise.all([initImageCapture(), initVoiceService(), initHeadControl()])
    .then(() => {
      preloader.hide();
      startScreen.show();
    })
    .catch((e) => {
      console.log(e);
    });
};

const initApp = async () => {
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
    console.log('start game');
    await startGame(nameInput.val() as string);
  });
};

const startGame = async (playerName: string) => {
  try {
    await takePhoto();
    gameScreen.show();
    startScreen.hide();
    setUpUser(playerName);
    saySomething(PHRASES.HELLO);
  } catch (e) {
    alert(e);
  }
};

window.onload = async () => {
  enableMobileConsole();
  await initApp();
};
