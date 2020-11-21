// https://noisehack.com/custom-audio-effects-javascript-web-audio-api/

import bitcrusher from './bitcrusher';
import music from './music';
import boo from './boo';
// import oscillator from './oscillator';

const ctx = new AudioContext();

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
// AddButton('oscillator');

async function main() {
  const musicApi = await music();
  // const oscillatorApi = oscillator(ctx);
  const playBoo = boo();
  window.addEventListener('play:music', musicApi.play);
  window.addEventListener('stop:music', musicApi.stop);
  window.addEventListener('play:crush', () => bitcrusher(ctx));
  window.addEventListener('play:boo', playBoo);
  // window.addEventListener('play:oscillator', oscillatorApi.play);

  // window.addEventListener('stop:all', music.stop);
}
main();
