import React, { Component } from 'react'
import EditorTopMenu from './controls/EditorTopMenu'
import EditorBody from './EditorBody'

export default class Editor extends Component {
  constructor (props) {
    super()
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
