// @ts-ignore
const url = `./audio/monsterslap.mp3`;

export default async function init() {
  // @ts-ignore
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const audio = await fetchTrack(ctx, url);
  let source: AudioBufferSourceNode;
  let lastStop = 0;
  let trackStart = 0;
  const play = () => {
    source = connectAudio(ctx, audio);
    //@ts-ignore
    source.start(0, lastStop, source.duration);
    lastStop = 0;
  };
  const stop = () => {
    lastStop = ctx.currentTime - trackStart;
    source.stop(0);
  };
  const api = {
    play,
    stop,
  };
  return api;
}

async function fetchTrack(ctx: AudioContext, src: RequestInfo): Promise<AudioBuffer> {
  const data = await fetch(src);
  const arrayBuffer = await data.arrayBuffer();
  return new Promise<AudioBuffer>((resolve, reject) => {
    ctx.decodeAudioData(
      arrayBuffer,
      (buffer) => {
        resolve(buffer);
      },
      (e) => {
        reject(e);
      }
    );
  });
}

const connectAudio = (ctx: AudioContext, audio: AudioBuffer) => {
  const source = ctx.createBufferSource();
  source.buffer = audio;

  const gainNode = ctx.createGain();
  gainNode.gain.value = 0.25;

  source.connect(gainNode);
  gainNode.connect(ctx.destination);
  source.loop = true;
  return source;
};
