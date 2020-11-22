import ADSREnvelope from 'adsr-envelope';

type Direction = 'right' | 'left' | 'down' | 'up';

export default () => {
  return (direction: Direction) => {
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

function init(direction: Direction) {
  // @ts-ignore
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  let adsr;

  oscillator.type = 'sine';
  if (direction === 'right' || direction === 'left') {
    oscillator.frequency.value = direction == 'right' ? 392 : 349.23;

    adsr = new ADSREnvelope({
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
  }

  if (direction === 'up' || direction === 'down') {
    oscillator.frequency.value = 87.31;
    // oscillator.frequency.value = direction == 'up' ? 783.99 : 87.31;

    adsr = new ADSREnvelope({
      attackTime: direction == 'up' ? 0.1 : 0.5,
      decayTime: direction == 'up' ? 0.1 : 0.5,
      sustainLevel: 0.2,
      releaseTime: direction == 'up' ? 0.5 : 1,
      gateTime: 0.5,
      peakLevel: 0.2,
      epsilon: 0.001,
      attackCurve: 'lin',
      decayCurve: 'lin',
      releaseCurve: 'lin',
    });
  }

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
