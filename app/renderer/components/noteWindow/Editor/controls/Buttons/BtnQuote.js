import React, { Component } from 'react'
import { QuoteIcon } from '@primer/octicons-react'
import { BtnClassNameRaw } from '../../../../../configs/index'

export default class BtnQuote extends Component {
  clickHandler () {
    document.execCommand('indent', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={BtnClassNameRaw} onClick={doClick}>
        <QuoteIcon size={16} />
      </div>
    )
  }
}
