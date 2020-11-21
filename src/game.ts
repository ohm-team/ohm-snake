import * as THREE from 'three';
import { Snake } from './snake';
import { buildField } from './snake/field';
import { fieldSize } from './snake/config';
import { getApple } from './snake/models';
import { createLights } from './snake/lights';

interface GameEvents {
  turnLeft: () => void;
  turnRight: () => void;
}

const FIELD_SIZE = {
  x: gridSize,
  y: gridSize,
  z: gridSize,
};

var camera, scene, renderer, cameraGoal, snake, tag;

var renderCounter = 0;
var speed = 5;
var unitSize = 0.1;
var gridSize = unitSize * 50;

var newPosition = new THREE.Vector3();
var matrix = new THREE.Matrix4();

var temp = new THREE.Vector3();

var keys = {
  38: 'backward', // up key
  40: 'forward', // down key
  39: 'right', // -> key
  37: 'left', // <- key
  87: 'up', // W key
  83: 'down', // S key
  32: 'pause', // spacebar
};

export const startSnakeGame = (onGamaOver): GameEvents => {
  const events = init(onGamaOver);
  animate();
  return events;
};

function randomPoint() {
  // Generate random points between 0 and the gridSize
  // in steps for unitSize i.e 0, 50, 350, 700, 40 etc
  var pos = Math.floor(((Math.random() * gridSize) / 2) * 2);
  return pos - (pos % unitSize);
}

function randomAxis() {
  var point = randomPoint();
  return point > gridSize ? gridSize - point - 1 : point - 1;
}

function addTagToScene(x, y, z) {
  const apple = getApple(x, y, z, fieldSize.unitSize);
  scene.add(apple);
  snake.setCurrentTagPosition({ x: x, y: y, z: z });
  return apple;
}

function init(onGamaOver): GameEvents {
  var canvas: HTMLCanvasElement = document.getElementById('snakeCanvas') as HTMLCanvasElement;

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.set(0, 2, -2);

  scene = new THREE.Scene();
  createLights(scene);
  camera.lookAt(scene.position);

  // var geometry = new THREE.BoxBufferGeometry( 0.2, 0.2, 0.2 );
  // var material = new THREE.MeshNormalMaterial();

  cameraGoal = new THREE.Object3D();
  //  --- Snake ---
  snake = new Snake(scene, unitSize, 0x00ff00, cameraGoal);
  snake.render();

  snake.onTagCollision = function () {
    // KATYA
    scene.remove(tag);
    tag = addTagToScene(randomAxis(), unitSize, randomAxis());
    // setScore();
  };
  snake.onSelfCollision = function () {
    onGamaOver();
    snake.reset();
  };

  cameraGoal.position.set(0, 0.4, -0.5);

  tag = addTagToScene(randomAxis(), unitSize / 2, randomAxis());

  buildField(scene, fieldSize);

  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  var keyActions = {
    // backward: {
    //   enabled: true,
    //   action: function () {
    //     snake.back();
    //     keyActions.forward.enabled = false;
    //     keyActions.left.enabled = true;
    //     keyActions.right.enabled = true;
    //     keyActions.pause.enabled = true;
    //   },
    // },
    // forward: {
    //   enabled: true,
    //   action: function () {
    //     snake.forward();
    //     keyActions.backward.enabled = false;
    //     keyActions.left.enabled = true;
    //     keyActions.right.enabled = true;
    //     keyActions.pause.enabled = true;
    //   },
    // },
    right: {
      enabled: true,
      action: function () {
        snake.turn('right');
        // keyActions.left.enabled = false;
        // keyActions.forward.enabled = true;
        // keyActions.backward.enabled = true;
        keyActions.pause.enabled = true;
      },
    },
    left: {
      enabled: true,
      action: function () {
        snake.turn('left');
        // keyActions.right.enabled = false;
        // keyActions.backward.enabled = true;
        // keyActions.forward.enabled = true;
        keyActions.pause.enabled = true;
      },
    },
    /*'up': {
        enabled: true,
        action: function() {
          snake.up();
        }
      },
      'down': {
        enabled: true,
        action: function() {
          snake.down();   
        }
      },*/
    pause: {
      enabled: false,
      action: function () {
        snake.clear();
        keyActions.pause.enabled = false;
      },
    },
  };

  document.addEventListener('keyup', onKeyPressUp, false);

  function onKeyPressUp(e) {
    var keyAction = keyActions[keys[e.keyCode]];
    if (keyAction && keyAction.enabled) {
      keyAction.action();
      // if (raf) {
      //   win.cancelAnimationFrame(raf);
      // }
      // // console.log('aaas')
      // raf = win.requestAnimationFrame(triggerRenders);
    }
  }

  // first default  move
  keyActions['left'].action();

  return {
    turnLeft: keyActions.left.action,
    turnRight: keyActions.right.action,
  };
}

function animate() {
  requestAnimationFrame(animate);

  // time += 0.01;
  // if ( time > stop ) {

  //   mesh.rotateY( Math.random() * 360 * DEGTORAD);

  //   stop = time + Math.random() * 1;

  // }
  // snake.getHead().translateZ(0.01);
  // if (renderCounter === speed) {
  snake.render();
  renderCounter = 0;

  camera.lookAt(snake.getHead().position);
  // }
  renderCounter++;

  temp.setFromMatrixPosition(snake.cameraGoal.matrixWorld);
  camera.position.lerp(temp, 0.05);

  renderer.render(scene, camera);
}
