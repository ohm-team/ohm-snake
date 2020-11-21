import * as THREE from 'three';

// geometry
var geometry = new THREE.BufferGeometry();

// attributes
var positions = new Float32Array(500 * 3); // 3 vertices per point
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// draw range
let drawCount = 2; // draw the first 2 pathPoints, only
geometry.setDrawRange(0, drawCount);

// material
var material = new THREE.LineBasicMaterial({ color: 0xff0000 });

// line
const pathLine = new THREE.Line(geometry, material);
pathLine.geometry.setDrawRange(0, 500);

let pathPoints = [];

const setPosition = () => {
  var positions = pathLine.geometry.attributes.position.array;

  // var x = 0, y = 0, z = 0, index = 0;

  // for ( var i = 0, l = MAX_pathPoints; i < l; i ++ ) {
  //     // console.log('asdf, ', i)
  //     positions[ index ++ ] = x;
  //     positions[ index ++ ] = y;
  //     positions[ index ++ ] = z;

  //     x += ( Math.random() - 0.5 ) * 2;
  //     y += ( Math.random() - 0.5 ) * 2;
  //     z += ( Math.random() - 0.5 ) * 2;
  // }
  let index = 0;
  pathPoints.forEach(([x, y, z], i) => {
    if (i > 500) {
      return;
    }
    positions[index++] = x;
    positions[index++] = y;
    positions[index++] = z;
  });
};

const updateFirstPointInPath = (point) => {
  pathPoints[0] = point;
};

const addPointToPath = (point) => {
  pathPoints.splice(1, 0, point);
};

pathPoints.push([0, 0, 0]);
// setPosition();

export { pathLine, addPointToPath, updateFirstPointInPath, pathPoints, setPosition };
