/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gem-puzzle/src/assets/audio/index.js":
/*!**********************************************!*\
  !*** ./gem-puzzle/src/assets/audio/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bone_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bone.wav */ \"./gem-puzzle/src/assets/audio/bone.wav\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_bone_wav__WEBPACK_IMPORTED_MODULE_0__);\r\n\n\n//# sourceURL=webpack://gem-puzzle/./gem-puzzle/src/assets/audio/index.js?");

/***/ }),

/***/ "./gem-puzzle/src/data/buttons.js":
/*!****************************************!*\
  !*** ./gem-puzzle/src/data/buttons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buttons = {\r\n  newGame: \"New game\",\r\n  saveGame: \"Save game\",\r\n  loadGame: \"Load game\",\r\n  soundMute: \"Sound off\",\r\n  recordTable: \"Records\",\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttons);\r\n\n\n//# sourceURL=webpack://gem-puzzle/./gem-puzzle/src/data/buttons.js?");

/***/ }),

/***/ "./gem-puzzle/src/data/tableHeaderRecords.js":
/*!***************************************************!*\
  !*** ./gem-puzzle/src/data/tableHeaderRecords.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tableHeaderRecords = {\r\n  data: \"Data\",\r\n  size: \"Size\",\r\n  time: \"Time\",\r\n  movie: \"Movie\",\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableHeaderRecords);\r\n\n\n//# sourceURL=webpack://gem-puzzle/./gem-puzzle/src/data/tableHeaderRecords.js?");

/***/ }),

/***/ "./gem-puzzle/src/index.js":
/*!*********************************!*\
  !*** ./gem-puzzle/src/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./gem-puzzle/src/style/style.css\");\n/* harmony import */ var _js_create_structure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/_create-structure */ \"./gem-puzzle/src/js/_create-structure.js\");\n\r\n\r\n(0,_js_create_structure__WEBPACK_IMPORTED_MODULE_1__.appendStructure)();\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./gem-puzzle/src/index.js?");

/***/ }),

