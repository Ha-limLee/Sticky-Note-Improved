import React, { Component } from 'react'
import { StrikethroughIcon } from '@primer/octicons-react'
import { BtnClassNameRaw } from '../../../../../configs'

export default class BtnStrikeThrough extends Component {
  clickHandler () {
    document.execCommand('strikethrough', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={BtnClassNameRaw} onClick={doClick}>
        <StrikethroughIcon size={16} />
      </div>
    )
  }
}
