import { appendElement, beforeElement, removeElement, showElement } from '../../utils/html';
import { canShare, share } from '../ShareService/share';
import gifshot from './gifshot';

export const gif = (imgs: any[], containerSelector: string) => {
  gifshot.createGIF(
    {
      images: imgs,
      gifWidth: 300,
      gifHeight: 300,
    },
    function (obj) {
      if (!obj.error) {
        const image = obj.image;
        const animatedImage = document.createElement('img');
        animatedImage.src = image;
        let imgEls: NodeListOf<HTMLImageElement> = document.querySelectorAll(`${containerSelector} img`);
        imgEls.forEach((el) => removeElement(el));
        const containerEl: HTMLElement = document.querySelector(containerSelector);
        console.log(containerSelector, imgEls, containerEl, animatedImage);
        appendElement(containerEl, animatedImage);
        imgEls = document.querySelectorAll(`${containerSelector} img`);
        imgEls.forEach((img) => beforeElement(document.getElementById('share'), img));
        if (canShare()) {
          showElement(document.getElementById('share'));
          containerEl.addEventListener('click', async () => {
            await share(image);
          });
        }
      }
    }
  );
};
