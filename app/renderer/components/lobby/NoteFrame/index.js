import React, { Component } from 'react'
import { TrashIcon } from '@primer/octicons-react'

class NoteFrame extends Component {
  constructor (props) {
    super()
    this.pRef = new React.createRef()
  }

  componentDidMount () {
    this.pRef.current.innerHTML = this.props.display
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
          className='btn btn-square btn-small btn-darker btn-danger trash'
          onClick={deleteBtnHandler}
        >
          <TrashIcon size={16} />
        </div>
        <div
          className='wrapper'
          onClick={this.props.onClick}
        >
          <p className='contents summary' ref={this.pRef} />
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
    this.testMessage = ''
  }

  handleClick () {
    window.api.noteFrameClicked(this.props.id, this.props.text)
    console.log('NoteSummary clicked\n' +
      '    id: ' + this.props.id + '\n' +
      '  text: ' + this.props.text + '\n'
    )
  }

  render () {
    const doClick = () => this.handleClick()
    return (
      <div className='note_summary'>
        <NoteFrame
          display={this.props.text}
          onClick={doClick}
          deleteCallBack={this.props.deleteCallBack}
          id={this.props.id}
        />
      </div>
    )
  }
}

export { NoteFrame, NoteBtn, NoteSummary }
