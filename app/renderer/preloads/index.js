const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    noteFrameClicked: (id) => ipcRenderer.send('NoteFrameClicked', id),

    invoke: () => {
      return ipcRenderer.invoke('nanoid-ipc')
    }
  }
)
