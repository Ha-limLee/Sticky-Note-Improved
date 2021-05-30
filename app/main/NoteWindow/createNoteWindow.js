const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const appPath = path.join(__dirname, '..', '..')

/**
 * noteWindow를 만든다
 * @returns noteWindow
 */
exports.createNoteWindow = () => {
  let noteWindow = new BrowserWindow({
    width: 400,
    height: 500,
    /* x: pos
       y: pos
      => Todo: Set Position
    */
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