/***/ "./gem-puzzle/src/js/_create-structure.js":
/*!************************************************!*\
  !*** ./gem-puzzle/src/js/_create-structure.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendStructure\": () => (/* binding */ appendStructure)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/buttons */ \"./gem-puzzle/src/data/buttons.js\");\n/* harmony import */ var _assets_audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/audio */ \"./gem-puzzle/src/assets/audio/index.js\");\n/* harmony import */ var _randomize_puzzle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_randomize-puzzle */ \"./gem-puzzle/src/js/_randomize-puzzle.js\");\n/* harmony import */ var _data_tableHeaderRecords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/tableHeaderRecords */ \"./gem-puzzle/src/data/tableHeaderRecords.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet puzzle = [];\r\nlet check;\r\nlet widthArea;\r\nlet widthCell;\r\nlet count = 0;\r\nlet timer = false;\r\nlet timerID;\r\nlet second = 0;\r\nlet minute = 0;\r\nlet sound = true;\r\n\r\nconst onHandler = function (event) {\r\n  let id = event.target.getAttribute(\"id\");\r\n  if (id === \"newGame\") newGame();\r\n  if (id === \"saveGame\") saveGame();\r\n  if (id === \"loadGame\") loadGame();\r\n  if (id === \"soundMute\") soundMute();\r\n  if (id === \"recordTable\") recordTable();\r\n};\r\n\r\nfunction newGame() {\r\n  const frameSize = document.getElementsByName(\"size\");\r\n  for (let elem of frameSize) {\r\n    if (elem.checked) {\r\n      check = new _randomize_puzzle__WEBPACK_IMPORTED_MODULE_3__.PuzzleArray(elem.value);\r\n      check.createArray();\r\n      puzzle = check.shuffleArray();\r\n      let areaSize = document.getElementById(\"area-size\");\r\n      areaSize.textContent = `${elem.value}x${elem.value}`;\r\n      drawField();\r\n      count = 0;\r\n      second = 0;\r\n      minute = 0;\r\n      clearTimeout(timerID);\r\n      timer = true;\r\n      showCount();\r\n      showTimer();\r\n    }\r\n  }\r\n}\r\n\r\nfunction saveGame() {\r\n  if (puzzle !== []) {\r\n    localStorage.setItem(\"puzzle\", JSON.stringify(puzzle));\r\n    localStorage.setItem(\"check\", JSON.stringify(check));\r\n    localStorage.setItem(\"minute\", minute.toString());\r\n    localStorage.setItem(\"second\", second.toString());\r\n    localStorage.setItem(\"count\", count.toString());\r\n  }\r\n}\r\nfunction loadGame() {\r\n  const tempPuzzle = JSON.parse(localStorage.getItem(\"puzzle\"));\r\n  if (tempPuzzle) {\r\n    puzzle = tempPuzzle;\r\n\r\n    let tempCheck = JSON.parse(localStorage.getItem(\"check\"));\r\n    check = new _randomize_puzzle__WEBPACK_IMPORTED_MODULE_3__.PuzzleArray(tempCheck.dimension);\r\n    check.createArray();\r\n    minute = parseInt(localStorage.getItem(\"minute\"));\r\n    second = parseInt(localStorage.getItem(\"second\"));\r\n    count = parseInt(localStorage.getItem(\"count\"));\r\n    let areaSize = document.getElementById(\"area-size\");\r\n    areaSize.textContent = `${check.dimension}x${check.dimension}`;\r\n    drawField();\r\n    clearTimeout(timerID);\r\n    timer = true;\r\n    showTimer();\r\n    showCount();\r\n  }\r\n}\r\nfunction soundMute() {\r\n  const btnSound = document.getElementById(\"soundMute\");\r\n  sound = !sound;\r\n  localStorage.setItem(\"sound\", sound);\r\n  if (sound) {\r\n    btnSound.textContent = \"Sound off\";\r\n  } else {\r\n    btnSound.textContent = \"Sound on\";\r\n  }\r\n}\r\n\r\nfunction recordTable() {\r\n  let records = [];\r\n  timer = false;\r\n  const fragment = document.createDocumentFragment();\r\n  const area = document.createElement(\"div\");\r\n  area.setAttribute(\"id\", \"tableRecords\");\r\n  area.addEventListener(\"click\", closeRecord);\r\n  area.classList.add(\r\n    \"fixed\",\r\n    \"top-0\",\r\n    \"left-0\",\r\n    \"h-screen\",\r\n    \"w-screen\",\r\n    \"bg-black\",\r\n    \"bg-opacity-70\"\r\n  );\r\n  fragment.appendChild(area);\r\n  const tableArea = document.createElement(\"div\");\r\n  tableArea.classList.add(\r\n    \"mx-auto\",\r\n    \"sm:w-3/4\",\r\n    \"mt-8\",\r\n    \"text-slate-900\",\r\n    \"bg-gray-200\",\r\n    \"flex\",\r\n    \"justify-center\",\r\n    \"rounded-2xl\",\r\n    \"opacity-100\",\r\n    \"relative\"\r\n  );\r\n  area.appendChild(tableArea);\r\n  const buttonClose = document.createElement(\"button\");\r\n  buttonClose.classList.add(\r\n    \"absolute\",\r\n    \"top-2.5\",\r\n    \"right-6\",\r\n    \"font-bold\",\r\n    \"hover:text-green-900\"\r\n  );\r\n  buttonClose.setAttribute(\"id\", \"btn-close\");\r\n  buttonClose.addEventListener(\"click\", closeRecord);\r\n  buttonClose.textContent = \"X\";\r\n  tableArea.appendChild(buttonClose);\r\n  const table = document.createElement(\"table\");\r\n  table.createCaption();\r\n  table.caption.textContent = \"Record\";\r\n  table.caption.classList.add(\r\n    \"text-2xl\",\r\n    \"bg-clip-text\",\r\n    \"font-extrabold\",\r\n    \"text-green-500\",\r\n    \"animate-pulse\",\r\n    \"transition-colors\",\r\n    \"duration-500\"\r\n  );\r\n  table.classList.add(\r\n    \"w-9/12\",\r\n    \"text-center\",\r\n    \"my-7\",\r\n    \"border-collapse\",\r\n    \"border\",\r\n    \"border-slate-700\"\r\n  );\r\n  table.createTHead();\r\n  let tr = document.createElement(\"tr\");\r\n  for (const head in _data_tableHeaderRecords__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\r\n    let th = document.createElement(\"th\");\r\n    th.textContent = _data_tableHeaderRecords__WEBPACK_IMPORTED_MODULE_4__[\"default\"][head];\r\n    tr.appendChild(th);\r\n  }\r\n  table.tHead.appendChild(tr);\r\n  const tBody = table.createTBody();\r\n  let rec = localStorage.getItem(\"records\");\r\n  records = rec ? JSON.parse(rec) : [];\r\n  let tableData = records\r\n    .reverse()\r\n    .map((x) => {\r\n      return `<tr>\r\n          <td>${x.date}</td>\r\n          <td>${x.size}</td>\r\n          <td>${x.time}</td>\r\n          <td>${x.movie}</td>\r\n        </tr>`;\r\n    })\r\n    .join(\"\");\r\n  tBody.innerHTML = tableData;\r\n  tableArea.appendChild(table);\r\n  document.body.appendChild(fragment);\r\n}\r\nfunction closeRecord(event) {\r\n  let id = event.target.getAttribute(\"id\");\r\n  if (id === \"tableRecords\" || id === \"btn-close\") {\r\n    if (puzzle.length != 0 && !check.checkArray(puzzle)) {\r\n      clearTimeout(timerID);\r\n      timer = true;\r\n      showTimer();\r\n    }\r\n    const tableRecords = document.getElementById(\"tableRecords\");\r\n    if (tableRecords) tableRecords.remove();\r\n  }\r\n}\r\nfunction showTimer() {\r\n  if (timer) {\r\n    const tagTimer = document.getElementById(\"timer\");\r\n    ++second;\r\n    if (second === 60) {\r\n      second = 0;\r\n      ++minute;\r\n      minute = minute === 60 ? 0 : minute;\r\n    }\r\n    tagTimer.textContent = `Time: ${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.padStart)(\r\n      String(minute),\r\n      2,\r\n      \"0\"\r\n    )}:${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.padStart)(String(second), 2, \"0\")}`;\r\n    timerID = setTimeout(showTimer, 1000);\r\n  }\r\n}\r\n\r\nfunction drawField() {\r\n  const canvas = document.querySelector(\"canvas\");\r\n  widthArea = parseInt(canvas.getAttribute(\"width\"));\r\n  widthCell = Math.ceil(widthArea / puzzle.length);\r\n  const context = canvas.getContext(\"2d\");\r\n  context.clearRect(0, 0, widthArea, widthArea);\r\n  for (let i = 0; i < puzzle.length; i++) {\r\n    for (let j = 0; j < puzzle[i].length; j++) {\r\n      if (puzzle[j][i] > 0) {\r\n        context.fillStyle = \"teal\";\r\n        context.strokeStyle = \"black\";\r\n        context.fillRect(\r\n          widthCell * i + 2,\r\n          widthCell * j,\r\n          widthCell - 3,\r\n          widthCell - 3\r\n        );\r\n        context.strokeRect(\r\n          widthCell * i + 2,\r\n          widthCell * j,\r\n          widthCell - 3,\r\n          widthCell - 3\r\n        );\r\n        let fontSize = `${Math.ceil(widthCell / 3)}px sans-serif`;\r\n        context.font = fontSize;\r\n        context.textAlign = \"center\";\r\n        context.fillStyle = \"black\";\r\n        context.fillText(\r\n          puzzle[j][i],\r\n          widthCell * i + Math.ceil(widthCell / 2),\r\n          widthCell * j + 2 * Math.ceil(widthCell / 3) - 4\r\n        );\r\n      }\r\n    }\r\n  }\r\n  if (!check.checkArray(puzzle)) {\r\n    canvas.classList.add(\"cursor-move\");\r\n    canvas.addEventListener(\"click\", moveCell);\r\n  }\r\n}\r\nfunction moveCell(event) {\r\n  const canvas = document.querySelector(\"canvas\");\r\n  let i = Math.ceil(event.offsetX / widthCell) - 1;\r\n  let j = Math.ceil(event.offsetY / widthCell) - 1;\r\n  //move cell left\r\n  if (i - 1 > -1 && puzzle[j][i - 1] == 0) {\r\n    drawMove(\"left\", j, i);\r\n    let temp = puzzle[j][i];\r\n    puzzle[j][i] = puzzle[j][i - 1];\r\n    puzzle[j][i - 1] = temp;\r\n    count++;\r\n  }\r\n  //move cell right\r\n  if (i + 1 < puzzle.length && puzzle[j][i + 1] === 0) {\r\n    drawMove(\"right\", j, i);\r\n    let temp = puzzle[j][i];\r\n    puzzle[j][i] = puzzle[j][i + 1];\r\n    puzzle[j][i + 1] = temp;\r\n    count++;\r\n  }\r\n  // move cell up\r\n  if (j - 1 > -1 && puzzle[j - 1][i] == 0) {\r\n    drawMove(\"up\", j, i);\r\n    let temp = puzzle[j][i];\r\n    puzzle[j][i] = puzzle[j - 1][i];\r\n    puzzle[j - 1][i] = temp;\r\n    count++;\r\n  }\r\n  //move cell down\r\n  if (j + 1 < puzzle.length && puzzle[j + 1][i] === 0) {\r\n    drawMove(\"down\", j, i);\r\n    let temp = puzzle[j][i];\r\n    puzzle[j][i] = puzzle[j + 1][i];\r\n    puzzle[j + 1][i] = temp;\r\n    ++count;\r\n  }\r\n  showCount();\r\n  //drawField();\r\n\r\n  timer = !check.checkArray(puzzle);\r\n  if (!timer) {\r\n    let records = [];\r\n    canvas.removeEventListener(\"click\", moveCell);\r\n    canvas.classList.remove(\"cursor-move\");\r\n    let rec = localStorage.getItem(\"records\");\r\n    records = rec ? JSON.parse(rec) : [];\r\n    let time = `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.padStart)(String(minute), 2, \"0\")}:${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.padStart)(\r\n      String(second),\r\n      2,\r\n      \"0\"\r\n    )}`;\r\n    let record = {\r\n      date: new Date().toLocaleDateString(\"ru-RU\", {\r\n        year: \"numeric\",\r\n        month: \"long\",\r\n        day: \"numeric\",\r\n        hour: \"2-digit\",\r\n        minute: \"2-digit\",\r\n      }),\r\n      size: `${check.dimension}x${check.dimension}`,\r\n      time: time,\r\n      movie: count,\r\n    };\r\n    records.push(record);\r\n    localStorage.setItem(\"records\", JSON.stringify(records.slice(-10)));\r\n    //showWin(time, count);\r\n    setTimeout(function () {\r\n      alert(`Hooray! You solved the puzzle in ${time} and ${count} moves!`);\r\n    }, 500);\r\n  }\r\n  // } else {\r\n  //   canvas.classList.add(\"cursor-move\");\r\n  //   canvas.addEventListener(\"click\", moveCell);\r\n  // }\r\n}\r\nfunction showWin(time, count) {\r\n  const fragment = document.createDocumentFragment();\r\n  const div = document.createElement(div);\r\n}\r\n\r\nfunction drawMove(message, j, i) {\r\n  const canvas = document.querySelector(\"canvas\");\r\n  const context = canvas.getContext(\"2d\");\r\n  const bone = new Audio(_assets_audio__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n  if (sound) {\r\n    bone.play();\r\n  }\r\n  let num = puzzle[j][i];\r\n  let animateId;\r\n  if (message === \"left\") {\r\n    let x = (i - 1) * widthCell;\r\n    let y = j * widthCell;\r\n    let width = 2 * widthCell;\r\n    let height = widthCell;\r\n    let speed = -Math.floor(widthCell / 10);\r\n    let startX = i * widthCell;\r\n    let startY = j * widthCell;\r\n    function updateLeft() {\r\n      startX += speed;\r\n      if (startX < x) {\r\n        stopAnimated();\r\n      } else {\r\n        moveRect(x, y - 1, width, height, startX, startY);\r\n        animateId = window.requestAnimationFrame(updateLeft);\r\n      }\r\n    }\r\n    updateLeft();\r\n  }\r\n  if (message === \"right\") {\r\n    let x = (i + 1) * widthCell;\r\n    let y = j * widthCell;\r\n    let width = 2 * widthCell;\r\n    let height = widthCell;\r\n    let speed = Math.floor(widthCell / 10);\r\n    let startX = i * widthCell;\r\n    let clearX = startX;\r\n    let startY = j * widthCell;\r\n    function updateRight() {\r\n      startX += speed;\r\n      if (startX > x) {\r\n        stopAnimated();\r\n      } else {\r\n        moveRect(clearX, startY - 1, width, height, startX, startY);\r\n        animateId = window.requestAnimationFrame(updateRight);\r\n      }\r\n    }\r\n    updateRight();\r\n  }\r\n  if (message === \"up\") {\r\n    let x = i * widthCell;\r\n    let y = (j - 1) * widthCell;\r\n    let width = widthCell;\r\n    let height = 2 * widthCell;\r\n\r\n    let speed = -Math.floor(widthCell / 10);\r\n    let startX = i * widthCell;\r\n    let startY = j * widthCell;\r\n\r\n    function updateUp() {\r\n      startY += speed;\r\n      if (startY < y) {\r\n        stopAnimated();\r\n      } else {\r\n        moveRect(x, y - 1, width, height, startX + 2, startY);\r\n        animateId = window.requestAnimationFrame(updateUp);\r\n      }\r\n    }\r\n    updateUp();\r\n  }\r\n  if (message === \"down\") {\r\n    let x = i * widthCell;\r\n    let y = (j + 1) * widthCell;\r\n    let width = widthCell;\r\n    let height = 2 * widthCell;\r\n    let speed = Math.floor(widthCell / 10);\r\n    let startX = i * widthCell;\r\n    let startY = j * widthCell;\r\n    let clearY = startY;\r\n    function updateDown() {\r\n      startY += speed;\r\n      if (startY > y) {\r\n        stopAnimated();\r\n      } else {\r\n        moveRect(x, clearY - 1, width, height, startX + 2, startY);\r\n        animateId = window.requestAnimationFrame(updateDown);\r\n      }\r\n    }\r\n    updateDown();\r\n  }\r\n\r\n  function stopAnimated() {\r\n    drawField();\r\n    window.cancelAnimationFrame(animateId);\r\n  }\r\n  function moveRect(x, y, width, height, startX, startY) {\r\n    context.clearRect(x, y, width, height);\r\n    context.fillStyle = \"teal\";\r\n    context.strokeStyle = \"black\";\r\n    context.fillRect(startX, startY, widthCell - 3, widthCell - 3);\r\n    context.strokeRect(startX, startY, widthCell - 3, widthCell - 3);\r\n    let fontSize = `${Math.ceil(widthCell / 3)}px sans-serif`;\r\n    context.font = fontSize;\r\n    context.textAlign = \"center\";\r\n    context.fillStyle = \"black\";\r\n    context.fillText(\r\n      num,\r\n      startX + Math.ceil(widthCell / 2) - 2,\r\n      startY + 2 * Math.ceil(widthCell / 3) - 4\r\n    );\r\n  }\r\n}\r\n\r\nfunction showCount() {\r\n  const tagCount = document.getElementById(\"movie\");\r\n  tagCount.textContent = `Movie: ${count}`;\r\n}\r\n\r\nconst settingBody = () => {\r\n  document.body.classList.add(\r\n    \"h-screen\",\r\n    \"w-full\",\r\n    \"bg-gradient-to-b\",\r\n    \"from-gray-700\",\r\n    \"to-gray-900\"\r\n  );\r\n};\r\nfunction createHeader() {\r\n  const fragment = document.createDocumentFragment();\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"mx-auto\", \"text-center\");\r\n  const logo = document.createElement(\"h1\");\r\n  logo.textContent = \"Gem puzzle\";\r\n  logo.classList.add(\r\n    \"bg-gradient-to-r\",\r\n    \"from-green-400\",\r\n    \"to-blue-500\",\r\n    \"text-transparent\",\r\n    \"text-2xl\",\r\n    \"bg-clip-text\",\r\n    \"font-extrabold\"\r\n  );\r\n  const nav = document.createElement(\"nav\");\r\n  nav.classList.add(\"m-1.5\");\r\n  for (const key in _data_buttons__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n    if (Object.hasOwn(_data_buttons__WEBPACK_IMPORTED_MODULE_1__[\"default\"], key)) {\r\n      const button = document.createElement(\"button\");\r\n      button.setAttribute(\"id\", key);\r\n      button.textContent = _data_buttons__WEBPACK_IMPORTED_MODULE_1__[\"default\"][key];\r\n      if (key === \"soundMute\") {\r\n        let tempSound = localStorage.getItem(\"sound\");\r\n        sound = tempSound === null ? true : JSON.parse(tempSound);\r\n        if (sound) {\r\n          button.textContent = \"Sound off\";\r\n        } else {\r\n          button.textContent = \"Sound on\";\r\n        }\r\n      }\r\n      button.classList.add(\r\n        \"my-1\",\r\n        \"w-30\",\r\n        \"rounded-md\",\r\n        \"border\",\r\n        \"bg-green-600\",\r\n        \"px-3\",\r\n        \"mx-3\",\r\n        \"font-semibold\",\r\n        \"text-slate-200\",\r\n        \"hover:bg-green-900\",\r\n        \"hover:text-slate-100\"\r\n      );\r\n      button.onclick = onHandler;\r\n      nav.appendChild(button);\r\n    }\r\n  }\r\n  const wrapper = document.createElement(\"div\");\r\n  wrapper.classList.add(\"w-full\", \"justify-center\", \"items-start\");\r\n  header.appendChild(wrapper);\r\n  wrapper.appendChild(logo);\r\n  wrapper.appendChild(nav);\r\n  fragment.appendChild(header);\r\n  document.body.appendChild(fragment);\r\n}\r\n\r\nfunction createMain() {\r\n  const fragment = document.createDocumentFragment();\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"mx-auto\", \"max-w-fit\");\r\n  const div = document.createElement(\"div\");\r\n  div.classList.add(\"my-3\", \"flex\", \"justify-center\", \"gap-10\");\r\n  const paragraph1 = document.createElement(\"p\");\r\n  paragraph1.classList.add(\"w-32\", \"sm:w-40\", \"font-bold\", \"text-slate-300\");\r\n  paragraph1.setAttribute(\"id\", \"movie\");\r\n  paragraph1.textContent = \"Movie: 0\";\r\n  div.appendChild(paragraph1);\r\n  const paragraph2 = document.createElement(\"p\");\r\n  paragraph2.setAttribute(\"id\", \"timer\");\r\n  paragraph2.classList.add(\r\n    \"block\",\r\n    \"w-32\",\r\n    \"sm:w-40\",\r\n    \"font-bold\",\r\n    \"text-slate-300\",\r\n    \"text-end\"\r\n  );\r\n  paragraph2.textContent = \"Time: 00:00\";\r\n  div.appendChild(paragraph2);\r\n  const canvas = document.createElement(\"canvas\");\r\n  if (window.innerWidth <= 400) {\r\n    canvas.width = 300;\r\n    canvas.height = 300;\r\n  }\r\n  if (window.innerWidth > 400 && window.innerWidth <= 768) {\r\n    canvas.width = 400;\r\n    canvas.height = 400;\r\n  }\r\n  if (window.innerWidth >= 768) {\r\n    canvas.width = 600;\r\n    canvas.height = 600;\r\n  }\r\n  canvas.classList.add(\"border\", \"bg-slate-400\", \"rounded-md\");\r\n  main.appendChild(div);\r\n  main.appendChild(canvas);\r\n  fragment.appendChild(main);\r\n  document.body.appendChild(fragment);\r\n}\r\nfunction createFooter() {\r\n  const fragment = document.createDocumentFragment();\r\n  const footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"mx-auto\", \"max-w-max\");\r\n  fragment.appendChild(footer);\r\n  const textFrameSize = document.createElement(\"span\");\r\n  textFrameSize.setAttribute(\"id\", \"area-size\");\r\n  textFrameSize.classList.add(\"font-bold\", \"text-slate-300\");\r\n  textFrameSize.textContent = \"4x4\";\r\n  const frameSize = document.createElement(\"div\");\r\n  frameSize.classList.add(\"text-center\", \"text-slate-300\", \"my-3\");\r\n  frameSize.textContent = \"Frame size: \";\r\n  frameSize.appendChild(textFrameSize);\r\n  footer.appendChild(frameSize);\r\n  const selectSize = document.createElement(\"div\");\r\n  selectSize.classList.add(\"flex\", \"text-slate-300\");\r\n  selectSize.textContent = \" Other size: \";\r\n  footer.appendChild(selectSize);\r\n  const ol = document.createElement(\"ol\");\r\n  ol.classList.add(\"flex\", \"justify-between\", \"gap-2\", \"px-1\");\r\n  selectSize.appendChild(ol);\r\n  for (let i = 3; i < 9; i++) {\r\n    const li = document.createElement(\"li\");\r\n    const input = document.createElement(\"input\");\r\n    input.classList.add(\"peer\", \"hidden\");\r\n    input.setAttribute(\"type\", \"radio\");\r\n    input.setAttribute(\"name\", \"size\");\r\n    input.setAttribute(\"id\", `size${i}`);\r\n    input.setAttribute(\"value\", i);\r\n    if (i == 4) input.setAttribute(\"checked\", \"true\");\r\n    const label = document.createElement(\"label\");\r\n    label.classList.add(\r\n      \"text-slate-300\",\r\n      \"font-bold\",\r\n      \"hover:text-slate-500\",\r\n      \"peer-checked:text-green-500\",\r\n\r\n      \"peer-checked:animate-pulse\",\r\n      \"hover:transition-colors\",\r\n      \"duration-500\",\r\n      \"hover:text-slate-100\"\r\n    );\r\n    label.setAttribute(\"for\", `size${i}`);\r\n    label.textContent = `${i}x${i}`;\r\n    li.appendChild(input);\r\n    li.appendChild(label);\r\n    ol.appendChild(li);\r\n  }\r\n\r\n  document.body.appendChild(fragment);\r\n}\r\n//desktop(1280px <= width), tablet(768px <= width < 1280px) and mobile(320px <= width < 768px\r\nfunction resizeCanvas(event) {\r\n  const canvas = document.querySelector(\"canvas\");\r\n  if (window.innerWidth < 410) {\r\n    canvas.width = 300;\r\n    canvas.height = 300;\r\n  }\r\n  if (window.innerWidth >= 410 && window.innerWidth < 768) {\r\n    canvas.width = 400;\r\n    canvas.height = 400;\r\n  }\r\n  if (window.innerWidth >= 768) {\r\n    canvas.width = 600;\r\n    canvas.height = 600;\r\n  }\r\n  if (puzzle.length != 0) drawField();\r\n}\r\nfunction appendStructure() {\r\n  window.addEventListener(\"resize\", resizeCanvas);\r\n  settingBody();\r\n  createHeader();\r\n  createMain();\r\n  createFooter();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./gem-puzzle/src/js/_create-structure.js?");

