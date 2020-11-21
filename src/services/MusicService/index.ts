import initMusic from './music';
import bitcrusher from './bitcrusher';
import boo from './boo';

let musicApi;
let booApi;

export default async () =>
  Promise.all([initMusic()]).then(([_musicApi]) => {
    musicApi = _musicApi;
    booApi = boo();
  });
export const playMusic = () => musicApi.play();
export const stopMusic = () => musicApi.stop();
export const playGameOver = () => bitcrusher();
export const playBoo = () => booApi();
export const renderDebugButtons = () => {
  const fieldset = document.createElement('fieldset');
  fieldset.style.position = 'absolute';
  fieldset.style.top = '0';
  fieldset.style.right = '0';
  document.body.appendChild(fieldset);

  const AddButton = (title: string) => {
    const btn = document.createElement('button');
    btn.textContent = `play:${title}`;
    let isActive = false;
    btn.onclick = () => {
      const action = isActive ? 'stop' : 'play';
      const name = `${action}:${title}`;
      const event = new CustomEvent(name);
      isActive = !isActive;
      btn.textContent = name;
      window.dispatchEvent(event);
    };

    fieldset.appendChild(btn);
  };

  AddButton('music');
  AddButton('crush');
  AddButton('boo');

  window.addEventListener('play:music', playMusic);
  window.addEventListener('stop:music', stopMusic);
  window.addEventListener('play:crush', playGameOver);
  window.addEventListener('play:boo', playBoo);
};
