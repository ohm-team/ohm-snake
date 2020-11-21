export default function init(ctx: AudioContext) {
  // const oscillator = ctx.createOscillator();
  // oscillator.connect(ctx.destination);
  // const filter = context.createBiquadFilter();
  // oscillator.connect(filter);
  // filter.connect(context.destination);
  // oscillator.type = 'triangle';
  // oscillator.start();
  // oscillator.stop();

  // console.log(oscillator);
  // oscillator.frequency.value = 440;
  // oscillator.start(0)
  // oscillator.start(1);
  // const a = new Tone()

  function Oscillator(frequency, detune) {
    const osc = (this.osc = ctx.createOscillator());
    osc.type = 'sawtooth';
    osc.frequency.value = frequency;
    osc.detune.value = detune;
    osc.connect(ctx.destination);
    osc.start(0);
    osc.stop(0.25);
  }

  const play = () => {
    const osc1 = new Oscillator(440, 0);
    // const osc2 = new Oscillator(440, 5);
    const osc3 = new Oscillator(440, 25);
  };
  const api = {
    play,
  };
  return api;
}
