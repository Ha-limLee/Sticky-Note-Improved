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
    },

    getTextCache: () => {
      return ipcRenderer.sendSync('getTextCache')
    },

    test: () => {
      let msg = ''
      ipcRenderer.on('test-channel', (e, data) => {
        msg = data
      })
      return msg
    }

    /**
    getText: (instance) => {
      ipcRenderer.on('get-text', (e, msg) => {
        if (instance instanceof NoteIndex) {
          this.setText(msg)
        }
      })
    }
     */
  }
)
