const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.BrowserWindow

function createWindow () {
  let mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, '../', 'renderer', 'preloads', 'noteWindow.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })
  mainWindow.loadURL('file://' + path.join(__dirname, 'app', 'windows', 'noteWindow.html'))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

export { createWindow as createNoteWindow }
