import React, { Component } from 'react'

export default class FontFamily extends Component {
  constructor (props) {
    super()
  }

  handleChange = (event) => {
    const elm = document.querySelector('.editor_body > .textarea')
    const fontName = event.target.value
    elm.style.fontFamily = fontName

    window.localStorage.setItem(this.props.id + '__font', fontName)
    console.log(event.target.value)
  }

  render () {
    return (
      <select
        className='btn btn-long btn-normal'
        onChange={ this.handleChange }
      >
        <option value=''>Font Family</option>
        <option value='Fira Code, monospace'>Fira Code</option>
        <option value='JetBrains Mono, monospace'>JetBrains Mono</option>
        <option value='Source Code Pro, monospace'>Source Code Pro</option>
        <option value='Ubuntu Mono, monospace'>Ubuntu Mono</option>
      </select>
    )
  }
}
