/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main/NoteWindow/createNoteWindow.js":
/*!*************************************************!*\
  !*** ./app/main/NoteWindow/createNoteWindow.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const electron = __webpack_require__(/*! electron */ \"electron\");\n\nconst BrowserWindow = electron.BrowserWindow;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst appPath = path.join(__dirname, '..', '..');\n/**\r\n * noteWindow를 만든다\r\n * @returns noteWindow\r\n */\n\nexports.createNoteWindow = () => {\n  let noteWindow = new BrowserWindow({\n    width: 400,\n    height: 500,\n\n    /* x: pos\r\n       y: pos\r\n      => Todo: Set Position\r\n    */\n    webPreferences: {\n      preload: path.join(appPath, 'renderer', 'preloads', 'noteWindow.js'),\n      nodeIntegration: true,\n      contextIsolation: true,\n      enableRemoteModule: false\n    }\n  });\n  noteWindow.loadURL('file://' + path.join(appPath, 'windows', 'noteWindow.html'));\n  noteWindow.on('closed', () => {\n    noteWindow = null;\n  });\n  return noteWindow;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi9Ob3RlV2luZG93L2NyZWF0ZU5vdGVXaW5kb3cuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlja3ktbm90ZS1pbXByb3ZlZC8uL2FwcC9tYWluL05vdGVXaW5kb3cvY3JlYXRlTm90ZVdpbmRvdy5qcz9kMDA0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxyXG5jb25zdCBCcm93c2VyV2luZG93ID0gZWxlY3Ryb24uQnJvd3NlcldpbmRvd1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcbmNvbnN0IGFwcFBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnLi4nKVxyXG5cclxuLyoqXHJcbiAqIG5vdGVXaW5kb3frpbwg66eM65Og64ukXHJcbiAqIEByZXR1cm5zIG5vdGVXaW5kb3dcclxuICovXHJcbmV4cG9ydHMuY3JlYXRlTm90ZVdpbmRvdyA9ICgpID0+IHtcclxuICBsZXQgbm90ZVdpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlnaHQ6IDUwMCxcclxuICAgIC8qIHg6IHBvc1xyXG4gICAgICAgeTogcG9zXHJcbiAgICAgID0+IFRvZG86IFNldCBQb3NpdGlvblxyXG4gICAgKi9cclxuICAgIHdlYlByZWZlcmVuY2VzOiB7XHJcbiAgICAgIHByZWxvYWQ6IHBhdGguam9pbihhcHBQYXRoLCAncmVuZGVyZXInLCAncHJlbG9hZHMnLCAnbm90ZVdpbmRvdy5qcycpLFxyXG4gICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbiAgICAgIGNvbnRleHRJc29sYXRpb246IHRydWUsXHJcbiAgICAgIGVuYWJsZVJlbW90ZU1vZHVsZTogZmFsc2VcclxuICAgIH1cclxuICB9KVxyXG4gIG5vdGVXaW5kb3cubG9hZFVSTCgnZmlsZTovLycgKyBwYXRoLmpvaW4oYXBwUGF0aCwgJ3dpbmRvd3MnLCAnbm90ZVdpbmRvdy5odG1sJykpXHJcbiAgbm90ZVdpbmRvdy5vbignY2xvc2VkJywgKCkgPT4ge1xyXG4gICAgbm90ZVdpbmRvdyA9IG51bGxcclxuICB9KVxyXG5cclxuICByZXR1cm4gbm90ZVdpbmRvd1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/main/NoteWindow/createNoteWindow.js\n");

/***/ }),

