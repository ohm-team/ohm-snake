let VOICE;

export const initVoiceService = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      VOICE = window.speechSynthesis.getVoices().find(({ lang }) => lang === 'en-GB');
      if (!VOICE) {
        initVoiceService().then(resolve);
        return;
      }
      console.log('voice init');
      resolve(true);
    }, 500);
  });
};
export const HELLO_PHRASE = '`Hi, %username%. Have a good game';
export const PHRASES = {
  BLOOD: 'First blood!',
  GOOD: 'You are doing good, %username%',
  SNAKE: "I'm just a snake, %username%, don't wait too much from me",
  APPLE: 'An apple a day...',
  ENJOY: 'I enjoy spending time with you, %username%',
  TEAM: 'We are a great team, %username%',
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
  utterance.volume = 1;
  utterance.pitch = 1;
  utterance.rate = 1;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
};
