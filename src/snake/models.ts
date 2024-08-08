import * as THREE from 'three';
import { RAD180, RAD270, RAD90 } from './constants';
import { collider, food, snakeMaterialsLookup, snake_body } from './materials';
import { choice } from './utils';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// @ts-ignore
const loader = new FBXLoader();

export const getApple = (x: number, y: number, z: number, unitSize: number) => {
  const colliderBox = new THREE.BoxBufferGeometry(unitSize, unitSize, unitSize);
  const apple = new THREE.Mesh(colliderBox, collider);
  apple.name = `Food`;
  const foodGroup = new THREE.Group();
  foodGroup.rotateY(choice([RAD90, RAD180, RAD270]));

  loader.load('./models/fruit.fbx', function (object) {
    object.name = `FoodFBX`;
    object.scale.set(unitSize, unitSize, unitSize);
    (object.children[2] as any).material = food;
    foodGroup.add(object);
  });
  apple.add(foodGroup);
  apple.position.set(x, y, z);

  return apple;
};

export const getSnakeSection = (unitSize: number) => {
  const vertebra = new THREE.Mesh(new THREE.BoxBufferGeometry(unitSize, unitSize, unitSize), snake_body);
  loader.load('models/snakeSection.fbx', (object: THREE.Group) => {
    object.scale.set(unitSize, unitSize, unitSize);
    vertebra.add(object);
  });
  return vertebra;
};

export const getSnakeHead = (unitSize: number) => {
  const colliderScale = 0.4;
  const geometry = new THREE.BoxGeometry(unitSize * colliderScale, unitSize * colliderScale, unitSize * colliderScale);
  const mesh = new THREE.Mesh(geometry, collider);
  mesh.name = 'Player';

  loader.load('./models/snakeHeadBlock.fbx', (object: THREE.Group) => {
    object.scale.set(unitSize, unitSize, unitSize);
    object.traverse((child) => {
      let material = snakeMaterialsLookup[child.name];
      // @ts-ignore
      if (material) child.material = material;
    });
    mesh.add(object);
  });
  return mesh;
};
