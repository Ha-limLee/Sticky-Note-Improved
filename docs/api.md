# API
Sticky Note Improved 내부 API 명세

## Electron IPC
### NoteFrameClicked
```js
ipcRenderer.send('NoteFrameClicked', id)
ipcMain.on('NoteFrameClicked', (event, arg) => {
  //
})
```

`NoteFrameClicked`는 메인 화면(Lobby)에서 사용자가 노트를 선택할 때 발생합니다. 이 이벤트가 발생하면 새 노트 윈도우가 생성되어야 합니다. `ipcMain.on`을 통해 이벤트를 처리할 수 있으며 노트의 내부 구분자(`id`)를 `arg`에 인자로 제시합니다.  
