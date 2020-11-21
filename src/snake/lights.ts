import * as THREE from 'three';

export const createLights = (scene: THREE.Scene) => {
  let light = undefined;

  light = new THREE.HemisphereLight(0xaaaaaa, 0x444444, 0.7);
  light.position.set(0, -1, 0);
  scene.add(light);

  light = new THREE.DirectionalLight(0xf2d97e, 2);
  scene.add(light);

  light = new THREE.DirectionalLight(0xf5cea6, 0.8);
  light.position.set(0, 0, 1);
  scene.add(light);

  light = new THREE.DirectionalLight(0xf5cea6, 0.3);
  light.position.set(0, 0, -1);
  scene.add(light);

  light = new THREE.DirectionalLight(0xb4d6db, 0.6);
  light.position.set(-1, 0, 0);
  scene.add(light);

  light = new THREE.DirectionalLight(0xb4d6db, 0.6);
  light.position.set(1, 0, 0);
  scene.add(light);

  // // Turn this on for light testing
  // let lightCube = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: 0xFFFFFF }))
  // tjs_scene.add(lightCube)
};
