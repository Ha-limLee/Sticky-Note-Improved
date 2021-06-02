import React, { Component } from 'react'
import {
  ListOrderedIcon,
  ListUnorderedIcon
} from '@primer/octicons-react'
import {
  BtnBold,
  BtnItalic,
  BtnStrikeThrough,
  BtnLink,
  BtnHeading,
  BtnImage
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
          <BtnHeading />
          <BtnImage />
          <div className='btn btn-square btn-small btn-normal ol'><ListOrderedIcon size={16} /></div>
          <div className='btn btn-square btn-small btn-normal ul'><ListUnorderedIcon size={16} /></div>
        </div>
        <div className='wrapper'>
          <div className='btn btn-long btn-small btn-normal'>Font Family</div>
        </div>
      </div>
    )
  }
}
