const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    getNoteId: () => {
      console.log('Hello World from getNoteId')
      let noteId = ''

      noteId = ipcRenderer.sendSync('getNoteId')

      console.log(noteId)
      return noteId
    }
  }
)
