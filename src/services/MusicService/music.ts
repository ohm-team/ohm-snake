const BASE_DIR = '/ohm-snake';
const url = `${BASE_DIR}/audio/monsterslap.mp3`;
export default async function init() {
  // @ts-ignore
  const ctx = new (AudioContext || webkitAudioContext)();
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

async function fetchTrack(ctx: AudioContext, src: RequestInfo) {
  const data = await fetch(src);
  const arrayBuffer = await data.arrayBuffer();
  const decodeAudio = await ctx.decodeAudioData(arrayBuffer);
  return decodeAudio;
}

const connectAudio = (ctx: AudioContext, audio: AudioBuffer) => {
  const source = ctx.createBufferSource();
  source.buffer = audio;
  source.connect(ctx.destination);
  source.loop = true;
  return source;
};
