const { ipcMain } = require('electron')
const electron = require('electron')
const app = electron.app
const { createWindow } = require('./app/main/mainWindow')
const { createNoteWindow } = require('./app/main/NoteWindow/createNoteWindow')
const { nanoid } = require('nanoid')

// Global variables
let mainWindow // protect mainWindow from gabage collection
let noteWindow
let noteIdCache = ''
let noteTextCache = ''

app.on('ready', () => {
  mainWindow = createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // macOS specific code
  if (mainWindow == null) {
    mainWindow = createWindow()
  }
})

///
app.on('ready', () => {
  ipcMain.on('NoteFrameClicked', (event, id, text) => {
    noteIdCache = id
    noteTextCache = text

    console.log('in main ', id, ' ', text)
    noteWindow = createNoteWindow()
    // attach closing event
    // It will save contents of noteWindow
    noteWindow.on('close', async () => {
      console.log('noteWindow closed')

      mainWindow.reload()
      // reload 후 nodeIdCache와 noteTextCache를 noteFrame에서 요청한다
    })
  })

  mainWindow.webContents.send('test-channel', 'from test-channel')
})

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})

ipcMain.on('getNoteId', (event) => {
  event.returnValue = noteIdCache
})

ipcMain.on('getNoteText', (event) => {
  event.returnValue = noteTextCache
})

ipcMain.on('sendNoteText', (event, id, text) => {
  noteIdCache = id
  noteTextCache = text
  console.log(
    'cached id: ', noteIdCache, '\n',
    'cached text: ', noteTextCache
  )
})

ipcMain.on('getTextCache', (event) => {
  event.returnValue = { id: noteIdCache, text: noteTextCache }
})
