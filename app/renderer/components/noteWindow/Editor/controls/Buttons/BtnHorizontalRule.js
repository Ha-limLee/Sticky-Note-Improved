import React, { Component } from 'react'
import { HorizontalRuleIcon } from '@primer/octicons-react'
import { BtnClassNameRaw } from '../../../../../configs/index'

export default class BtnHorizontalRule extends Component {
  clickHandler () {
    document.execCommand('insertHorizontalRule')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={BtnClassNameRaw} onClick={doClick}>
        <HorizontalRuleIcon size={16} />
      </div>
    )
  }
}
