import * as THREE from 'three';
import { fieldSize } from './config';
import { getSnakeHead, getSnakeSection } from './models';

import { DEGTORAD, findPointByDistance } from './utils';
import { fieldSize } from './config';

const snakeSpeeds = [0.011, 0.0125, 0.015, 0.016, 0.0165, 0.017, 0.018, 0.019, 0.02, 0.021, 0.022, 0.023, 0.024, 0.0245, 0.025];

export function Snake(scene, size, color, cameraGoal) {
  this.snake = [];
  this.scene = scene;
  this.size = size;
  this.color = color;
  this.pathPoints = [[0, 0, 0]];
  this.distance = size / 4;
  this.initialSize = 4;
  this.speedLevel = 0;
  this.speed = snakeSpeeds[this.speedLevel];
  this.liveTime = 0;
  this.alive = true;

  this.cameraGoal = cameraGoal;

  this.direction = null;
  this.axis = null;

  this.onSelfCollision = function () {};
  this.onTagCollision = function () {};

  this.position = null; // current position of the snake instance
  this.tagPosition = null; // the current position of the tag to be hit

  this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
  //   this.material = new THREE.MeshLambertMaterial({ color: this.color });
  this.material = new THREE.MeshNormalMaterial();
  this.init();
}

Snake.prototype = {
  init: function () {
    this.addCube({ isHead: true });
    for (var i = 1; i < this.initialSize; i++) {
      this.addCube({ isHead: false });
    }
    this.setDefaultPositions();
    this.getHead().add(this.cameraGoal);
    const { x, y, z } = this.getTail().position;
    this.pathPoints.push([x, y, z]);
  },
  setDefaultPositions: function () {
    var self = this;
    this.snake.forEach(function (cube, index) {
      cube.position.z = -1 * ((self.distance + self.size) * index);
      cube.position.y = self.size / 2;
      cube.position.x = 0;
    });
    this.getHead().rotateY(0);
  },
  reset: function () {
    this.init();
  },
  selfCollision: function () {
    this.onSelfCollision();
    this.alive = false;
    this.clear();
  },
  tagCollision: function () {
    this.speed = snakeSpeeds[this.speedLevel++] || snakeSpeeds[snakeSpeeds.length - 1];
    this.onTagCollision();
    this.addCube({ isHead: false });
  },
  setCurrentTagPosition: function (position) {
    this.tagPosition = position;
  },
  isOnField: function () {
    const inX = (-1 * fieldSize.x) / 2 < this.position.x && this.position.x < fieldSize.x / 2;
    const inZ = (-1 * fieldSize.x) / 2 < this.position.z && this.position.z < fieldSize.x / 2;

    // console.log(this.position, inX, inZ);
    return inX && inZ;
  },
  isHit: function (a, d, size) {
    let b1 = a.y - size / 2;
    let t1 = a.y + size / 2;
    let r1 = a.x + size / 2;
    let l1 = a.x - size / 2;
    let f1 = a.z - size / 2;
    let B1 = a.z + size / 2;
    let b2 = d.y - size / 2;
    let t2 = d.y + size / 2;
    let r2 = d.x + size / 2;
    let l2 = d.x - size / 2;
    let f2 = d.z - size / 2;
    let B2 = d.z + size / 2;
    if (t1 < b2 || r1 < l2 || b1 > t2 || l1 > r2 || f1 > B2 || B1 < f2) {
      return false;
    }
    return true;
  },
  getHead: function () {
    return this.snake[0];
  },
  getTail: function () {
    return this.snake[this.snake.length - 1];
  },
  addPointToPath: function (point) {
    this.pathPoints.splice(1, 0, point);
  },
  updateFirstPoint: function () {
    this.pathPoints[0] = this.getPositionAsVector();
  },
  getPositionAsVector: function () {
    if (this.position) {
      return [this.position.x, this.position.y, this.position.z];
    }
    return [0, 0, 0];
  },
  createCube: function ({ isHead }: { isHead: true }) {
    if (isHead) {
      return getSnakeHead(fieldSize.unitSize);
    }
    return getSnakeSection(fieldSize.unitSize);
  },
  addCube: function ({ isHead }: { isHead: true }) {
    this.snake.push(this.createCube({ isHead }));
  },
  render: function () {
    this.liveTime++;

    var self = this;
    this.snake.forEach(function (cube, i) {
      var temp = null;
      if (self.axis !== null && self.direction !== null) {
        if (i === 0) {
          // head
          cube.position[self.axis] += self.direction * self.speed;
          self.position = { x: cube.position.x, y: cube.position.y, z: cube.position.z };

          self.updateFirstPoint();

          if (!self.isOnField()) {
            self.selfCollision();
            return;
          }

          if (self.tagPosition) {
            if (self.isHit(self.position, self.tagPosition, self.size)) {
              self.tagCollision();
            }
          }
        } else {
          const distanceFromBHead = i * (self.size + self.distance);

          const [x, y, z] = findPointByDistance(self.pathPoints, distanceFromBHead);
          //   consoe.log('find', x, ,y, z)
          cube.position.set(x, y, z);
          //   cube.position.set(next.x, next.y, next.z);

          // check if it collides with itself
          // skip head vs first block
          if (i !== 1 && self.isHit(self.position, cube.position, self.size)) {
            self.selfCollision();
          }
        }
      }
      self.renderCube(cube);
    });
  },
  turn: function (direction) {
    // 'left' or 'right
    if (!this.alive) {
      return false;
    }

    this.addPointToPath(this.getPositionAsVector());

    if (!this.direction) {
      this.forward();
      return;
    }

    if (direction == 'right') {
      this.getHead().rotateY(-90 * DEGTORAD);
      if (this.axis == 'z' && this.direction == 1) {
        this.left();
        return;
      }

      if (this.axis == 'z' && this.direction == -1) {
        this.right();
        return;
      }

      if (this.axis == 'x' && this.direction == 1) {
        this.forward();
        return;
      }

      if (this.axis == 'x' && this.direction == -1) {
        this.back();
        return;
      }
    }

    if (direction == 'left') {
      this.getHead().rotateY(90 * DEGTORAD);
      if (this.axis == 'z' && this.direction == 1) {
        this.right();
        return;
      }

      if (this.axis == 'z' && this.direction == -1) {
        this.left();
        return;
      }

      if (this.axis == 'x' && this.direction == 1) {
        this.back();
        return;
      }

      if (this.axis == 'x' && this.direction == -1) {
        this.forward();
        return;
      }
    }
  },
  back: function () {
    this.axis = 'z';
    this.direction = -1;
  },
  forward: function () {
    this.axis = 'z';
    this.direction = 1;
  },
  right: function () {
    this.axis = 'x';
    this.direction = 1;
  },
  left: function () {
    this.axis = 'x';
    this.direction = -1;
  },
  clear: function () {
    this.axis = null;
    this.direction = null;
    this.pathPoints = [[0, 0, 0]];
  },
  renderCube: function (cube) {
    this.scene.add(cube);
  },
};
