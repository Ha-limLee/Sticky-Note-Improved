const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    NoteFrameClicked: (id) => ipcRenderer.send('NoteFrameClicked', id),

    invoke: () => {
      return ipcRenderer.invoke('nanoid-ipc')
    }
  }
)
