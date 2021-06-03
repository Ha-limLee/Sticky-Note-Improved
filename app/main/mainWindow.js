const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const { ConfigWinMain } = require('../configs')

console.log(ConfigWinMain)

/**
 * createWindow는 mainWindow를 생성합니다.
 *
 * mainWindow를 생성하는데 주로 사용되는 BrowserWindow 속성은 /app/configs/window에서 관리합니다.
 * @returns mainWindow: BrowserWindow
 */
exports.createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: ConfigWinMain.width,
    height: ConfigWinMain.height,
    x: ConfigWinMain.pos.x,
    y: ConfigWinMain.pos.y,
    minWidth: ConfigWinMain.min.width,
    minHeight: ConfigWinMain.min.height,
    maxWidth: ConfigWinMain.max.width,
    maxHeight: ConfigWinMain.max.height,
    resizable: ConfigWinMain.resizable,
    frame: ConfigWinMain.frame,
    webPreferences: {
      preload: path.join(__dirname, '..', 'renderer', 'preloads', 'index.js'),
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false
    }
  })
  mainWindow.loadURL('file://' + path.join(__dirname, '..', 'windows', 'index.html'))
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  return mainWindow
}
