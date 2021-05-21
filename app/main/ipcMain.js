const { ipcMain } = require('electron')
const { nanoid } = require('nanoid')
const { createNoteWindow } = require('./NoteWindow/createNoteWindow')

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})

let noteIdCache = ''
let noteWindow

ipcMain.on('getNoteId', (event) => {
  event.returnValue = noteIdCache
})

ipcMain.on('NoteFrameClicked', (event, id) => {
  noteIdCache = id

  noteWindow = createNoteWindow()
})
