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

        $(containerSelector + ' img').remove();

        $(containerSelector).append(animatedImage);
        $(containerSelector + ' img').insertBefore('#share');
        if (canShare()) {
          $('#share').show();
          $(containerSelector + ' img').click(async () => {
            await share(image);
          });
        }
      }
    }
  );
};
