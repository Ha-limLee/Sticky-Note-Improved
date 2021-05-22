import React, { Component } from 'react'

export default class EditorBody extends Component {
  constructor (props) {
    super()
    this.state = {
      text: ''
    }
    this.textInput = React.createRef()
    this.getText = this.getText.bind(this)
  }

  getText () {
    return {
      key: this.props.id,
      value: this.textInput.current.innerHTML
    }
  }

  componentDidMount () {

  }

  componentDidUpdate () {
    console.log(this.state.text)
  }

  handleChange (event) {
    this.setState({
      text: event.currentTarget.textContent
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
          value={this.state.text}
          onBlur={handleChange}
          contentEditable
        />
        <button onClick={getText}>log</button>
      </div>
    )
  }
}
