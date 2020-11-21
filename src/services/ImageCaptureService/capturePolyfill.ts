import { getVideoElement } from '../HeadControlService';

export const CapturePolyfill = {
  takePhoto: async () => {
    return new Promise((resolve) => {
      debugger;
      const videoElement = getVideoElement();
      const canvas: HTMLCanvasElement = document.createElement('canvas');
      const canvas2dContext = canvas.getContext('2d');
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;

      canvas2dContext.drawImage(videoElement, 0, 0);
      canvas.toBlob(resolve);
    });
  },
};
