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
    },

    getNoteText: () => {
      let noteText = ''
      noteText = ipcRenderer.sendSync('getNoteText')
      return noteText
    },

    /**
    onNoteWindowClose: () => {
      ipcRenderer.on('noteWindow-close', (e) => {
        console.log('send text from noteWindow')
        e.sender.send('noteWindow-close-reply', this.getText())
      })
    },
     */

    editorBodyUnmount: () => {
      ipcRenderer.send('editorBodyUnmount', 'editorBodyUnmount')
    },

    /**
     * send noteText from noteWindow
     */
    sendNoteText: (id, text) => {
      ipcRenderer.send('sendNoteText', id, text)
    }
  }
)
