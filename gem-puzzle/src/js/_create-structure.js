import { padStart } from "lodash";
import buttons from "../data/buttons";
import boneSound from "../assets/audio";
import { PuzzleArray } from "./_randomize-puzzle";
import tableHeaderRecords from "../data/tableHeaderRecords";

let puzzle = [];
let check;
let widthArea;
let widthCell;
let count = 0;
let timer = false;
let timerID;
let second = 0;
let minute = 0;
let sound = true;

const onHandler = function (event) {
  let id = event.target.getAttribute("id");
  if (id === "newGame") newGame();
  if (id === "saveGame") saveGame();
  if (id === "loadGame") loadGame();
  if (id === "soundMute") soundMute();
  if (id === "recordTable") recordTable();
};

function newGame() {
  const frameSize = document.getElementsByName("size");
  for (let elem of frameSize) {
    if (elem.checked) {
      check = new PuzzleArray(elem.value);
      check.createArray();
      puzzle = check.shuffleArray();
      let areaSize = document.getElementById("area-size");
      areaSize.textContent = `${elem.value}x${elem.value}`;
      drawField();
      count = 0;
      second = 0;
      minute = 0;
      clearTimeout(timerID);
      timer = true;
      showCount();
      showTimer();
    }
  }
}

function saveGame() {
  if (puzzle !== []) {
    localStorage.setItem("puzzle", JSON.stringify(puzzle));
    localStorage.setItem("check", JSON.stringify(check));
    localStorage.setItem("minute", minute.toString());
    localStorage.setItem("second", second.toString());
    localStorage.setItem("count", count.toString());
  }
}
function loadGame() {
  const tempPuzzle = JSON.parse(localStorage.getItem("puzzle"));
  if (tempPuzzle) {
    puzzle = tempPuzzle;

    let tempCheck = JSON.parse(localStorage.getItem("check"));
    check = new PuzzleArray(tempCheck.dimension);
    check.createArray();
    minute = parseInt(localStorage.getItem("minute"));
    second = parseInt(localStorage.getItem("second"));
    count = parseInt(localStorage.getItem("count"));
    let areaSize = document.getElementById("area-size");
    areaSize.textContent = `${check.dimension}x${check.dimension}`;
    drawField();
    clearTimeout(timerID);
    timer = true;
    showTimer();
    showCount();
  }
}
function soundMute() {
  const btnSound = document.getElementById("soundMute");
  sound = !sound;
  localStorage.setItem("sound", sound);
  if (sound) {
    btnSound.textContent = "Sound off";
  } else {
    btnSound.textContent = "Sound on";
  }
}

function recordTable() {
  let records = [];
  timer = false;
  const fragment = document.createDocumentFragment();
  const area = document.createElement("div");
  area.setAttribute("id", "tableRecords");
  area.addEventListener("click", closeRecord);
  area.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "h-screen",
    "w-screen",
    "bg-black",
    "bg-opacity-70"
  );
  fragment.appendChild(area);
  const tableArea = document.createElement("div");
  tableArea.classList.add(
    "mx-auto",
    "sm:w-3/4",
    "mt-8",
    "text-slate-900",
    "bg-gray-200",
    "flex",
    "justify-center",
    "rounded-2xl",
    "opacity-100",
    "relative"
  );
  area.appendChild(tableArea);
  const buttonClose = document.createElement("button");
  buttonClose.classList.add(
    "absolute",
    "top-2.5",
    "right-6",
    "font-bold",
    "hover:text-green-900"
  );
  buttonClose.setAttribute("id", "btn-close");
  buttonClose.addEventListener("click", closeRecord);
  buttonClose.textContent = "X";
  tableArea.appendChild(buttonClose);
  const table = document.createElement("table");
  table.createCaption();
  table.caption.textContent = "Record";
  table.caption.classList.add(
    "text-2xl",
    "bg-clip-text",
    "font-extrabold",
    "text-green-500",
    "animate-pulse",
    "transition-colors",
    "duration-500"
  );
  table.classList.add(
    "w-9/12",
    "text-center",
    "my-7",
    "border-collapse",
    "border",
    "border-slate-700"
  );
  table.createTHead();
  let tr = document.createElement("tr");
  for (const head in tableHeaderRecords) {
    let th = document.createElement("th");
    th.textContent = tableHeaderRecords[head];
    tr.appendChild(th);
  }
  table.tHead.appendChild(tr);
  const tBody = table.createTBody();
  let rec = localStorage.getItem("records");
  records = rec ? JSON.parse(rec) : [];
  let tableData = records
    .reverse()
    .map((x) => {
      return `<tr>
          <td>${x.date}</td>
          <td>${x.size}</td>
          <td>${x.time}</td>
          <td>${x.movie}</td>
        </tr>`;
    })
    .join("");
  tBody.innerHTML = tableData;
  tableArea.appendChild(table);
  document.body.appendChild(fragment);
}
function closeRecord(event) {
  let id = event.target.getAttribute("id");
  if (id === "tableRecords" || id === "btn-close") {
    if (puzzle.length != 0 && !check.checkArray(puzzle)) {
      clearTimeout(timerID);
      timer = true;
      showTimer();
    }
    const tableRecords = document.getElementById("tableRecords");
    if (tableRecords) tableRecords.remove();
  }
}
function showTimer() {
  if (timer) {
    const tagTimer = document.getElementById("timer");
    ++second;
    if (second === 60) {
      second = 0;
      ++minute;
      minute = minute === 60 ? 0 : minute;
    }
    tagTimer.textContent = `Time: ${padStart(
      String(minute),
      2,
      "0"
    )}:${padStart(String(second), 2, "0")}`;
    timerID = setTimeout(showTimer, 1000);
  }
}

