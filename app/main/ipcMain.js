const { ipcMain } = require('electron')
const { nanoid } = require('nanoid')
const { createNoteWindow } = require('./NoteWindow/createNoteWindow')

ipcMain.handle('nanoid-ipc', async (event) => {
  const id = nanoid()
  console.log(id)
  return id
})

ipcMain.on('NoteFrameClicked', (event, arg) => {
  createNoteWindow()
})
