if (!('createImageBitmap' in window)) {
  (window as any).createImageBitmap = async function (blob) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.addEventListener('load', function () {
        resolve(this);
      });
      img.src = URL.createObjectURL(blob);
    });
  };
}
