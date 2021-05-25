import React, { Component } from 'react'
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon
} from '@primer/octicons-react'

const classNameRaw = 'btn btn-square btn-small btn-normal'

class BtnBold extends Component {
  clickHandler () {
    document.execCommand('bold', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={classNameRaw} onClick={doClick}>
        <BoldIcon size={16} />
      </div>
    )
  }
}

class BtnItalic extends Component {
  clickHandler () {
    document.execCommand('italic', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={classNameRaw} onClick={doClick}>
        <ItalicIcon size={16} />
      </div>
    )
  }
}

class BtnStrikeThrough extends Component {
  clickHandler () {
    document.execCommand('strikethrough', false, '')
  }

  render () {
    const doClick = this.clickHandler
    return (
      <div className={classNameRaw} onClick={doClick}>
        <StrikethroughIcon size={16} />
      </div>
    )
  }
}

export {
  BtnBold,
  BtnItalic,
  BtnStrikeThrough
}
