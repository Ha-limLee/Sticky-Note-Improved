import React, { Component } from 'react'

export default class EditorBody extends Component {
  constructor (props) {
    super()
  }

  // Todo: Content Editable 엘리먼트의 Place Holder 설정 방법?
  render () {
    return (
      <div className='editor_body' contentEditable>
        <div className='placeHolder'>
          <p>안녕하세요, Sticky Note 입니다. 이 문장을 지우고 메모를 시작하세요.</p>
        </div>
      </div>
    )
  }
}
