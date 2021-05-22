import React, { Component } from 'react'

export default class EditorBody extends Component {
  constructor (props) {
    super()
    this.state = {
      text: ''
    }
    this.textInput = React.createRef()
    this.getText = this.getText.bind(this)
    this.textAreaRef = React.createRef()
  }

  getText () {
    return {
      key: this.props.id,
      value: this.textInput.current.innerHTML
    }
  }

  // load text
  componentDidMount () {
    const noteText = window.api.getNoteText()
    this.setState({
      text: noteText
    })
    this.textAreaRef.current.innerHTML = noteText
  }

  // save text
  componentDidUpdate () {
    window.api.sendNoteText(this.props.id, this.state.text)
  }

  handleChange (event) {
    this.setState({
      text: event.currentTarget.innerHTML
    })
  }

  render () {
    const getText = this.getText
    const handleChange = this.handleChange.bind(this)

    return (
      <div className='editor_body'>
        <span
          className='textarea'
          role='textbox'
          onBlur={handleChange}
          contentEditable
          ref={this.textAreaRef}
        />
        <button onClick={getText}>log</button>
      </div>
    )
  }
}
