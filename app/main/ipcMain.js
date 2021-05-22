const { ipcMain, app } = require('electron')
const { nanoid } = require('nanoid')
const { createNoteWindow } = require('./NoteWindow/createNoteWindow')
const { createWindow } = require('./mainWindow')
// const { instance } = require('../renderer/components/lobby/NoteIndex')

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})

let noteIdCache = ''
let noteWindow
const mainWindow = createWindow()

ipcMain.on('getNoteId', (event) => {
  event.returnValue = noteIdCache
})

ipcMain.on('NoteFrameClicked', (event, id) => {
  noteIdCache = id

  noteWindow = createNoteWindow()
  // attach closing event
  // It will save contents of noteWindow
  noteWindow.on('close', () => {
    noteWindow.webContents.send('noteWindow-close')
    console.log(mainWindow)
  })
})

/**
ipcMain.on('noteWindow-close-reply', (e, msg) => {
  instance.setText(msg)
})
 */
