function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
class PuzzleArray {
  constructor(dimension = 4) {
    this.dimension = parseInt(dimension);
    this._startArray = [];
    this._shuffleArray = [];
  }
  setStartArray(array) {
    this._startArray = array;
  }
  getStartArray() {
    return this._startArray;
  }
  setShuffleArray(array) {
    this._shuffleArray = array;
  }
  getShuffleArray() {
    return this._shuffleArray;
  }
getDimension () {
  return this.dimension;
}
  createArray() {
    let size = this.dimension * this.dimension;
    const arr = new Array(size).fill(0).map((x, index) => {
      return index;
    });
    this.setStartArray(arr.slice(1).concat([0]));
    return this.getStartArray();
  }
  shuffleArray() {
    let tempShuffleArray = [];
    let unsolvable = true;
    while (unsolvable) {
      tempShuffleArray = [];
      const tempArray = this._startArray.slice();
      while (tempArray.length > 0) {
        let randomIndex = random(0, tempArray.length);
        tempShuffleArray.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
      }
      let sum = 0;
      for (const key in tempShuffleArray) {
        let filteredArray = tempShuffleArray
          .slice(key)
          .filter((x) => x < tempShuffleArray[key] && x != 0);
        sum += filteredArray.length;
      }
      if (this.dimension % 2 === 0) {
        sum += Math.floor(tempShuffleArray.indexOf(0) / this.dimension) + 1;
      }
      unsolvable = sum % 2 !== 0;
    }
    let resultArray = [];
    for (let i = 0; i < this.dimension; i++) {
      resultArray.push(
        tempShuffleArray.slice(i * this.dimension, (i + 1) * this.dimension)
      );
    }

    this.setShuffleArray(resultArray);
    return this.getShuffleArray();
  }
  checkArray(arr) {
    let tempArr = arr.flat(1);
    return tempArr.every((x, index) => {
      return x === this._startArray[index];
    });
  }
}
export { PuzzleArray };
