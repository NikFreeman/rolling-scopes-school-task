function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createArray(n = 4) {
  let dimension = n * n;
  const arr = new Array(dimension);
  console.log(arr);
}

export { createArray };
