const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const path = require('path')

exports.createWindow = (mainWindow) => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, '..', 'renderer', 'preloads', 'index.js'),
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false,
      webviewTag: true
    }
  })
  mainWindow.loadURL('file://' + path.join(__dirname, '..', 'windows', 'index.html'))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
