import * as THREE from 'three';

export const collider = new THREE.MeshBasicMaterial({
  opacity: 0,
  transparent: true,
});

export const flat_blue = new THREE.MeshBasicMaterial({
  color: 0x48c4da,
  opacity: 0.1,
  transparent: true,
});

export const flat_orange = new THREE.MeshLambertMaterial({
  color: 0xfbb059,
});

export const dark_orange = new THREE.MeshPhongMaterial({
  color: 0xca4e2b,
});

export const cornea = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  specular: 0xffffff,
  shininess: 1,
  transparent: true,
  opacity: 0.3,
});

export const sclera = new THREE.MeshPhongMaterial({
  color: 0xffffff,
});

export const mid_blue = new THREE.MeshBasicMaterial({
  color: 0x365e81,
});

export const arrow = new THREE.MeshBasicMaterial({
  color: 0x0063aa,
  transparent: true,
});

export const arrow_highlight = new THREE.MeshBasicMaterial({
  color: 0xffafff,
});

export const mid_highlight = new THREE.MeshBasicMaterial({
  color: 0x36ffff,
});

export const snake_body = new THREE.MeshLambertMaterial({
  color: 0x639311,
});

export const food = new THREE.MeshLambertMaterial({
  color: 0x5c0b0d,
});

export const food_highlight = new THREE.MeshLambertMaterial({
  color: 0xed070a,
});

export const board = new THREE.LineBasicMaterial({
  color: 0xfcef9f,
  linewidth: 5,
});

export const dashline = new THREE.LineBasicMaterial({
  color: 0xffaa00,
  linewidth: 5,
});

export const indicator = new THREE.LineDashedMaterial({
  color: 0x5ad6ca,
  dashSize: 1,
  gapSize: 2,
});

export const indicator_inactive = new THREE.LineDashedMaterial({
  color: 0x5ad6ca,
  dashSize: 1,
  gapSize: 2,
  opacity: 0.1,
  transparent: true,
});

export const pointsX = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,
  color: 0xf56942,
});

export const pointsY = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,
  color: 0x90f542,
});

export const pointsZ = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,
  color: 0x4287f5,
});
