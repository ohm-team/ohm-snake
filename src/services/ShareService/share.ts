export const share = async (base64url: string) => {
  console.log(base64url.substr(0, 30));
  const blob = await (await fetch(base64url)).blob();
  const file = new File([blob], 'fileName.gif', { type: blob.type });

  try {
    navigator.share({
      url: base64url,
    } as any);
  } catch (e) {
    download(blob, 'fileName.gif');
    console.log('sharing failed');
  }
};

const download = (blob, filename) => {
  var a = document.createElement('a');
  var url = URL.createObjectURL(blob);
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  a.click();
};
