import React, { Component } from 'react'
import { QuoteIcon } from '@primer/octicons-react'
import { btnClassNameRaw } from '../config'

export default class BtnQuote extends Component {
  clickHandler () {
    document.execCommand('indent', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={btnClassNameRaw} onClick={doClick}>
        <QuoteIcon size={16} />
      </div>
    )
  }
}
