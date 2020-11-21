let VOICE;

export const initVoiceService = async ({ isDebug }: { isDebug: boolean }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      VOICE = window.speechSynthesis.getVoices().find(({ lang }) => lang === 'en-GB');
      if (!VOICE) {
        initVoiceService().then(resolve);
        return;
      }
      if (isDebug) {
        console.log('VoiceService is initialised');
      }
      resolve(true);
    }, 500);
  });
};
export const HELLO_PHRASE = '`Hi, %username%';
export const PHRASES = [
  'First blood!',
  'You are doing great, %username%',
  'Say hi to a LuckyWheel hackathon organizers, %username%',
  "I'm just a snake, %username%, don't wait too much from me",
  'An apple a day...you know',
  'What are you doing tomorrow, %username%? Come play with me again',
  'I am hungry!',
  'Apple and snake...Truly biblical story',
  'Yummy, want a bite, %username%?',
  'I enjoy spending time with you, %username%',
  'Where have you been my whole life, %username%?',
].sort(() => 0.5 - Math.random());

let userName = '';
let phraseIndex = 0;
export const setUpUser = (name: string) => {
  userName = name;
};

export const randomPhrase = () => {
  return PHRASES[phraseIndex++ % PHRASES.length];
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
