const electron = require('electron')
const path = require('path')
const url = require('url')
const ipcMain = electron.ipcMain
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (mainWindow == null) createWindow()
})

ipcMain.on('NoteFrameClicked', (event, arg) => {
  /*noteWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {}
  })*/
})

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'app', 'renderer', 'preloads', 'index.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app', 'windows', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