function drawField() {
  const canvas = document.querySelector("canvas");
  widthArea = parseInt(canvas.getAttribute("width"));
  widthCell = Math.ceil(widthArea / puzzle.length);
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, widthArea, widthArea);
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (puzzle[j][i] > 0) {
        context.fillStyle = "teal";
        context.strokeStyle = "black";
        context.fillRect(
          widthCell * i + 2,
          widthCell * j,
          widthCell - 3,
          widthCell - 3
        );
        context.strokeRect(
          widthCell * i + 2,
          widthCell * j,
          widthCell - 3,
          widthCell - 3
        );
        let fontSize = `${Math.ceil(widthCell / 3)}px sans-serif`;
        context.font = fontSize;
        context.textAlign = "center";
        context.fillStyle = "black";
        context.fillText(
          puzzle[j][i],
          widthCell * i + Math.ceil(widthCell / 2),
          widthCell * j + 2 * Math.ceil(widthCell / 3) - 4
        );
      }
    }
  }
  if (!check.checkArray(puzzle)) {
    canvas.classList.add("cursor-move");
    canvas.addEventListener("click", moveCell);
  }
}
function moveCell(event) {
  const canvas = document.querySelector("canvas");
  let i = Math.ceil(event.offsetX / widthCell) - 1;
  let j = Math.ceil(event.offsetY / widthCell) - 1;
  //move cell left
  if (i - 1 > -1 && puzzle[j][i - 1] == 0) {
    drawMove("left", j, i);
    let temp = puzzle[j][i];
    puzzle[j][i] = puzzle[j][i - 1];
    puzzle[j][i - 1] = temp;
    count++;
  }
  //move cell right
  if (i + 1 < puzzle.length && puzzle[j][i + 1] === 0) {
    drawMove("right", j, i);
    let temp = puzzle[j][i];
    puzzle[j][i] = puzzle[j][i + 1];
    puzzle[j][i + 1] = temp;
    count++;
  }
  // move cell up
  if (j - 1 > -1 && puzzle[j - 1][i] == 0) {
    drawMove("up", j, i);
    let temp = puzzle[j][i];
    puzzle[j][i] = puzzle[j - 1][i];
    puzzle[j - 1][i] = temp;
    count++;
  }
  //move cell down
  if (j + 1 < puzzle.length && puzzle[j + 1][i] === 0) {
    drawMove("down", j, i);
    let temp = puzzle[j][i];
    puzzle[j][i] = puzzle[j + 1][i];
    puzzle[j + 1][i] = temp;
    ++count;
  }
  showCount();
  //drawField();

  timer = !check.checkArray(puzzle);
  if (!timer) {
    let records = [];
    canvas.removeEventListener("click", moveCell);
    canvas.classList.remove("cursor-move");
    let rec = localStorage.getItem("records");
    records = rec ? JSON.parse(rec) : [];
    let time = `${padStart(String(minute), 2, "0")}:${padStart(
      String(second),
      2,
      "0"
    )}`;
    let record = {
      date: new Date().toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      size: `${check.dimension}x${check.dimension}`,
      time: time,
      movie: count,
    };
    records.push(record);
    localStorage.setItem("records", JSON.stringify(records.slice(-10)));
    //showWin(time, count);
    setTimeout(function () {
      alert(`Hooray! You solved the puzzle in ${time} and ${count} moves!`);
    }, 500);
  }
  // } else {
  //   canvas.classList.add("cursor-move");
  //   canvas.addEventListener("click", moveCell);
  // }
}
function showWin(time, count) {
  const fragment = document.createDocumentFragment();
  const div = document.createElement(div);
}

