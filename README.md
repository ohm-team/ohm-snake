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

[Application link](https://ohm-team.github.io/ohm-snake/)

> A 3D snake game written in threejs, which uses Tensorflow (ML) to control the snake with head movements. Move your head left and right to control the snake and open your mouth to make the snake slower! All magic is rendered on the screen using Canvas API.

- To run the game: `npm start` and visit [https://localhost:8080/](https://localhost:8080/) (It uses a self-signed HTTPS certificate to serve frontend. This is required for some of the API's.).
- Or visit [application link](https://ohm-team.github.io/ohm-snake/) directly from your mobile browser (both iOS and Android are supported).
- Access to the camera is required to control the snake with head movements, please allow when prompted.
- Head tracking feature can be less accurate on low-end mobile phones because of the frontal camera resolution.
- How to play?
  - Game uses your phone's front camera. Position your face in front of your phone!
  - Make sure you have no more than 20-40 cm between your face and your camera.
  - Ensure there is enough light for the face to be visible and clear. The whole face should be in the frame.
  - Make short head movements to the left and to the right to control the snake accordingly.
  - Return head to the central position between the moves.
  - Open your mouth in case you are in trouble! The snake will slow down!

### Web API's used

TODO
