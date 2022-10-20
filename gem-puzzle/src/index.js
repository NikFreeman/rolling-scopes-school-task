import "./style/style.css";
import { appendStructure } from "./js/_create-structure";
import { createArray, shuffleArray } from "./js/_randomize-puzzle";
appendStructure();
//for (let i = 3; i <= 8; i++) {
let i =4;
    console.log(createArray(i));
  console.log(shuffleArray(createArray(i)));
//}
