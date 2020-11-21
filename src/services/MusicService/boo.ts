import ADSREnvelope from 'adsr-envelope';

export default () => {
  return (direction: 'right' | 'left') => {
    const audioCtx = init(direction);
  };
  // const limit = () => setTimeout(() => audioCtx.suspend(), 750);
  // limit();
  // return () => {
  //   if (audioCtx.state === 'running') {
  //     audioCtx.suspend();
  //   } else if (audioCtx.state === 'suspended') {
  //     audioCtx.resume();
  //     limit();
  //   }
  // };
};

function init(direction: 'right' | 'left') {
  // @ts-ignore
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.value = direction == 'right' ? 392 : 349.23;
  // gainNode.gain.value = 0.0;

  let adsr = new ADSREnvelope({
    attackTime: 0.2,
    decayTime: 0.5,
    sustainLevel: 0.2,
    releaseTime: 0.5,
    gateTime: 0.5,
    peakLevel: 0.2,
    epsilon: 0.001,
    attackCurve: 'lin',
    decayCurve: 'lin',
    releaseCurve: 'lin',
  });

  adsr.applyTo(gainNode.gain, audioCtx.currentTime);

  // oscillator.connect(gainNode);
  // gainNode.connect(audioCtx.destination);
  // oscillator.start(0);
  // audioCtx.suspend();

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + adsr.duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  return audioCtx;
}
