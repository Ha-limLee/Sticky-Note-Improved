import React, { Component } from 'react'

export default class NoteIndex extends Component {
  render() {
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
  render() {
    return (
      <div className='note_frame'>
        <p className='contents summary'>{this.props.summary}</p>
      </div>
    )
  }
}