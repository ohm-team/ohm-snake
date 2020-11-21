import * as THREE from 'three';
import { RAD180, RAD270, RAD90 } from './constants';
import { collider, food } from './materials';
import { choice } from './utils';

// @ts-ignore
const loader = new THREE.FBXLoader();

export const getApple = (x: number, y: number, z: number, unitSize: number) => {
  const colliderBox = new THREE.BoxBufferGeometry(unitSize, unitSize, unitSize);
  const apple = new THREE.Mesh(colliderBox, collider);
  apple.name = `Food`;
  const foodGroup = new THREE.Group();
  foodGroup.rotateY(choice([RAD90, RAD180, RAD270]));

  loader.load('./models/fruit.fbx', function (object) {
    object.name = `FoodFBX`;
    object.scale.set(unitSize, unitSize, unitSize);
    object.children[2].material = food;
    foodGroup.add(object);
  });
  apple.add(foodGroup);
  apple.position.set(x, y, z);

  return apple;
};
