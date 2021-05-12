const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    NoteFrameClicked: (id) => ipcRenderer.send('NoteFrameClicked', id)
  }
)
