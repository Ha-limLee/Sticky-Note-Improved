const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    noteFrameClicked: (id) => ipcRenderer.send('NoteFrameClicked', id),

    getNanoid: () => {
      return ipcRenderer.invoke('nanoid-ipc')
    }
  }
)
