import { enableMobileConsole } from './console';
import './declare';
import './game';
import { initHeadControl } from './services/HeadControlService';
import { initImageCapture } from './services/ImageCaptureService/imageCapture';
import { initVisibilityService } from './services/VisibilityService';
import { initVoiceService } from './services/VoiceService/voice';
import { startGameController } from './startGame';
import './style/index.scss';
import initMusicService, { playBoo, playMusic, renderDebugButtons } from './services/MusicService';

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
    initMusicService(),
  ])
    .then(() => {
      preloader.hide();
      startScreen.show();
    })
    .catch((e) => {
      console.error(e);
    });
};

const initApp = async () => {
  //const fb = document.getElementById('faceButton');
  //
  //fb.addEventListener('click', async () => {
  //  console.log('photo ebla');
  //  gameScreen.show();
  //  startScreen.hide();
  //});
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
  gameScreen.show();
  startScreen.hide();
  startGameController(playerName, { isDebug: true });
  playMusic();
  renderDebugButtons();
};

window.onload = async () => {
  enableMobileConsole();
  // startGame('Goooseman');
  try {
    await initApp();
  } catch (e) {
    console.error(e);
  }
};
