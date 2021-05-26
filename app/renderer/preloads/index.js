const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    noteFrameClicked: (id, text) => {
      console.log('send id: ', id, ' text: ', text)
      ipcRenderer.send('NoteFrameClicked', id, text)
    },

    getNanoid: () => {
      return ipcRenderer.invoke('nanoid-ipc')
    }
  }
)
