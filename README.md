# Emotional Snake

<p align="center">
  <a href="https://ohm-team.github.io/ohm-snake/">
    <img alt="Game banner" src="./docs/banner.png"></a>
</p>

<p align="center">
  <a href="https://github.com/ohm-team/ohm-snake/actions?query=workflow%3Adeploy+branch%3Amaster">
    <img alt="Build status" src="https://img.shields.io/github/workflow/status/ohm-team/ohm-snake/deploy?label=Deploy&style=flat-square"></a>
  <a href="https://github.com/ohm-team/ohm-snake/actions?query=workflow%3Alint+branch%3Amaster">
    <img alt="Linter Status" src="https://img.shields.io/github/workflow/status/ohm-team/ohm-snake/lint?label=Lint&style=flat-square"></a>
  <a href="https://ohm-team.github.io/ohm-snake/">
  <img alt="Let's play" src="https://img.shields.io/badge/Let's-play-67FFB1?style=flat-square"></a>
  <br />
  <a href="https://github.com/ohm-team/ohm-snake">
    <img alt="Build with love" src="https://img.shields.io/badge/Built with-💖%20love-ivory?style=flat-square"></a>
  <a href="https://www.typescriptlang.org/">
    <img alt="Powered by typescript" src="https://img.shields.io/badge/Powered by-Typescript-3178c6?style=flat-square"></a>
  <a href="https://github.com/prettier/prettier">
    <img alt="Code style: prettier" src="https://img.shields.io/badge/Code_style-prettier-ff69b4.svg?style=flat-square"></a>
  <a href="https://github.com/ohm-team/ohm-snake">
    <img alt="Gluten free" src="https://img.shields.io/badge/Gluten-free-yellow?style=flat-square"></a>
  <a href="https://github.com/ohm-team/ohm-snake/blob/master/LICENSE">
    <img alt="GTP3 License" src="https://img.shields.io/static/v1.svg?label=📜%20License&message=GPT3&color=informational&style=flat-square"></a>
  </a>
</p>

[Application link](https://ohm-team.github.io/ohm-snake/) | [Video about the game](https://www.youtube.com/watch?v=NgYeHlh23PE)

> A 3D snake game written in threejs, which uses Tensorflow (ML) to control the snake with head movements. Move your head left and right to control the snake and open your mouth to make the snake slower! All magic is rendered on the screen using Canvas API.

- To **run the game**: `npm start` and visit [https://localhost:8080/](https://localhost:8080/) (It uses a self-signed HTTPS certificate to serve frontend. This is required for some of the API's.).
- Or **visit [application link](https://ohm-team.github.io/ohm-snake/)** directly from your mobile browser (both iOS and Android are supported).

### Compatibility

- The game is compatible with Desktop and Mobile devices, but **Mobile devices are recommended**, because of the smaller face-to-camera distance.
- The game is tested in iOS Safari (share functionality is limited), Android Chrome, Desktop Chrome, Desktop Firefox.
- **Access to the camera is required** to control the snake with head movements, please allow when prompted.
- **Head tracking** feature can be less accurate on low-end mobile phones because of the frontal camera resolution.

### How to play?

- Game uses your phone's front camera. Position your face in front of your phone!
- Make sure you have **no more than 20-40 cm between your face and your camera**.
- Ensure there is **enough light for the face to be visible** and clear. The whole face should be in the frame.
- Make **short head movements to the left and to the right** to control the snake accordingly.
- **Return head to the central position** between the moves.
- **Open your mouth** in case you are in trouble! The snake will slow down!

### Web API's used

- **Image Capture API**: to grab photos of the face during the gameplay to generate a GIF at the end of the game (_a fallback is used on iOS_)
- **Web Speech API**: to read encouraging phrases during the gameplay
- **Web Audio API**: to play music and generate sound effects
- **WebWorkers API**: to generate GIF in the foreground
- **Navigator.share()**: to share a GIF at the end of the game (_iOS fallbacks to downloading the image_)
- **Canvas API**: to render the game

### Credits

- [Mr.doob](https://github.com/mrdoob) for the [three.js](https://github.com/mrdoob/three.js/)
- [Jeeliz](https://github.com/jeeliz) for the [jeelizFaceFilter](https://github.com/jeeliz/jeelizFaceFilter)
- [Yahoo](https://github.com/yahoo) for the [gifshot](https://github.com/yahoo/gifshot)
- [mohayonao](https://github.com/mohayonao) for the [adsr-envelope](https://github.com/mohayonao/adsr-envelope)
- [lodash](https://github.com/lodash) for the [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)
- [AndresMWeber](https://github.com/AndresMWeber) for the [4DSnake](https://github.com/AndresMWeber/4DSnake)
