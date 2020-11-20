import * as THREE from 'three';
import { Snake } from './snake';

window.onload = () => {
  (function (win, doc) {
    var scene, camera, renderer, cube, goal;
    var temp = new THREE.Vector3();
    var gridSize = 750,
      unitSize = 50;
    var pos;
    var raf;
    var snake;
    var renderCounter = 0;
    var tag = null;

    var isMouseDown = false,
      onMouseDownPosition,
      theta = 45,
      phi = 60,
      onMouseDownTheta = 45,
      onMouseDownPhi = 60;
    var mouse3D, ray, projector;
    var radius = 1600;

    var speed = 15;

    // var gameScoreBoard = doc.getElementById('gamescore');
    // var pauseScreen = doc.getElementById('pause');
    // var speedoptions = doc.getElementById('speedoptions');

    // speedoptions.addEventListener('change', onSpeedChange, false);

    function showPauseScreen() {
      //   pauseScreen.className = 'paused';
      console.log('pause');
    }

    function hidePauseScreen() {
      console.log('unpause');
      //   pauseScreen.className = 'paused hidden';
    }

    var obstacles = []; // Array of obstacles

    var keys = {
      38: 'backward', // up key
      40: 'forward', // down key
      39: 'right', // -> key
      37: 'left', // <- key
      87: 'up', // W key
      83: 'down', // S key
      32: 'pause', // spacebar
    };

    var keyActions = {
      backward: {
        enabled: true,
        action: function () {
          snake.back();
          keyActions.forward.enabled = false;
          keyActions.left.enabled = true;
          keyActions.right.enabled = true;
          keyActions.pause.enabled = true;
          hidePauseScreen();
        },
      },
      forward: {
        enabled: true,
        action: function () {
          snake.forward();
          keyActions.backward.enabled = false;
          keyActions.left.enabled = true;
          keyActions.right.enabled = true;
          keyActions.pause.enabled = true;
          hidePauseScreen();
        },
      },
      right: {
        enabled: true,
        action: function () {
          snake.right();
          keyActions.left.enabled = false;
          keyActions.forward.enabled = true;
          keyActions.backward.enabled = true;
          keyActions.pause.enabled = true;
          hidePauseScreen();
        },
      },
      left: {
        enabled: true,
        action: function () {
          snake.left();
          keyActions.right.enabled = false;
          keyActions.backward.enabled = true;
          keyActions.forward.enabled = true;
          keyActions.pause.enabled = true;
          hidePauseScreen();
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
          showPauseScreen();
        },
      },
    };

    var interval = 10000;
    function init() {
      // --- Scene ---
      scene = new THREE.Scene();

      // --- Camera ---
      camera = new THREE.PerspectiveCamera(65, win.innerWidth / win.innerHeight, 1, 10000);
      camera.position.set(500, 800, 1300);
      //   //camera.position.z = 500;
      //   camera.lookAt(new THREE.Vector3());

      // camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
      // camera.position.set(500, 800, 1300);

      scene = new THREE.Scene();
      camera.lookAt(scene.position);

      // --- Camera ---

      // --- Grid ---
      var gridGeometry = new THREE.Geometry();
      for (var i = -gridSize; i <= gridSize; i += unitSize) {
        gridGeometry.vertices.push(new THREE.Vector3(-gridSize, 0, i));
        gridGeometry.vertices.push(new THREE.Vector3(gridSize, 0, i));
        gridGeometry.vertices.push(new THREE.Vector3(i, 0, -gridSize));
        gridGeometry.vertices.push(new THREE.Vector3(i, 0, gridSize));
      }
      var gridMaterial = new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.2, transparent: true });
      var line = new THREE.Line(gridGeometry, gridMaterial, THREE.LineSegments);
      scene.add(line);

      // --- Snake ---
      snake = new Snake(scene, unitSize, 0xff0000);
      snake.render();
      snake.onTagCollision = function () {
        scene.remove(tag);
        tag = addTagToScene(randomAxis(), unitSize / 2, randomAxis());
        setScore();
      };
      snake.onSelfCollision = function () {
        snake.reset();
      };

      tag = addTagToScene(randomAxis(), unitSize / 2, randomAxis());

      // goal = new THREE.Object3D;
      // snake.getHead().add( goal );
      // goal.position.set(20, 20, 100);

      // --- Renderer ---
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(win.innerWidth - 10, win.innerHeight - 10);
      renderer.setClearColor(0xf0f0f0);

      doc.body.appendChild(renderer.domElement);

      //var ambientLight = new THREE.AmbientLight( 0xcccccc );
      //scene.add(ambientLight);

      // --- Projector ---
      //   projector = new THREE.Projector();

      // --- Ray ---
      ray = new THREE.Ray(camera.position, null);

      // --- Directional Lighting ---
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(500, 800, 1300).normalize();
      scene.add(directionalLight);
    }

    onMouseDownPosition = new THREE.Vector2();

    function randomAxis() {
      var point = randomPoint();
      return point > gridSize ? gridSize - point - 25 : point - 25;
    }

    function triggerRenders() {
      if (renderCounter === speed) {
        // temp.setFromMatrixPosition(snake.geometry.matrixWorld);
        camera.position.lerp(snake.getHead(), 2000);
        camera.lookAt(snake.getHead().position);

        snake.render();
        render();
        renderCounter = 0;
      }
      renderCounter++;
      raf = win.requestAnimationFrame(triggerRenders);
    }

    function addTagToScene(x, y, z) {
      var geometry = new THREE.BoxGeometry(unitSize, unitSize, unitSize);
      var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
      var sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      scene.add(sphere);
      snake.setCurrentTagPosition({ x: x, y: y, z: z });
      return sphere;
    }

    function onSpeedChange(e) {
      speed = Number(e.target.value);
    }

    function setScore() {
      //   gameScoreBoard.innerHTML = Number(gameScoreBoard.innerText) + 1 ;
      console.log('get score');
    }

    function clearScore() {
      //   gameScoreBoard.innerHTML = '0';
      console.log('clear score');
    }

    function randomPoint() {
      // Generate random points between 0 and the gridSize
      // in steps for unitSize i.e 0, 50, 350, 700, 40 etc
      var pos = Math.floor(Math.random() * gridSize * 2);
      return pos - (pos % unitSize);
    }

    function onKeyPressUp(e) {
      var keyAction = keyActions[keys[e.keyCode]];
      if (keyAction && keyAction.enabled) {
        keyAction.action();
        if (raf) {
          win.cancelAnimationFrame(raf);
        }
        // console.log('aaas')
        raf = win.requestAnimationFrame(triggerRenders);
      }
    }

    function onMouseDown(e) {
      e.preventDefault();

      isMouseDown = true;
      onMouseDownTheta = theta;
      onMouseDownPhi = phi;

      onMouseDownPosition.x = e.clientX;
      onMouseDownPosition.y = e.clientY;
    }

    function onMouseMove(e) {
      e.preventDefault();

      if (isMouseDown) {
        theta = -((e.clientX - onMouseDownPosition.x) * 0.5) + onMouseDownTheta;
        phi = (e.clientY - onMouseDownPosition.y) * 0.5 + onMouseDownPhi;

        phi = Math.min(180, Math.max(0, phi));

        camera.position.x = radius * Math.sin((theta * Math.PI) / 360) * Math.cos((phi * Math.PI) / 360);
        camera.position.y = radius * Math.sin((phi * Math.PI) / 360);
        camera.position.z = radius * Math.cos((theta * Math.PI) / 360) * Math.cos((phi * Math.PI) / 360);
        camera.updateMatrix();
      }

      mouse3D = projector.unprojectVector(
        new THREE.Vector3((e.clientX / renderer.domElement.width) * 2 - 1, -(e.clientY / renderer.domElement.height) * 2 + 1, 0.5),
        camera
      );
      ray.direction = mouse3D.sub(camera.position).normalize();

      render();
    }

    function onMouseUp(e) {
      e.preventDefault();

      isMouseDown = false;
      onMouseDownPosition.x = e.clientX - onMouseDownPosition.x;
      onMouseDownPosition.y = e.clientY - onMouseDownPosition.y;
      if (onMouseDownPosition.length() > 5) {
        return;
      }
    }

    function render() {
      renderer.render(scene, camera);
    }

    init();
    render();
    document.addEventListener('keyup', onKeyPressUp, false);
    document.addEventListener('mousedown', onMouseDown, false);
    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mouseup', onMouseUp, false);
  })(window, document);
};
