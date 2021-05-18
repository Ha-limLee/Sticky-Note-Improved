import React, { Component } from 'react'
import { BoldIcon, ItalicIcon } from '@primer/octicons-react'

export default class EditorTopMenu extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='editor_topmenu'>
        <div className='btn btn-square btn-small btn-normal bold'><BoldIcon size={16} /></div>
        <div className='btn btn-square btn-small btn-normal italic'><ItalicIcon size={16} /></div>
      </div>
    )
  }
}
