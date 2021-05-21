const electron = require('electron')
const app = electron.app
const { createWindow } = require('./app/main/mainWindow')

let mainWindow // protect mainWindow from gabage collection

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // macOS specific code
  if (mainWindow == null) createWindow()
})

// register ipc handlers before the mainWindow loads the renderer code
// It will emit error like
//   << Error occurred in handler for 'nanoid-ipc': No handler registered for 'nanoid-ipc' >>
// without below code
require('./app/main/ipcMain')
