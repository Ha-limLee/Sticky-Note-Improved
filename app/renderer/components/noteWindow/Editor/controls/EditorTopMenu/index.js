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
          <div className='btn btn-long btn-small btn-normal'>Font Family</div>
        </div>
      </div>
    )
  }
}
