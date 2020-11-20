import * as THREE from 'three';

export function Snake(scene, size, color) {
  this.snake = [];
  this.scene = scene;
  this.size = size; // snake is made up of cubes
  this.color = color;
  this.distance = 50; // distance to move by

  this.direction = null;
  this.axis = null;

  this.onSelfCollision = function () {};
  this.onTagCollision = function () {};

  this.position = null; // current position of the snake instance
  this.tagPosition = null; // the current position of the tag to be hit

  this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
  this.material = new THREE.MeshLambertMaterial({ color: this.color });
  this.init();
}

Snake.prototype = {
  init: function () {
    this.addCube();
    this.addCube();
    this.setDefaultPositions();
  },
  setDefaultPositions: function () {
    var self = this;
    this.snake.forEach(function (cube, index) {
      cube.position.z = -1 * ((self.size / 2) * (index + 1));
      cube.position.y = self.size / 2;
      cube.position.x = -500 + 25;
    });
  },
  reset: function () {
    this.init();
  },
  selfCollision: function () {
    this.onSelfCollision();
    this.clear();
  },
  tagCollision: function () {
    this.onTagCollision();
    this.addCube();
  },
  setCurrentTagPosition: function (position) {
    this.tagPosition = position;
  },
  isHit: function (p1, p2) {
    if (p1.x === p2.x && p1.y === p2.y && p1.z === p2.z) {
      return true;
    }
    return false;
  },
  getHead: function () {
    return this.snake[0];
  },
  createCube: function (position) {
    var cube = new THREE.Mesh(this.geometry, this.material);
    return cube;
  },
  addCube: function () {
    this.snake.push(this.createCube());
  },
  render: function () {
    var self = this;
    var next = null;
    this.snake.forEach(function (cube) {
      var temp = null;
      if (self.axis !== null && self.direction !== null) {
        if (!next) {
          next = { x: cube.position.x, y: cube.position.y, z: cube.position.z };
          cube.position[self.axis] += self.direction * self.distance;
          self.position = { x: cube.position.x, y: cube.position.y, z: cube.position.z };
          if (self.tagPosition) {
            if (self.isHit(self.position, self.tagPosition)) {
              self.tagCollision();
            }
          }
        } else {
          temp = { x: cube.position.x, y: cube.position.y, z: cube.position.z };
          cube.position.set(next.x, next.y, next.z);
          // check if it collides with itself
          if (self.isHit(self.position, cube.position)) {
            self.selfCollision();
          }
          next = { x: temp.x, y: temp.y, z: temp.z };
        }
      }
      self.renderCube(cube);
    });
  },
  back: function () {
    this.axis = 'z';
    this.direction = -1;
  },
  forward: function () {
    this.axis = 'z';
    this.direction = 1;
  },
  up: function () {
    this.axis = 'y';
    this.direction = 1;
  },
  down: function () {
    this.axis = 'y';
    this.direction = -1;
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
  },
  renderCube: function (cube) {
    this.scene.add(cube);
  },
};
