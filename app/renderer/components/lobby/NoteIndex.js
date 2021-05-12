import React, { Component } from 'react'

export default class NoteIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id
    }
  }

  render () {
    const deleteThis = () => {
      this.props.deleteCallBack(this.state.id)
    }

    return (
      <div className='note_index' onClick={console.log(this.state.id)}>
        <button onClick={deleteThis}>
          제거
        </button>
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
    const id = new Date().toTimeString().slice(0, 8)

    const doClick = e => this.handleClick(e)
    return (
      <div
        className='note_frame'
        onClick={doClick}
      >
        
        <p className='contents summary'>{this.props.summary}</p>
        <textarea placeholder="click here"></textarea>
      </div>
    )
  }
}