/***/ "./app/main/ipcMain.js":
/*!*****************************!*\
  !*** ./app/main/ipcMain.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  ipcMain\n} = __webpack_require__(/*! electron */ \"electron\");\n\nconst {\n  nanoid\n} = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.cjs\");\n\nconst {\n  createNoteWindow\n} = __webpack_require__(/*! ./NoteWindow/createNoteWindow */ \"./app/main/NoteWindow/createNoteWindow.js\");\n\nconst {\n  mainWindow\n} = __webpack_require__(/*! ../../main */ \"./main.js\");\n\nipcMain.handle('nanoid-ipc', async event => {\n  const id = nanoid();\n  console.log(id);\n  return id;\n});\nlet noteIdCache = '';\nlet noteWindow;\nipcMain.on('getNoteId', event => {\n  event.returnValue = noteIdCache;\n});\nipcMain.on('NoteFrameClicked', (event, id) => {\n  noteIdCache = id;\n  noteWindow = createNoteWindow(); // attach closing event\n  // It will save contents of noteWindow\n\n  noteWindow.on('close', () => {\n    noteWindow.webContents.send('noteWindow-close');\n  });\n});\nipcMain.on('noteWindow-close-reply', (e, msg) => {\n  mainWindow.webContents.send('get-text', msg);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi9pcGNNYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RpY2t5LW5vdGUtaW1wcm92ZWQvLi9hcHAvbWFpbi9pcGNNYWluLmpzPzZhMzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpcGNNYWluIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpXHJcbmNvbnN0IHsgbmFub2lkIH0gPSByZXF1aXJlKCduYW5vaWQnKVxyXG5jb25zdCB7IGNyZWF0ZU5vdGVXaW5kb3cgfSA9IHJlcXVpcmUoJy4vTm90ZVdpbmRvdy9jcmVhdGVOb3RlV2luZG93JylcclxuY29uc3QgeyBtYWluV2luZG93IH0gPSByZXF1aXJlKCcuLi8uLi9tYWluJylcclxuXHJcbmlwY01haW4uaGFuZGxlKCduYW5vaWQtaXBjJywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBuYW5vaWQoKVxyXG4gIGNvbnNvbGUubG9nKGlkKVxyXG4gIHJldHVybiBpZFxyXG59KVxyXG5cclxubGV0IG5vdGVJZENhY2hlID0gJydcclxubGV0IG5vdGVXaW5kb3dcclxuXHJcbmlwY01haW4ub24oJ2dldE5vdGVJZCcsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnJldHVyblZhbHVlID0gbm90ZUlkQ2FjaGVcclxufSlcclxuXHJcbmlwY01haW4ub24oJ05vdGVGcmFtZUNsaWNrZWQnLCAoZXZlbnQsIGlkKSA9PiB7XHJcbiAgbm90ZUlkQ2FjaGUgPSBpZFxyXG5cclxuICBub3RlV2luZG93ID0gY3JlYXRlTm90ZVdpbmRvdygpXHJcbiAgLy8gYXR0YWNoIGNsb3NpbmcgZXZlbnRcclxuICAvLyBJdCB3aWxsIHNhdmUgY29udGVudHMgb2Ygbm90ZVdpbmRvd1xyXG4gIG5vdGVXaW5kb3cub24oJ2Nsb3NlJywgKCkgPT4ge1xyXG4gICAgbm90ZVdpbmRvdy53ZWJDb250ZW50cy5zZW5kKCdub3RlV2luZG93LWNsb3NlJylcclxuICB9KVxyXG59KVxyXG5cclxuaXBjTWFpbi5vbignbm90ZVdpbmRvdy1jbG9zZS1yZXBseScsIChlLCBtc2cpID0+IHtcclxuICBtYWluV2luZG93LndlYkNvbnRlbnRzLnNlbmQoJ2dldC10ZXh0JywgbXNnKVxyXG59KVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/main/ipcMain.js\n");

/***/ }),

