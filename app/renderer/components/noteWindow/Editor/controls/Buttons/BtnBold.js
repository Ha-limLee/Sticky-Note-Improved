import React, { Component } from 'react'
import { BoldIcon } from '@primer/octicons-react'
import { btnClassNameRaw } from '../config'

export default class BtnBold extends Component {
  clickHandler () {
    document.execCommand('bold', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={btnClassNameRaw} onClick={doClick}>
        <BoldIcon size={16} />
      </div>
    )
  }
}
