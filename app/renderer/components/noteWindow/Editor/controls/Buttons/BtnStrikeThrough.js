import React, { Component } from 'react'
import { StrikethroughIcon } from '@primer/octicons-react'
import { btnClassNameRaw } from '../config'

export default class BtnStrikeThrough extends Component {
  clickHandler () {
    document.execCommand('strikethrough', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={btnClassNameRaw} onClick={doClick}>
        <StrikethroughIcon size={16} />
      </div>
    )
  }
}
