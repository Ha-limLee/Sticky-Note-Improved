import React, { Component } from 'react'
import {
  BtnBold,
  BtnItalic,
  BtnStrikeThrough,
  BtnLink,
  BtnQuote,
  BtnHeading,
  BtnHorizontalRule,
  BtnImage,
  BtnOList,
  BtnUList
} from '../Buttons'

import { FontFamily } from '../SelectBoxes'

export default class EditorTopMenu extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='editor_topmenu'>
        <div className='wrapper'>
          <BtnBold />
          <BtnItalic />
          <BtnStrikeThrough />
          <BtnLink />
          <BtnQuote />
          <BtnHeading />
          <BtnHorizontalRule />
          <BtnImage />
          <BtnOList />
          <BtnUList />
        </div>
        <div className='wrapper'>
          <FontFamily id={this.props.id} />
        </div>
      </div>
    )
  }
}
