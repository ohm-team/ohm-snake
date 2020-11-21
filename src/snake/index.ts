import * as THREE from 'three';

var DEGTORAD = 0.01745327;

const dist = ([x1, y1, z1], [x2, y2, z2]) => {
  var a = x1 - x2;
  var b = z1 - z2;

  return Math.sqrt(a * a + b * b);
};

function midpoint([x1, y1, z1], [x2, y2, z2], per) {
  return [x1 + (x2 - x1) * per, y1, z1 + (z2 - z1) * per];
}
let zi = 0;

const findPointByDistance = (points, distance) => {
  let passedDistance = 0;
  let foundPoint = null;

  // zi++;
  // if (zi > 1000) {
  //     debugger;
  // }

  points.forEach((point, i) => {
    if (!foundPoint) {
      if (points.length <= i + 1) {
        foundPoint = point;
        return;
      }

      let nextPoint = points[i + 1];
      let d = dist(point, nextPoint);
      if (passedDistance + d >= distance) {
        let dOnPoint = distance - passedDistance;
        foundPoint = midpoint(point, nextPoint, dOnPoint / d);
        return;
      } else {
        passedDistance += d;
        return;
      }
    }
  });

  return foundPoint;
};

export function Snake(scene, size, color, cameraGoal, pathPoints) {
  this.snake = [];
  this.scene = scene;
  this.size = size;
  this.color = color;
  this.pathPoints = pathPoints;
  this.distance = size / 4;
  this.initialSize = 4;
  this.speed = 0.01;

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
    // this.onSelfCollision();
    // this.clear();
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
  getTail: function () {
    return this.snake[this.snake.length - 1];
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
    var self = this;
    var next = null;
    this.snake.forEach(function (cube, i) {
      var temp = null;
      if (self.axis !== null && self.direction !== null) {
        if (!next) {
          next = { x: cube.position.x, y: cube.position.y, z: cube.position.z };

          cube.position[self.axis] += self.direction * self.speed;
          self.position = { x: cube.position.x, y: cube.position.y, z: cube.position.z };
          if (self.tagPosition) {
            if (self.isHit(self.position, self.tagPosition, self.size)) {
              self.tagCollision();
            }
          }
        } else {
          const distanceFromBHead = i * (self.size + self.distance);

          //   temp = { x: cube.position.x, y: cube.position.y, z: cube.position.z };
          const [x, y, z] = findPointByDistance(self.pathPoints, distanceFromBHead);
          //   consoe.log('find', x, ,y, z)
          cube.position.set(x, y, z);
          //   cube.position.set(next.x, next.y, next.z);
          //   if (self.axis == 'z') {
          //     cube.translateZ(self.direction * self.distance);
          //   }
          //   if (self.axis == 'x') {
          //     cube.translateX(self.direction * self.distance);
          //   }
          // check if it collides with itself
          if (self.isHit(self.position, cube.position, self.size)) {
            self.selfCollision();
          }
          //   next = { x: temp.x, y: temp.y, z: temp.z };
        }
      }
      self.renderCube(cube);
    });
  },
  turn: function (direction) {
    // 'left' or 'right
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
