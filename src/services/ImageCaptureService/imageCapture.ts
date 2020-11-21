import 'image-capture';

let imageCapture;
let isInit = false;

export const takePhoto = async () => {
  if (!imageCapture) {
    return;
  }
  await imageCapture
    .takePhoto()
    .then((blob) => createImageBitmap(blob))
    .then((imageBitmap) => {
      const canvas: HTMLCanvasElement = document.querySelector('#takePhotoCanvas');
      canvas.style.display = 'block';
      drawCanvas(canvas, imageBitmap);
      //canvas.toBlob(async (blob) => {
      //  try {
      //    await createFile(blob);
      //    await readFile();
      //  } catch (e) {
      //    throw e;
      //  }
      //});
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
      const track = mediaStream.getVideoTracks()[0];
      console.log(ImageCapture);
      try {
        imageCapture = new ImageCapture(track);
      } catch (e) {
        throw e;
      }
    })
    .catch(() => {
      alert('Image capture is not supported on your device :(');
    });
};