/***/ }),

/***/ "./gem-puzzle/src/js/_randomize-puzzle.js":
/*!************************************************!*\
  !*** ./gem-puzzle/src/js/_randomize-puzzle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PuzzleArray\": () => (/* binding */ PuzzleArray)\n/* harmony export */ });\nfunction random(min, max) {\r\n  return Math.floor(Math.random() * (max - min) + min);\r\n}\r\nclass PuzzleArray {\r\n  constructor(dimension = 4) {\r\n    this.dimension = parseInt(dimension);\r\n    this._startArray = [];\r\n    this._shuffleArray = [];\r\n  }\r\n  setStartArray(array) {\r\n    this._startArray = array;\r\n  }\r\n  getStartArray() {\r\n    return this._startArray;\r\n  }\r\n  setShuffleArray(array) {\r\n    this._shuffleArray = array;\r\n  }\r\n  getShuffleArray() {\r\n    return this._shuffleArray;\r\n  }\r\ngetDimension () {\r\n  return this.dimension;\r\n}\r\n  createArray() {\r\n    let size = this.dimension * this.dimension;\r\n    const arr = new Array(size).fill(0).map((x, index) => {\r\n      return index;\r\n    });\r\n    this.setStartArray(arr.slice(1).concat([0]));\r\n    return this.getStartArray();\r\n  }\r\n  shuffleArray() {\r\n    let tempShuffleArray = [];\r\n    let unsolvable = true;\r\n    while (unsolvable) {\r\n      tempShuffleArray = [];\r\n      const tempArray = this._startArray.slice();\r\n      while (tempArray.length > 0) {\r\n        let randomIndex = random(0, tempArray.length);\r\n        tempShuffleArray.push(tempArray[randomIndex]);\r\n        tempArray.splice(randomIndex, 1);\r\n      }\r\n      let sum = 0;\r\n      for (const key in tempShuffleArray) {\r\n        let filteredArray = tempShuffleArray\r\n          .slice(key)\r\n          .filter((x) => x < tempShuffleArray[key] && x != 0);\r\n        sum += filteredArray.length;\r\n      }\r\n      if (this.dimension % 2 === 0) {\r\n        sum += Math.floor(tempShuffleArray.indexOf(0) / this.dimension) + 1;\r\n      }\r\n      unsolvable = sum % 2 !== 0;\r\n    }\r\n    let resultArray = [];\r\n    for (let i = 0; i < this.dimension; i++) {\r\n      resultArray.push(\r\n        tempShuffleArray.slice(i * this.dimension, (i + 1) * this.dimension)\r\n      );\r\n    }\r\n\r\n    this.setShuffleArray(resultArray);\r\n    return this.getShuffleArray();\r\n  }\r\n  checkArray(arr) {\r\n    let tempArr = arr.flat(1);\r\n    return tempArr.every((x, index) => {\r\n      return x === this._startArray[index];\r\n    });\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./gem-puzzle/src/js/_randomize-puzzle.js?");

/***/ }),

/***/ "./gem-puzzle/src/style/style.css":
/*!****************************************!*\
  !*** ./gem-puzzle/src/style/style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./gem-puzzle/src/style/style.css?");

/***/ }),

/***/ "./gem-puzzle/src/assets/audio/bone.wav":
/*!**********************************************!*\
  !*** ./gem-puzzle/src/assets/audio/bone.wav ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/bone.wav\";\n\n//# sourceURL=webpack://gem-puzzle/./gem-puzzle/src/assets/audio/bone.wav?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgem_puzzle"] = self["webpackChunkgem_puzzle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_require__("./gem-puzzle/src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;