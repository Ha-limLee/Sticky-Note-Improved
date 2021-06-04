import React, { Component } from 'react'
import { ItalicIcon } from '@primer/octicons-react'
import { BtnClassNameRaw } from '../../../../../configs'

export default class BtnItalic extends Component {
  clickHandler () {
    document.execCommand('italic', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={BtnClassNameRaw} onClick={doClick}>
        <ItalicIcon size={16} />
      </div>
    )
  }
}
