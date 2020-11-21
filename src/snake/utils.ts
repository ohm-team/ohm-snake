export const DEGTORAD = 0.01745327;

export const choice = (array: number[]) => array[Math.floor(Math.random() * array.length)];

export const dist = ([x1, y1, z1], [x2, y2, z2]) => {
  var a = x1 - x2;
  var b = z1 - z2;

  return Math.sqrt(a * a + b * b);
};

export function midpoint([x1, y1, z1], [x2, y2, z2], per) {
  return [x1 + (x2 - x1) * per, y1, z1 + (z2 - z1) * per];
}

export const findPointByDistance = (points, distance) => {
  let passedDistance = 0;
  let foundPoint = null;

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
