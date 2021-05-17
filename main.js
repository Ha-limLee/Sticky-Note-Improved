const electron = require('electron')
const app = electron.app
const { createWindow } = require('./app/main/mainWindow')

let mainWindow
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (mainWindow == null) createWindow(mainWindow)
})

require('./app/main/ipcMain')
