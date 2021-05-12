const electron = require('electron')
const path = require('path')
const url = require('url')
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

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'app', 'renderer', 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// back-end logic

const fs = require('fs')
const { ipcMain } = require('electron')
const { nanoid } = require('nanoid')

// * js standard: Identifier 'text_saved_dir' is not in camel case. (camelcase) standard(camelcase)
const text_saved_dir = 'C:\\Users\\sticky-notes-improved'

// * js standard: Identifier 'init_dir' is not in camel case. (camelcase) standard(camelcase)
const init_dir = () => {
  // * js standard: 'dir' is not defined. (no-undef) standard(no-undef)
  fs.mkdir(dir, err => {
    if (err && err.code !== 'EXIST') throw 'up'
    // * js standard: Expected an error object to be thrown. (no-throw-literal) standard(no-throw-literal)
    console.log('Already Exists!')
  })
}

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})
