export default function bitcrusher(audioContext) {
  var masterGain = audioContext.createGain();
  masterGain.gain.value = 0.1;
  masterGain.connect(audioContext.destination);

  var now = audioContext.currentTime;

  var bufferSize = 4096;
  var effect = (function () {
    var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
    // @ts-ignore
    node.bits = 4; // between 1 and 16
    // @ts-ignore
    node.normfreq = 0.1; // between 0.0 and 1.0
    // @ts-ignore
    var step = Math.pow(1 / 2, node.bits);
    var phaser = 0;
    var last = 0;
    node.onaudioprocess = function (e) {
      var input = e.inputBuffer.getChannelData(0);
      var output = e.outputBuffer.getChannelData(0);
      for (var i = 0; i < bufferSize; i++) {
        // @ts-ignore
        phaser += node.normfreq;
        if (phaser >= 1.0) {
          phaser -= 1.0;
          last = step * Math.floor(input[i] / step + 0.5);
        }
        output[i] = last;
      }
    };
    return node;
  })();

  var sawWave = audioContext.createOscillator();
  sawWave.type = 'sawtooth';
  sawWave.start(now);
  var effectGain = audioContext.createGain();

  effect.connect(effectGain);
  effectGain.connect(masterGain);
  sawWave.connect(effect);

  /* Sweep from A3 to A6. */
  sawWave.frequency.setValueAtTime(220, now);
  sawWave.frequency.linearRampToValueAtTime(1760, now + 4);

  /* Play raw wave through effect, then fade out. */
  effectGain.gain.setValueAtTime(1.0, now);
  effectGain.gain.setValueAtTime(1.0, now + 4);
  effectGain.gain.linearRampToValueAtTime(0.0, now + 5);
}
