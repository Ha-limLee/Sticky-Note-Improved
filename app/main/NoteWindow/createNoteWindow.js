const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const appPath = path.join(__dirname, '..', '..')

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
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })
  noteWindow.loadURL('file://' + path.join(appPath, 'windows', 'noteWindow.html'))
  noteWindow.on('closed', () => {
    noteWindow = null
  })
}
