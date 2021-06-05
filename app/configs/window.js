// Window Config
//  - configs/windows.js

/**
 * MainWindow는 MainWindow를 생성하는데 필요한 설정을 담당합니다.
 * 외부에서는 ConfigWinMain으로 호출할 수 있습니다.
 */
const MainWindow = {
  width: 400,
  height: 500,
  pos: {
    x: null,
    y: null
  },
  min: {
    width: 400,
    height: null
  },
  max: {
    width: 400,
    height: null
  },
  resizable: false,
  frame: true
}

/**
 * NoteWindow는 NoteWindow를 생성하는데 필요한 설정을 담당합니다.
 * 외부에서는 ConfigWinNote로 호출할 수 있습니다.
 */
const NoteWindow = {
  width: 400,
  height: 500,
  pos: {
    followingMain: true,
    // If followingMain seted true, NoteWindow will creates based on MainWindow's Position.
    x: 10,
    y: 0
    /*
    followingMain: false,
    x: null,
    y: null
    */
  },
  min: {
    width: 400,
    height: null
  },
  max: {
    width: 400,
    height: null
  },
  resizable: true,
  frame: true
}

/**
 * WindowGen은 생성할 NoteWindow가 겹치지 않도록 관리하는데 사용되는 설정을 담당합니다.
 * 외부에서는 ConfigWinGen으로 호출할 수 있습니다.
 */
const WindowGen = {
  enable: true,
  margin: 30
}

exports.MainWindow = MainWindow
exports.NoteWindow = NoteWindow
exports.WindowGen = WindowGen
