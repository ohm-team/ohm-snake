import * as THREE from 'three';
import { FieldSize } from './config';
import { HALF_PI } from './constants';
import { dashline, flat_blue } from './materials';

export const buildField = (scene: THREE.Scene, size: FieldSize) => {
  const fieldHeight = size.unitSize * 2;
  const floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(size.x, size.y, 0), flat_blue);
  floor.name = 'FloorPlane';
  floor.rotateX(-HALF_PI);

  const lineSegments = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(size.x, fieldHeight, size.y)), dashline);
  lineSegments.position.set(0, fieldHeight / 2, 0);
  lineSegments.name = 'BoardOutline';
  lineSegments.computeLineDistances();

  scene.add(floor);
  scene.add(lineSegments);
};
