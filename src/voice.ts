const VOICE = window.speechSynthesis.getVoices().find(({ lang }) => lang === 'en-GB');

export const saySomething = (text: string) => {
  if (!VOICE) {
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = VOICE;
  speechSynthesis.speak(utterance);
};
