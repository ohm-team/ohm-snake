import gifshot from './gifshot';

export const gif = (imgs: any[], containerSelector: string) => {
  gifshot.createGIF(
    {
      images: imgs,
    },
    function (obj) {
      if (!obj.error) {
        const image = obj.image;
        const animatedImage = document.createElement('img');
        animatedImage.src = image;
        debugger;
        console.log($(containerSelector));
        $(containerSelector).append(animatedImage);
      }
    }
  );
};
