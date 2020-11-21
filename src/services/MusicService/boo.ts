const AudioContext =
  window.AudioContext || // Default
  (window as any).webkitAudioContext; // Safari and old versions of Chrome

export default () => {
  const audioCtx = init();
  const limit = () => setTimeout(() => audioCtx.suspend(), 750);
  limit();
  return () => {
    if (audioCtx.state === 'running') {
      audioCtx.suspend();
    } else if (audioCtx.state === 'suspended') {
      audioCtx.resume();
      limit();
    }
  };
};

function init() {
  // @ts-ignore
  const audioCtx = new (AudioContext || webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start(0);
  audioCtx.suspend();
  oscillator.type = 'square';
  oscillator.frequency.value = 100;
  gainNode.gain.value = 0.1;
  return audioCtx;
}
