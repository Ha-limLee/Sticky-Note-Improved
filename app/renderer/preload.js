const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'ipcRenderer',
  {
    NoteFrameClicked: (id) => ipcRenderer.send('NoteFrameClicked', id)
  }
)
