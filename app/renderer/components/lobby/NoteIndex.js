import React, { Component } from 'react'

export default class NoteIndex extends Component {
  render () {
    return (
      <div className='note_index'>
        <NoteFrame
          summary='Lorem ipsum'
        />
      </div>
    )
  }
}

class NoteFrame extends Component {
  handleClick (e) {
    window.api.NoteFrameClicked(this.props.id)
  }

  render () {
    const doClick = e => this.handleClick(e)
    return (
      <div
        className='note_frame'
        onClick={doClick}
      >
        <p className='contents summary'>{this.props.summary}</p>
      </div>
    )
  }
}
