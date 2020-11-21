import './capturePolyfill';
import './bitmapPolyfill.ts';
import { CapturePolyfill } from './capturePolyfill';
import { gif } from './gif';

let imageCapture;
let isInit = false;

const photos = [];

export const makeGif = () => {
  gif(photos, '#gifContainer');
  gif(photos, '#gifContainer');
};

export const takePhoto = async () => {
  if (!imageCapture) {
    console.log('no image capture');
    return;
  }
  await imageCapture
    .takePhoto()
    .then((blob) => createImageBitmap(blob))
    .then((imageBitmap) => {
      const canvas: HTMLCanvasElement = document.querySelector('#takePhotoCanvas');
      canvas.style.display = 'block';
      drawCanvas(canvas, imageBitmap);
      photos.push(canvas.toDataURL('image/jpeg'));
    })
    .catch((e) => {
      console.log(e);
    });
};

function drawCanvas(canvas, img) {
  canvas.width = getComputedStyle(canvas).width.split('px')[0];
  canvas.height = getComputedStyle(canvas).height.split('px')[0];
  let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
}

export const initImageCapture = async () => {
  if (isInit) {
    return Promise.resolve();
  }
  isInit = true;

  return navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((mediaStream) => {
      try {
        const track = mediaStream.getVideoTracks()[0];
        imageCapture = new ImageCapture(track);
      } catch (e) {
        imageCapture = CapturePolyfill;
      }
    })
    .catch(() => {
      alert('Image capture is not supported on your device :(');
    });
};
