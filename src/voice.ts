const VOICE = window.speechSynthesis.getVoices().find(({ lang }) => lang === 'en-GB');

export const PHRASES = {
  HELLO: '`Hi,  %username%. Have a good game',
  RIGHT: 'Good right turn, %username%',
};

let userName = '';

export const setUpUser = (name: string) => {
  userName = name;
};
export const saySomething = (text: string) => {
  if (!VOICE) {
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text.replace('%username%', userName));
  utterance.voice = VOICE;
  speechSynthesis.speak(utterance);
};
