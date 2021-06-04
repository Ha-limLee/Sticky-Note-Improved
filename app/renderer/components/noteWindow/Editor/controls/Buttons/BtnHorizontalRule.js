import React, { Component } from 'react'
import { HorizontalRuleIcon } from '@primer/octicons-react'
import { btnClassNameRaw } from '../config'

export default class BtnHorizontalRule extends Component {
  clickHandler () {
    document.execCommand('insertHorizontalRule')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={btnClassNameRaw} onClick={doClick}>
        <HorizontalRuleIcon size={16} />
      </div>
    )
  }
}
