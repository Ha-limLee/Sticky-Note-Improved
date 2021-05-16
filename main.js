const electron = require('electron')
const path = require('path')
const ipcMain = electron.ipcMain
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const { nanoid } = require('nanoid')

let mainWindow
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (mainWindow == null) createWindow()
})

ipcMain.on('NoteFrameClicked', (event, arg) => {
  /* noteWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {}
  }) */
})

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'app', 'renderer', 'preloads', 'index.js'),
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })
  mainWindow.loadURL('file://' + path.join(__dirname, 'app', 'windows', 'index.html'))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// back-end logic

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})
