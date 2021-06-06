const { contextBridge, ipcRenderer, shell } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    getNoteId: () => {
      const got = ipcRenderer.sendSync('getNoteId')
      console.log('in noteWindow', got)
      return got
    },
    editorBodyUnmount: () => {
      ipcRenderer.send('editorBodyUnmount', 'editorBodyUnmount')
    },
    openExternal: (url) => {
      shell.openExternal(url)
    }
  }
)
