import React, { Component } from 'react'

export default class NoteFrame extends Component {
  handleClick (e) {
    window.api.NoteFrameClicked(this.props.id)
    console.log(this.props.id)
  }

  render () {
    const doClick = e => this.handleClick(e)
    const deleteThis = () => {
      this.props.deleteCallBack(this.props.id)
    }
    return (
      <div
        className='note_frame'
        onClick={doClick}
      >
        <button onClick={deleteThis}>제거</button>
        <p className='contents summary'>{this.props.summary}</p>
        <textarea placeholder='click here' />
      </div>
    )
  }
}
