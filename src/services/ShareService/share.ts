const { detect } = require('detect-browser');
const browser = detect();

export const canShare = (): boolean => {
  console.log(browser.os);
  return ['Android OS', 'Mac OS', 'Windows 10', 'Linux', 'Chrome OS'].includes(browser.os);
};
export const share = async (base64url: string) => {
  const blob = await (await fetch(base64url)).blob();
  const file = new File([blob], 'emotional-snake.gif', { type: blob.type });

  if (browser.os === 'iOS') {
    return download(blob, 'emotional-snake.gif');
  }

  try {
    navigator.share({
      files: [file],
    } as any);
  } catch (e) {
    download(blob, 'emotional-snake.gif');
  }
};

const download = (blob, filename) => {
  var a = document.createElement('a');
  var url = URL.createObjectURL(blob);
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  a.click();
};
