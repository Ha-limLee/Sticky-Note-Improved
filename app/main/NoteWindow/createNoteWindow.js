const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const appPath = path.join(__dirname, '..', '..')
const { ConfigWinNote } = require('../../configs')

/**
 * createNoteWindow는 noteWindow를 생성합니다.
 *
 * noteWindow를 생성하는데 주로 사용되는 BrowserWindow 속성은 /app/configs/windows에서 관리합니다.
 * @returns noteWindow: BrowserWindow
 */
exports.createNoteWindow = (windowPos = [null, null]) => {
  let noteWindow = new BrowserWindow({
    width: ConfigWinNote.width,
    height: ConfigWinNote.height,
    x: windowPos[0],
    y: windowPos[1],
    minWidth: ConfigWinNote.width,
    minHeight: ConfigWinNote.height,
    maxWidth: ConfigWinNote.width,
    maxHeight: ConfigWinNote.height,
    resizable: ConfigWinNote.resizable,
    frame: ConfigWinNote.frame,
    webPreferences: {
      preload: path.join(appPath, 'renderer', 'preloads', 'noteWindow.js'),
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })
  noteWindow.loadURL('file://' + path.join(appPath, 'windows', 'noteWindow.html'))
  noteWindow.on('closed', () => {
    noteWindow = null
  })

  return noteWindow
}
