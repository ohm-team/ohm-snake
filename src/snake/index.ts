import * as THREE from 'three';

var DEGTORAD = 0.01745327;

export function Snake(scene, size, color, cameraGoal) {
  this.snake = [];
  this.scene = scene;
  this.size = size; // snake is made up of cubes
  this.color = color;
  this.distance = 0.125; // distance to move by
  this.initialSize = 5;

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
  },
  setDefaultPositions: function () {
    var self = this;
    this.snake.forEach(function (cube, index) {
      cube.position.z = -1 * ((self.size / 2) * (index + 1));
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
    this.clear();
  },
  tagCollision: function () {
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
            //   console.log('hi?',self.position,  self.tagPosition)
            if (self.isHit(self.position, self.tagPosition, self.size)) {
              // console.log('hit');
              self.tagCollision();
            }
          }
        } else {
          temp = { x: cube.position.x, y: cube.position.y, z: cube.position.z };
          cube.position.set(next.x, next.y, next.z);
          // check if it collides with itself
          if (self.isHit(self.position, cube.position, self.size)) {
            self.selfCollision();
          }
          next = { x: temp.x, y: temp.y, z: temp.z };
        }
      }
      self.renderCube(cube);
    });
  },
  turn: function (direction) {
    // 'left' or 'right
    console.log(direction, this.direction);
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
  },
  renderCube: function (cube) {
    this.scene.add(cube);
  },
};
