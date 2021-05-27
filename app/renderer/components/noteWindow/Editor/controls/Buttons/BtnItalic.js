import React, { Component } from 'react'
import { ItalicIcon } from '@primer/octicons-react'
import { btnClassNameRaw } from '../config'

export default class BtnItalic extends Component {
  clickHandler () {
    document.execCommand('italic', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={btnClassNameRaw} onClick={doClick}>
        <ItalicIcon size={16} />
      </div>
    )
  }
}
