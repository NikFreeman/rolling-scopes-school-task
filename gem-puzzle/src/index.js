import "./style/style.css";
import { appendStructure } from "./js/_create-structure";
import { puzzleArray } from "./js/_randomize-puzzle";
appendStructure();
//for (let i = 3; i <= 8; i++) {
let i = 4;
let puzzle = new puzzleArray(i);
console.log(puzzle.createArray());
console.log(puzzle.shuffleArray());

//}
