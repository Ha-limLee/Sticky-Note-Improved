const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    noteFrameClicked: (id) => {
      console.log('send id: ', id)
      ipcRenderer.send('NoteFrameClicked', id)
    },

    getNanoid: () => {
      return ipcRenderer.invoke('nanoid-ipc')
    }
  }
)
