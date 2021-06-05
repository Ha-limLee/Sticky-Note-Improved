---
title: '애플리케이션 설정하기'
target: '0.1 (pre-1)'
---
# 애플리케이션 설정하기
Sticky Note의 내부 설정값은 여기저기 분산되어 있습니다. 이를 한 곳에서 관리하기 위한 노력의 일환으로, `/app/configs`로 설정값 정의를 이동하고 있습니다.  

`configs`는 프로젝트 내에서 사용해야 하는 설정값을 `configs` 진입점을 통해 제공합니다. 따라서 프로젝트 내에서 `configs`의 하위 요소를 직접 불러올 필요는 절대로 없습니다.  

일반적으로 아래와 같이 사용합니다.  
`/app/main/mainWindow.js`  
```js
const { ConfigWinMain } = require('../configs')

exports.createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: ConfigWinMain.width,
    ...
  })
  ...
}
```

## 설정 파일 목록
 * window.js