function drawMove(message, j, i) {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  const bone = new Audio(boneSound);
  if (sound) {
    bone.play();
  }
  let num = puzzle[j][i];
  let animateId;
  if (message === "left") {
    let x = (i - 1) * widthCell;
    let y = j * widthCell;
    let width = 2 * widthCell;
    let height = widthCell;
    let speed = -Math.floor(widthCell / 10);
    let startX = i * widthCell;
    let startY = j * widthCell;
    function updateLeft() {
      startX += speed;
      if (startX < x) {
        stopAnimated();
      } else {
        moveRect(x, y - 1, width, height, startX, startY);
        animateId = window.requestAnimationFrame(updateLeft);
      }
    }
    updateLeft();
  }
  if (message === "right") {
    let x = (i + 1) * widthCell;
    let y = j * widthCell;
    let width = 2 * widthCell;
    let height = widthCell;
    let speed = Math.floor(widthCell / 10);
    let startX = i * widthCell;
    let clearX = startX;
    let startY = j * widthCell;
    function updateRight() {
      startX += speed;
      if (startX > x) {
        stopAnimated();
      } else {
        moveRect(clearX, startY - 1, width, height, startX, startY);
        animateId = window.requestAnimationFrame(updateRight);
      }
    }
    updateRight();
  }
  if (message === "up") {
    let x = i * widthCell;
    let y = (j - 1) * widthCell;
    let width = widthCell;
    let height = 2 * widthCell;

    let speed = -Math.floor(widthCell / 10);
    let startX = i * widthCell;
    let startY = j * widthCell;

    function updateUp() {
      startY += speed;
      if (startY < y) {
        stopAnimated();
      } else {
        moveRect(x, y - 1, width, height, startX + 2, startY);
        animateId = window.requestAnimationFrame(updateUp);
      }
    }
    updateUp();
  }
  if (message === "down") {
    let x = i * widthCell;
    let y = (j + 1) * widthCell;
    let width = widthCell;
    let height = 2 * widthCell;
    let speed = Math.floor(widthCell / 10);
    let startX = i * widthCell;
    let startY = j * widthCell;
    let clearY = startY;
    function updateDown() {
      startY += speed;
      if (startY > y) {
        stopAnimated();
      } else {
        moveRect(x, clearY - 1, width, height, startX + 2, startY);
        animateId = window.requestAnimationFrame(updateDown);
      }
    }
    updateDown();
  }

  function stopAnimated() {
    drawField();
    window.cancelAnimationFrame(animateId);
  }
  function moveRect(x, y, width, height, startX, startY) {
    context.clearRect(x, y, width, height);
    context.fillStyle = "teal";
    context.strokeStyle = "black";
    context.fillRect(startX, startY, widthCell - 3, widthCell - 3);
    context.strokeRect(startX, startY, widthCell - 3, widthCell - 3);
    let fontSize = `${Math.ceil(widthCell / 3)}px sans-serif`;
    context.font = fontSize;
    context.textAlign = "center";
    context.fillStyle = "black";
    context.fillText(
      num,
      startX + Math.ceil(widthCell / 2) - 2,
      startY + 2 * Math.ceil(widthCell / 3) - 4
    );
  }
}

function showCount() {
  const tagCount = document.getElementById("movie");
  tagCount.textContent = `Movie: ${count}`;
}

const settingBody = () => {
  document.body.classList.add(
    "h-screen",
    "w-full",
    "bg-gradient-to-b",
    "from-gray-700",
    "to-gray-900"
  );
};
function createHeader() {
  const fragment = document.createDocumentFragment();
  const header = document.createElement("header");
  header.classList.add("mx-auto", "text-center");
  const logo = document.createElement("h1");
  logo.textContent = "Gem puzzle";
  logo.classList.add(
    "bg-gradient-to-r",
    "from-green-400",
    "to-blue-500",
    "text-transparent",
    "text-2xl",
    "bg-clip-text",
    "font-extrabold"
  );
  const nav = document.createElement("nav");
  nav.classList.add("m-1.5");
  for (const key in buttons) {
    if (Object.hasOwn(buttons, key)) {
      const button = document.createElement("button");
      button.setAttribute("id", key);
      button.textContent = buttons[key];
      if (key === "soundMute") {
        let tempSound = localStorage.getItem("sound");
        sound = tempSound === null ? true : JSON.parse(tempSound);
        if (sound) {
          button.textContent = "Sound off";
        } else {
          button.textContent = "Sound on";
        }
      }
      button.classList.add(
        "my-1",
        "w-30",
        "rounded-md",
        "border",
        "bg-green-600",
        "px-3",
        "mx-3",
        "font-semibold",
        "text-slate-200",
        "hover:bg-green-900",
        "hover:text-slate-100"
      );
      button.onclick = onHandler;
      nav.appendChild(button);
    }
  }
  const wrapper = document.createElement("div");
  wrapper.classList.add("w-full", "justify-center", "items-start");
  header.appendChild(wrapper);
  wrapper.appendChild(logo);
  wrapper.appendChild(nav);
  fragment.appendChild(header);
  document.body.appendChild(fragment);
}