/***/ "./app/main/mainWindow.js":
/*!********************************!*\
  !*** ./app/main/mainWindow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const electron = __webpack_require__(/*! electron */ \"electron\");\n\nconst BrowserWindow = electron.BrowserWindow;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nexports.createWindow = () => {\n  let mainWindow = new BrowserWindow({\n    width: 400,\n    height: 500,\n    webPreferences: {\n      preload: path.join(__dirname, '..', 'renderer', 'preloads', 'index.js'),\n      nodeIntegration: true,\n      contextIsolation: true,\n      enableRemoteModule: false\n    }\n  });\n  mainWindow.loadURL('file://' + path.join(__dirname, '..', 'windows', 'index.html'));\n  mainWindow.on('closed', () => {\n    mainWindow = null;\n  });\n  return mainWindow;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi9tYWluV2luZG93LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RpY2t5LW5vdGUtaW1wcm92ZWQvLi9hcHAvbWFpbi9tYWluV2luZG93LmpzP2QwNTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpXHJcbmNvbnN0IEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbi5Ccm93c2VyV2luZG93XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuXHJcbmV4cG9ydHMuY3JlYXRlV2luZG93ID0gKCkgPT4ge1xyXG4gIGxldCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgIGhlaWdodDogNTAwLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgcHJlbG9hZDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJ3JlbmRlcmVyJywgJ3ByZWxvYWRzJywgJ2luZGV4LmpzJyksXHJcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcclxuICAgICAgY29udGV4dElzb2xhdGlvbjogdHJ1ZSxcclxuICAgICAgZW5hYmxlUmVtb3RlTW9kdWxlOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgbWFpbldpbmRvdy5sb2FkVVJMKCdmaWxlOi8vJyArIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICd3aW5kb3dzJywgJ2luZGV4Lmh0bWwnKSlcclxuICBtYWluV2luZG93Lm9uKCdjbG9zZWQnLCAoKSA9PiB7XHJcbiAgICBtYWluV2luZG93ID0gbnVsbFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBtYWluV2luZG93XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/main/mainWindow.js\n");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainWindow\": () => (/* binding */ mainWindow)\n/* harmony export */ });\nconst electron = __webpack_require__(/*! electron */ \"electron\");\n\nconst app = electron.app;\n\nconst {\n  createWindow\n} = __webpack_require__(/*! ./app/main/mainWindow */ \"./app/main/mainWindow.js\");\n\nlet mainWindow; // protect mainWindow from gabage collection\n\napp.on('ready', createWindow);\napp.on('window-all-closed', () => {\n  if (process.platform !== 'darwin') app.quit();\n});\napp.on('activate', () => {\n  // macOS specific code\n  if (mainWindow == null) createWindow();\n}); // register ipc handlers before the mainWindow loads the renderer code\n// It will emit error like\n//   << Error occurred in handler for 'nanoid-ipc': No handler registered for 'nanoid-ipc' >>\n// without below code\n// see https://stackoverflow.com/questions/64866614/no-handler-registered-for-channel-electron-ipc-handle-invoke\n\n__webpack_require__(/*! ./app/main/ipcMain */ \"./app/main/ipcMain.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RpY2t5LW5vdGUtaW1wcm92ZWQvLi9tYWluLmpzPzFkNTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpXHJcbmNvbnN0IGFwcCA9IGVsZWN0cm9uLmFwcFxyXG5jb25zdCB7IGNyZWF0ZVdpbmRvdyB9ID0gcmVxdWlyZSgnLi9hcHAvbWFpbi9tYWluV2luZG93JylcclxuXHJcbmxldCBtYWluV2luZG93IC8vIHByb3RlY3QgbWFpbldpbmRvdyBmcm9tIGdhYmFnZSBjb2xsZWN0aW9uXHJcblxyXG5hcHAub24oJ3JlYWR5JywgY3JlYXRlV2luZG93KVxyXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykgYXBwLnF1aXQoKVxyXG59KVxyXG5cclxuYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcclxuICAvLyBtYWNPUyBzcGVjaWZpYyBjb2RlXHJcbiAgaWYgKG1haW5XaW5kb3cgPT0gbnVsbCkgY3JlYXRlV2luZG93KClcclxufSlcclxuXHJcbi8vIHJlZ2lzdGVyIGlwYyBoYW5kbGVycyBiZWZvcmUgdGhlIG1haW5XaW5kb3cgbG9hZHMgdGhlIHJlbmRlcmVyIGNvZGVcclxuLy8gSXQgd2lsbCBlbWl0IGVycm9yIGxpa2VcclxuLy8gICA8PCBFcnJvciBvY2N1cnJlZCBpbiBoYW5kbGVyIGZvciAnbmFub2lkLWlwYyc6IE5vIGhhbmRsZXIgcmVnaXN0ZXJlZCBmb3IgJ25hbm9pZC1pcGMnID4+XHJcbi8vIHdpdGhvdXQgYmVsb3cgY29kZVxyXG4vLyBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjQ4NjY2MTQvbm8taGFuZGxlci1yZWdpc3RlcmVkLWZvci1jaGFubmVsLWVsZWN0cm9uLWlwYy1oYW5kbGUtaW52b2tlXHJcbnJlcXVpcmUoJy4vYXBwL21haW4vaXBjTWFpbicpXHJcblxyXG5leHBvcnQgeyBtYWluV2luZG93IH1cclxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ }),

