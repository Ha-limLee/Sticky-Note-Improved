import React, { Component } from 'react'

export default class NoteIndex extends Component {
  constructor (props) {
    super()
    // super(props)
    // https://ko.reactjs.org/docs/react-component.html#constructor
  }

  render () {
    const deleteThis = () => {
      this.props.deleteCallBack(this.props.id)
    }

    return (
      <div className='note_index' onClick={console.log(this.props.id)}>
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
    const doClick = e => this.handleClick(e)
    return (
      <div
        className='note_frame'
        onClick={doClick}
      >

        <p className='contents summary'>{this.props.summary}</p>
        <textarea placeholder='click here' />
      </div>
    )
  }
}