function createMain() {
  const fragment = document.createDocumentFragment();
  const main = document.createElement("main");
  main.classList.add("mx-auto", "max-w-fit");
  const div = document.createElement("div");
  div.classList.add("my-3", "flex", "justify-center", "gap-10");
  const paragraph1 = document.createElement("p");
  paragraph1.classList.add("w-32", "sm:w-40", "font-bold", "text-slate-300");
  paragraph1.setAttribute("id", "movie");
  paragraph1.textContent = "Movie: 0";
  div.appendChild(paragraph1);
  const paragraph2 = document.createElement("p");
  paragraph2.setAttribute("id", "timer");
  paragraph2.classList.add(
    "block",
    "w-32",
    "sm:w-40",
    "font-bold",
    "text-slate-300",
    "text-end"
  );
  paragraph2.textContent = "Time: 00:00";
  div.appendChild(paragraph2);
  const canvas = document.createElement("canvas");
  if (window.innerWidth <= 400) {
    canvas.width = 300;
    canvas.height = 300;
  }
  if (window.innerWidth > 400 && window.innerWidth <= 768) {
    canvas.width = 400;
    canvas.height = 400;
  }
  if (window.innerWidth >= 768) {
    canvas.width = 600;
    canvas.height = 600;
  }
  canvas.classList.add("border", "bg-slate-400", "rounded-md");
  main.appendChild(div);
  main.appendChild(canvas);
  fragment.appendChild(main);
  document.body.appendChild(fragment);
}
function createFooter() {
  const fragment = document.createDocumentFragment();
  const footer = document.createElement("footer");
  footer.classList.add("mx-auto", "max-w-max");
  fragment.appendChild(footer);
  const textFrameSize = document.createElement("span");
  textFrameSize.setAttribute("id", "area-size");
  textFrameSize.classList.add("font-bold", "text-slate-300");
  textFrameSize.textContent = "4x4";
  const frameSize = document.createElement("div");
  frameSize.classList.add("text-center", "text-slate-300", "my-3");
  frameSize.textContent = "Frame size: ";
  frameSize.appendChild(textFrameSize);
  footer.appendChild(frameSize);
  const selectSize = document.createElement("div");
  selectSize.classList.add("flex", "text-slate-300");
  selectSize.textContent = " Other size: ";
  footer.appendChild(selectSize);
  const ol = document.createElement("ol");
  ol.classList.add("flex", "justify-between", "gap-2", "px-1");
  selectSize.appendChild(ol);
  for (let i = 3; i < 9; i++) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.classList.add("peer", "hidden");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "size");
    input.setAttribute("id", `size${i}`);
    input.setAttribute("value", i);
    if (i == 4) input.setAttribute("checked", "true");
    const label = document.createElement("label");
    label.classList.add(
      "text-slate-300",
      "font-bold",
      "hover:text-slate-500",
      "peer-checked:text-green-500",

      "peer-checked:animate-pulse",
      "hover:transition-colors",
      "duration-500",
      "hover:text-slate-100"
    );
    label.setAttribute("for", `size${i}`);
    label.textContent = `${i}x${i}`;
    li.appendChild(input);
    li.appendChild(label);
    ol.appendChild(li);
  }

  document.body.appendChild(fragment);
}
//desktop(1280px <= width), tablet(768px <= width < 1280px) and mobile(320px <= width < 768px
function resizeCanvas(event) {
  const canvas = document.querySelector("canvas");
  if (window.innerWidth < 410) {
    canvas.width = 300;
    canvas.height = 300;
  }
  if (window.innerWidth >= 410 && window.innerWidth < 768) {
    canvas.width = 400;
    canvas.height = 400;
  }
  if (window.innerWidth >= 768) {
    canvas.width = 600;
    canvas.height = 600;
  }
  if (puzzle.length != 0) drawField();
}
function appendStructure() {
  window.addEventListener("resize", resizeCanvas);
  settingBody();
  createHeader();
  createMain();
  createFooter();
}
export { appendStructure };
