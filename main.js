const electron = require('electron')
const app = electron.app
const ipcMain = electron.ipcMain
const { createWindow } = require('./app/main/mainWindow')
const { createNoteWindow } = require('./app/main/NoteWindow/createNoteWindow')
const { nanoid } = require('nanoid')
const { ConfigWinMain, ConfigWinNote, ConfigWinGen } = require('./app/configs')

// Init
let mainWindow // protect mainWindow from gabage collection
let noteWindow
const cacheQueue = [] // noteId container

// App
app.on('ready', () => {
  mainWindow = createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (mainWindow == null) mainWindow = createWindow()
})

app.on('ready', () => {
  // windowGenStack은 NoteWindow가 생성된 횟수를 기록합니다.
  // 하지만 앱 설정에서 활성화를 하지 않으면 기록하지 않습니다.
  // 기록된 생성 횟수는 생성될 NoteWindow의 위치를 조정하는데 활용됩니다.
  // 일반적으로는 생성된 NoteWindow의 위치가 겹치지 않도록 활성화하는 것이 좋습니다.
  // 설정은 /app/configs/windows에서 관리할 수 있습니다.
  let windowGenStack = 0

  ipcMain.on('NoteFrameClicked', (event, id) => {
    cacheQueue.push(id)
    console.log('in main ', id)

    // pos는 createNoteWindow에서 요구하는 windowPos 인자를 위한 변수입니다.
    // /app/configs/windows에서 관련 설정을 관리할 수 있습니다.
    let pos = [ConfigWinNote.pos.x, ConfigWinNote.pos.y]
    if (ConfigWinNote.pos.followingMain) {
      const mainWindowPos = mainWindow.getPosition()
      pos = [
        pos[0] + ConfigWinMain.width + mainWindowPos[0] + ConfigWinGen.margin * windowGenStack,
        pos[1] + mainWindowPos[1]
      ]
    }

    // noteWindow가 rendering될 때, getNoteId 채널을 통해 noteId를 요청
    // -> cacheQueue에서 하나씩 빼서 준다
    noteWindow = createNoteWindow(pos)
    // 'noteWindow' is assigned a value but never used. (no-unused-vars)standard(no-unused-vars)

    // windowGenStack은 NoteWindow가 생성된 횟수를 기록합니다.
    if (ConfigWinGen.enable) windowGenStack++
  })

  mainWindow.webContents.send('test-channel', 'from test-channel')
})

// IPC
// noteWindow에서 noteId를 요청할 때 사용
ipcMain.on('getNoteId', (event) => {
  event.returnValue = cacheQueue.shift()
})

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})
