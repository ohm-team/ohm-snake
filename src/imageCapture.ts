let imageCapture;
let isInit = false;

const init = () => {
  if (isInit) {
    return;
  }
  isInit = true;

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((mediaStream) => {
      const track = mediaStream.getVideoTracks()[0];
      imageCapture = new ImageCapture(track);
    })
    .catch((error) => console.log(error));
};

export const takePhoto = () => {
  imageCapture
    .takePhoto()
    .then((blob) => createImageBitmap(blob))
    .then((imageBitmap) => {
      const canvas: HTMLElement = document.querySelector('#takePhotoCanvas');
      canvas.style.display = 'block';
      drawCanvas(canvas, imageBitmap);
    })
    .catch((error) => console.log(error));
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

init();
