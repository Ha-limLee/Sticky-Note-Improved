const { ipcMain } = require('electron')
const electron = require('electron')
const app = electron.app
const { createWindow } = require('./app/main/mainWindow')
const { createNoteWindow } = require('./app/main/NoteWindow/createNoteWindow')
const { nanoid } = require('nanoid')

let mainWindow // protect mainWindow from gabage collection
let noteWindow
const cacheQueue = [] // noteId container

app.on('ready', () => {
  mainWindow = createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow == null) mainWindow = createWindow()
})

// noteWindow에서 noteId를 요청할 때 사용
ipcMain.on('getNoteId', (event) => {
  event.returnValue = cacheQueue.shift()
})

app.on('ready', () => {
  ipcMain.on('NoteFrameClicked', (event, id) => {
    cacheQueue.push(id)
    console.log('in main ', id)

    noteWindow = createNoteWindow()
    // noteWindow가 rendering될 때, getNoteId 채널을 통해 noteId를 요청
    // -> cacheQueue에서 하나씩 빼서 준다
  })

  mainWindow.webContents.send('test-channel', 'from test-channel')
})

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})
