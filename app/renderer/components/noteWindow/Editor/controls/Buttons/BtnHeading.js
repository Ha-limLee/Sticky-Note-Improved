import React, { Component } from 'react'
import { HeadingIcon } from '@primer/octicons-react'
import { BtnClassNameRaw } from '../../../../../configs'

export default class BtnHeading extends Component {
  clickHandler () {
    document.execCommand('formatBlock', false, '<h2>')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={BtnClassNameRaw} onClick={doClick}>
        <HeadingIcon size={16} />
      </div>
    )
  }
}