/***/ "./node_modules/nanoid/index.cjs":
/*!***************************************!*\
  !*** ./node_modules/nanoid/index.cjs ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let crypto = __webpack_require__(/*! crypto */ \"crypto\")\n\nlet { urlAlphabet } = __webpack_require__(/*! ./url-alphabet/index.cjs */ \"./node_modules/nanoid/url-alphabet/index.cjs\")\n\n// It is best to make fewer, larger requests to the crypto module to\n// avoid system call overhead. So, random numbers are generated in a\n// pool. The pool is a Buffer that is larger than the initial random\n// request size by this multiplier. The pool is enlarged if subsequent\n// requests exceed the maximum buffer size.\nconst POOL_SIZE_MULTIPLIER = 32\nlet pool, poolOffset\n\nlet random = bytes => {\n  if (!pool || pool.length < bytes) {\n    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)\n    crypto.randomFillSync(pool)\n    poolOffset = 0\n  } else if (poolOffset + bytes > pool.length) {\n    crypto.randomFillSync(pool)\n    poolOffset = 0\n  }\n\n  let res = pool.subarray(poolOffset, poolOffset + bytes)\n  poolOffset += bytes\n  return res\n}\n\nlet customRandom = (alphabet, size, getRandom) => {\n  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes\n  // values closer to the alphabet size. The bitmask calculates the closest\n  // `2^31 - 1` number, which exceeds the alphabet size.\n  // For example, the bitmask for the alphabet size 30 is 31 (00011111).\n  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1\n  // Though, the bitmask solution is not perfect since the bytes exceeding\n  // the alphabet size are refused. Therefore, to reliably generate the ID,\n  // the random bytes redundancy has to be satisfied.\n\n  // Note: every hardware random generator call is performance expensive,\n  // because the system call for entropy collection takes a lot of time.\n  // So, to avoid additional system calls, extra bytes are requested in advance.\n\n  // Next, a step determines how many random bytes to generate.\n  // The number of random bytes gets decided upon the ID size, mask,\n  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance\n  // according to benchmarks).\n  let step = Math.ceil((1.6 * mask * size) / alphabet.length)\n\n  return () => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      // A compact alternative for `for (let i = 0; i < step; i++)`.\n      let i = step\n      while (i--) {\n        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.\n        id += alphabet[bytes[i] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\n\nlet customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)\n\nlet nanoid = (size = 21) => {\n  let bytes = random(size)\n  let id = ''\n  // A compact alternative for `for (let i = 0; i < size; i++)`.\n  while (size--) {\n    // It is incorrect to use bytes exceeding the alphabet size.\n    // The following mask reduces the random byte in the 0-255 value\n    // range to the 0-63 value range. Therefore, adding hacks, such\n    // as empty string fallback or magic numbers, is unneccessary because\n    // the bitmask trims bytes down to the alphabet size.\n    id += urlAlphabet[bytes[size] & 63]\n  }\n  return id\n}\n\nmodule.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmNqcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3RlLWltcHJvdmVkLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5janM/OTM4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJylcblxubGV0IHsgdXJsQWxwaGFiZXQgfSA9IHJlcXVpcmUoJy4vdXJsLWFscGhhYmV0L2luZGV4LmNqcycpXG5cbi8vIEl0IGlzIGJlc3QgdG8gbWFrZSBmZXdlciwgbGFyZ2VyIHJlcXVlc3RzIHRvIHRoZSBjcnlwdG8gbW9kdWxlIHRvXG4vLyBhdm9pZCBzeXN0ZW0gY2FsbCBvdmVyaGVhZC4gU28sIHJhbmRvbSBudW1iZXJzIGFyZSBnZW5lcmF0ZWQgaW4gYVxuLy8gcG9vbC4gVGhlIHBvb2wgaXMgYSBCdWZmZXIgdGhhdCBpcyBsYXJnZXIgdGhhbiB0aGUgaW5pdGlhbCByYW5kb21cbi8vIHJlcXVlc3Qgc2l6ZSBieSB0aGlzIG11bHRpcGxpZXIuIFRoZSBwb29sIGlzIGVubGFyZ2VkIGlmIHN1YnNlcXVlbnRcbi8vIHJlcXVlc3RzIGV4Y2VlZCB0aGUgbWF4aW11bSBidWZmZXIgc2l6ZS5cbmNvbnN0IFBPT0xfU0laRV9NVUxUSVBMSUVSID0gMzJcbmxldCBwb29sLCBwb29sT2Zmc2V0XG5cbmxldCByYW5kb20gPSBieXRlcyA9PiB7XG4gIGlmICghcG9vbCB8fCBwb29sLmxlbmd0aCA8IGJ5dGVzKSB7XG4gICAgcG9vbCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShieXRlcyAqIFBPT0xfU0laRV9NVUxUSVBMSUVSKVxuICAgIGNyeXB0by5yYW5kb21GaWxsU3luYyhwb29sKVxuICAgIHBvb2xPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAocG9vbE9mZnNldCArIGJ5dGVzID4gcG9vbC5sZW5ndGgpIHtcbiAgICBjcnlwdG8ucmFuZG9tRmlsbFN5bmMocG9vbClcbiAgICBwb29sT2Zmc2V0ID0gMFxuICB9XG5cbiAgbGV0IHJlcyA9IHBvb2wuc3ViYXJyYXkocG9vbE9mZnNldCwgcG9vbE9mZnNldCArIGJ5dGVzKVxuICBwb29sT2Zmc2V0ICs9IGJ5dGVzXG4gIHJldHVybiByZXNcbn1cblxubGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgc2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIC8vIEZpcnN0LCBhIGJpdG1hc2sgaXMgbmVjZXNzYXJ5IHRvIGdlbmVyYXRlIHRoZSBJRC4gVGhlIGJpdG1hc2sgbWFrZXMgYnl0ZXNcbiAgLy8gdmFsdWVzIGNsb3NlciB0byB0aGUgYWxwaGFiZXQgc2l6ZS4gVGhlIGJpdG1hc2sgY2FsY3VsYXRlcyB0aGUgY2xvc2VzdFxuICAvLyBgMl4zMSAtIDFgIG51bWJlciwgd2hpY2ggZXhjZWVkcyB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgLy8gRm9yIGV4YW1wbGUsIHRoZSBiaXRtYXNrIGZvciB0aGUgYWxwaGFiZXQgc2l6ZSAzMCBpcyAzMSAoMDAwMTExMTEpLlxuICBsZXQgbWFzayA9ICgyIDw8ICgzMSAtIE1hdGguY2x6MzIoKGFscGhhYmV0Lmxlbmd0aCAtIDEpIHwgMSkpKSAtIDFcbiAgLy8gVGhvdWdoLCB0aGUgYml0bWFzayBzb2x1dGlvbiBpcyBub3QgcGVyZmVjdCBzaW5jZSB0aGUgYnl0ZXMgZXhjZWVkaW5nXG4gIC8vIHRoZSBhbHBoYWJldCBzaXplIGFyZSByZWZ1c2VkLiBUaGVyZWZvcmUsIHRvIHJlbGlhYmx5IGdlbmVyYXRlIHRoZSBJRCxcbiAgLy8gdGhlIHJhbmRvbSBieXRlcyByZWR1bmRhbmN5IGhhcyB0byBiZSBzYXRpc2ZpZWQuXG5cbiAgLy8gTm90ZTogZXZlcnkgaGFyZHdhcmUgcmFuZG9tIGdlbmVyYXRvciBjYWxsIGlzIHBlcmZvcm1hbmNlIGV4cGVuc2l2ZSxcbiAgLy8gYmVjYXVzZSB0aGUgc3lzdGVtIGNhbGwgZm9yIGVudHJvcHkgY29sbGVjdGlvbiB0YWtlcyBhIGxvdCBvZiB0aW1lLlxuICAvLyBTbywgdG8gYXZvaWQgYWRkaXRpb25hbCBzeXN0ZW0gY2FsbHMsIGV4dHJhIGJ5dGVzIGFyZSByZXF1ZXN0ZWQgaW4gYWR2YW5jZS5cblxuICAvLyBOZXh0LCBhIHN0ZXAgZGV0ZXJtaW5lcyBob3cgbWFueSByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG4gIC8vIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIGdldHMgZGVjaWRlZCB1cG9uIHRoZSBJRCBzaXplLCBtYXNrLFxuICAvLyBhbHBoYWJldCBzaXplLCBhbmQgbWFnaWMgbnVtYmVyIDEuNiAodXNpbmcgMS42IHBlYWtzIGF0IHBlcmZvcm1hbmNlXG4gIC8vIGFjY29yZGluZyB0byBiZW5jaG1hcmtzKS5cbiAgbGV0IHN0ZXAgPSBNYXRoLmNlaWwoKDEuNiAqIG1hc2sgKiBzaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgLy8gQSBjb21wYWN0IGFsdGVybmF0aXZlIGZvciBgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwOyBpKyspYC5cbiAgICAgIGxldCBpID0gc3RlcFxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAvLyBBZGRpbmcgYHx8ICcnYCByZWZ1c2VzIGEgcmFuZG9tIGJ5dGUgdGhhdCBleGNlZWRzIHRoZSBhbHBoYWJldCBzaXplLlxuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tpXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUpID0+IGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgYnl0ZXMgPSByYW5kb20oc2l6ZSlcbiAgbGV0IGlkID0gJydcbiAgLy8gQSBjb21wYWN0IGFsdGVybmF0aXZlIGZvciBgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspYC5cbiAgd2hpbGUgKHNpemUtLSkge1xuICAgIC8vIEl0IGlzIGluY29ycmVjdCB0byB1c2UgYnl0ZXMgZXhjZWVkaW5nIHRoZSBhbHBoYWJldCBzaXplLlxuICAgIC8vIFRoZSBmb2xsb3dpbmcgbWFzayByZWR1Y2VzIHRoZSByYW5kb20gYnl0ZSBpbiB0aGUgMC0yNTUgdmFsdWVcbiAgICAvLyByYW5nZSB0byB0aGUgMC02MyB2YWx1ZSByYW5nZS4gVGhlcmVmb3JlLCBhZGRpbmcgaGFja3MsIHN1Y2hcbiAgICAvLyBhcyBlbXB0eSBzdHJpbmcgZmFsbGJhY2sgb3IgbWFnaWMgbnVtYmVycywgaXMgdW5uZWNjZXNzYXJ5IGJlY2F1c2VcbiAgICAvLyB0aGUgYml0bWFzayB0cmltcyBieXRlcyBkb3duIHRvIHRoZSBhbHBoYWJldCBzaXplLlxuICAgIGlkICs9IHVybEFscGhhYmV0W2J5dGVzW3NpemVdICYgNjNdXG4gIH1cbiAgcmV0dXJuIGlkXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBuYW5vaWQsIGN1c3RvbUFscGhhYmV0LCBjdXN0b21SYW5kb20sIHVybEFscGhhYmV0LCByYW5kb20gfVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/nanoid/index.cjs\n");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.cjs":
/*!****************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.cjs ***!
  \****************************************************/
/***/ ((module) => {

eval("// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped\n// optimize the gzip compression for this alphabet.\nlet urlAlphabet =\n  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'\n\nmodule.exports = { urlAlphabet }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5janMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlja3ktbm90ZS1pbXByb3ZlZC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmNqcz9lZmVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYWxwaGFiZXQgdXNlcyBgQS1aYS16MC05Xy1gIHN5bWJvbHMuIFRoZSBnZW5ldGljIGFsZ29yaXRobSBoZWxwZWRcbi8vIG9wdGltaXplIHRoZSBnemlwIGNvbXByZXNzaW9uIGZvciB0aGlzIGFscGhhYmV0LlxubGV0IHVybEFscGhhYmV0ID1cbiAgJ01vZHVsZVN5bWJoYXNPd25Qci0wMTIzNDU2Nzg5QUJDREVGR0hOUlZmZ2N0aVV2el9LcVlUSmtMeHBaWElqUVcnXG5cbm1vZHVsZS5leHBvcnRzID0geyB1cmxBbHBoYWJldCB9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/nanoid/url-alphabet/index.cjs\n");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;