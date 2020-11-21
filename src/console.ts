import cs from 'console-subscriber';

export const enableMobileConsole = () => {
  const buffer: { category: string; message: string }[] = [];
  cs.bind((category, args) => {
    if (buffer.length === 5) {
      buffer.shift();
    }
    buffer.push({ category, message: args[0] });
    document.getElementById('console').innerHTML = buffer.map((m) => `<p>${m.message}</p>`).join('');
  });
};
