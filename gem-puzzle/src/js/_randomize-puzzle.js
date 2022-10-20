function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createArray(n = 4) {
  let dimension = n * n;
  const arr = new Array(dimension).fill(0).map((x, index) => {
    return index;
  });
  return arr.slice(1).concat([0]);
}
function shuffleArray(arr) {
  let shuffleArray = [];
  let unsolvable = true;
  while (unsolvable) {
    shuffleArray = [];
    const tempArray = arr.slice();
    while (tempArray.length > 0) {
      let randomIndex = random(0, tempArray.length);
      shuffleArray.push(tempArray[randomIndex]);
      tempArray.splice(randomIndex, 1);
    }
    let sum = 0;
    for (const key in shuffleArray) {
      let filteredArray = shuffleArray
        .slice(key)
        .filter((x) => x < shuffleArray[key] && x != 0);
      sum += filteredArray.length;
    }
    sum +=
      Math.floor(shuffleArray.indexOf(0) / Math.sqrt(shuffleArray.length)) + 1;
    unsolvable = sum % 2 !== 0;
  }
  let dimension = Math.sqrt(arr.length);
  let resultArray = [];
  for (let i = 0; i < dimension; i++) {
    resultArray.push(shuffleArray.slice(i * dimension, (i + 1) * dimension));
  }

  return resultArray;
}

export { createArray, shuffleArray };
