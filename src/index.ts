import { enableMobileConsole } from './console';
import './declare';
import './game';
import { initHeadControl } from './services/HeadControlService';
import { initImageCapture } from './services/ImageCaptureService/imageCapture';
import { initVisibilityService } from './services/VisibilityService';
import { initVoiceService } from './services/VoiceService/voice';
import { startGameController } from './startGame';
import './style/index.scss';
import initMusicService, { playMusic } from './services/MusicService';
import { addClass, hideElement, removeClass, showElement } from './utils/html';

const startButtonEl = document.getElementById('startButton');
const preloaderEl = document.getElementById('preloader');
const startScreenEl = document.getElementById('start');
const gameScreenEl = document.getElementById('game');
const nameInputEl = document.getElementById('nameInput') as HTMLInputElement;

const initAllAPI = async () => {
  return Promise.all([
    initImageCapture({ isDebug: true }),
    initVoiceService({ isDebug: true }),
    initHeadControl({
      isDebug: true,
      onCameraPersmissionFailed: () => alert('This game is head-controlled. You need to enable camera to play the game.'),
    }),
    initVisibilityService({
      isDebug: true,
    }),
    initMusicService({ isDebug: true }),
  ])
    .then(() => {
      hideElement(preloaderEl);
      showElement(startScreenEl);
    })
    .catch((e) => {
      console.error(e);
    });
};
const onInput = () => {
  if (nameInputEl.value) {
    removeClass(startButtonEl, 'disabled');
  } else {
    addClass(startButtonEl, 'disabled');
  }
};
const initApp = async () => {
  showElement(preloaderEl);
  hideElement(gameScreenEl);
  hideElement(startScreenEl);
  await initAllAPI();
  nameInputEl.value = localStorage.getItem('name') || '';
  onInput();
  nameInputEl.addEventListener('input', onInput);

  startButtonEl.addEventListener('click', async () => {
    const name = nameInputEl.value as string;
    localStorage.setItem('name', name);
    await startGame(name);
  });
};

const startGame = async (playerName: string) => {
  showElement(gameScreenEl);
  hideElement(startScreenEl);
  startGameController(playerName, { isDebug: true });
  playMusic();
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
