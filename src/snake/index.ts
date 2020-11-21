import * as THREE from 'three';

import { DEGTORAD, findPointByDistance } from './utils';

export function Snake(scene, size, color, cameraGoal) {
  this.snake = [];
  this.scene = scene;
  this.size = size;
  this.color = color;
  this.pathPoints = [[0, 0, 0]];
  this.distance = size / 4;
  this.initialSize = 4;
  this.speed = 0.01;
  this.liveTime = 0;

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
    for (var i = 0; i < this.initialSize; i++) {
      this.addCube();
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
    console.log('self collision');
    this.onSelfCollision();
    this.clear();
  },
  tagCollision: function () {
    this.speed = this.speed * 1.25;
    this.onTagCollision();
    this.addCube();
  },
  setCurrentTagPosition: function (position) {
    this.tagPosition = position;
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
  createCube: function (position) {
    var cube = new THREE.Mesh(this.geometry, this.material);
    return cube;
  },
  addCube: function () {
    this.snake.push(this.createCube());
  },
  render: function () {
    this.liveTime++;

    var self = this;
    this.snake.forEach(function (cube, i) {
      var temp = null;
      if (self.axis !== null && self.direction !== null) {
        if (i === 0) {
          cube.position[self.axis] += self.direction * self.speed;
          self.position = { x: cube.position.x, y: cube.position.y, z: cube.position.z };

          self.updateFirstPoint();

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
    console.log('back');
  },
  forward: function () {
    this.axis = 'z';
    this.direction = 1;
    console.log('fwd');
  },
  right: function () {
    this.axis = 'x';
    this.direction = 1;
    console.log('right');
  },
  left: function () {
    this.axis = 'x';
    this.direction = -1;
    console.log('left');
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
