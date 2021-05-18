import React, { Component } from 'react'
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  HeadingIcon,
  LinkIcon,
  ImageIcon,
  ListOrderedIcon,
  ListUnorderedIcon
} from '@primer/octicons-react'

export default class EditorTopMenu extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='editor_topmenu'>
        <div className='wrapper'>
          <div className='btn btn-square btn-small btn-normal bold'><BoldIcon size={16} /></div>
          <div className='btn btn-square btn-small btn-normal italic'><ItalicIcon size={16} /></div>
          <div className='btn btn-square btn-small btn-normal strikethrough'><StrikethroughIcon size={16} /></div>
          <div className='btn btn-square btn-small btn-normal heading'><HeadingIcon size={16} /></div>
          <div className='btn btn-square btn-small btn-normal link'><LinkIcon size={16} /></div>
          <div className='btn btn-square btn-small btn-normal image'><ImageIcon size={16} /></div>
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
