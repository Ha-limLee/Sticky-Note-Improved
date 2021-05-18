import React, { Component } from 'react'
import { TrashIcon } from '@primer/octicons-react'

class NoteFrame extends Component {
  constructor (props) {
    super()
  }

  deleteThis () {
    this.props.deleteCallBack()
  }

  render () {
    const deleteBtnHandler = () => {
      this.props.deleteCallBack(this.props.id)
    }
    return (
      <div className='note_frame'>
        <div
          className='btn btn-square btn-small btn-darker btn-danger btn-right-hover trash'
          onClick={deleteBtnHandler}
        >
          <TrashIcon size={16} />
        </div>
        <div
          className='wrapper'
          onClick={this.props.onClick}
        >
          <p className='contents summary'>{this.props.display}</p>
        </div>
      </div>
    )
  }
}

class NoteBtn extends Component {
  constructor (props) {
    super()
  }

  render () {
    const clickHandler = () => {
      this.props.onClick()
    }
    return (
      <div className='note_btn'>
        <NoteFrame
          display={this.props.display}
          onClick={clickHandler}
        />
      </div>
    )
  }
}

class NoteSummary extends Component {
  constructor (props) {
    super()
  }

  handleClick () {
    window.api.noteFrameClicked(this.props.id)
    console.log(this.props.id)
  }

  render () {
    const doClick = () => this.handleClick()
    return (
      <div className='note_summary'>
        <NoteFrame
          summary={this.props.display}
          onClick={doClick}
          deleteCallBack={this.props.deleteCallBack}
          id={this.props.id}
        />
      </div>
    )
  }
}

export { NoteFrame, NoteBtn, NoteSummary }
