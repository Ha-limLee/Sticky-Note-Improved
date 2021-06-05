import React, { Component } from 'react'
import EditorTopMenu from './controls/EditorTopMenu'
import EditorBody from './EditorBody'

/**
 * Editor 컴포넌트는 NoteWindow에서 WYSIWYG 에디터를 생성합니다.
 *
 * EditorTopMenu 컴포넌트와 EditorBody 컴포넌트로 구성되며, EditorTopMenu는 WYSIWYG 에디터 UI, EditorBody는 본문을 다룹니다.
 * @returns Editor: Component
 */
export default class Editor extends Component {
  constructor (props) {
    super()
  }

  componentDidMount () {
    console.log('in Editor', this.props.id)
  }

  render () {
    return (
      <div
        className='editor'
      >
        <EditorTopMenu />
        <EditorBody id={this.props.id} />
      </div>
    )
  }
}
