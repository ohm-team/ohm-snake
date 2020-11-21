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
      preloader.hide();
      startScreen.show();
    })
    .catch((e) => {
      console.error(e);
    });
};
const onInput = () => {
  if (nameInput.val()) {
    startButton.removeClass('disabled');
  } else {
    startButton.addClass('disabled');
  }
};
const initApp = async () => {
  preloader.show();
  gameScreen.hide();
  startScreen.hide();
  await initAllAPI();
  nameInput.val(localStorage.getItem('name') || '');
  onInput();
  nameInput.on('input', onInput);

  startButton.click(async () => {
    const name = nameInput.val() as string;
    localStorage.setItem('name', name);
    await startGame(name);
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
