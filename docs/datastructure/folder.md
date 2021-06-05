---
title: '폴더 구조'
target: '0.1 (pre-1)'
---
# 폴더 구조
Sticky Note Improved의 폴더 구조는 아래와 같이 구성되어 있습니다.  

```
├─ app
│  ├─ configs : 애플리케이션 설정
│  ├─ main : 메인 프로세스
│  ├─ out : 번들링 결과 (npm run build 결과)
│  ├─ renderer : 렌더러 프로세스 (번들링 이전)
│  ├─ sass : sass
│  ├─ utility : 유틸 모듈
│  └─ windows : 애플리케이션 창
├─ docs : 문서 관련 자료 디렉토리
├─ parser : 웹페이지 파싱 프로세스
└─ main.js : 애플리케이션 진입점 (package.json 에서 정의)
```

## app
### Configs
`/app/configs`는 애플리케이션 설정 파일들의 집합입니다.  

#### 사용
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

자세한 `configs` 값은 해당 파일이나 [애플리케이션 설정하기](../getting-start/configs.md) 문서를 참조하세요.

### Main
`/app/main`은 애플리케이션의 메인 프로세스를 구성하는 코드 집합입니다.

### Out
`/app/out`은 애플리케이션의 렌더러 프로세스의 번들링 결과를 저장하는 코드 집합입니다.

### Renderer
`/app/renderer`는 애플리케이션의 렌더러 프로세스를 구성하는 코드 집합입니다. 프로젝트의 거의 대부분의 코드는 이 `render`의 하위 코드입니다. 주로 리액트를 사용해서 작성됩니다.

### Sass
`/app/sass`는 애플리케이션의 스타일을 정의하는 Sass 코드 집합입니다.  

#### 사용
`sass`는 스타일 요소와 세부 설정값을 분리하기 위해 변수를 별도로 관리하고 있습니다. 따라서 되도록 `sass/sticky-note/_variables` 외 파일을 변경하지 않도록 합니다.

### Utility
`/app/utility`는 애플리케이션에서 사용하는 유틸리티 모듈을 구성하는 코드 집합입니다.

### Windows
`/app/windows`는 애플리케이션 창을 정의하는 코드 집합입니다.  

#### 상세
`/app/main/mainWindow.js`
```js
exports.createWindow = () => {
  ...
  mainWindow.loadURL('file://' + path.join(__dirname, '..', 'windows', 'index.html'))
}
```

일반적으로 `windows`의 구성 파일들은 일렉트론이 새 창을 생성할 때 필요한 HTML 파일입니다. [Pre-release 1](https://github.com/Ha-limLee/Sticky-Notes-Improved/releases/tag/0.1) 기준으로, `windows` 구성 파일은 창 종류에 따라 두개 존재합니다.  

## parser
