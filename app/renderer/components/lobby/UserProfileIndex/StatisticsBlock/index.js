import React, { Component } from 'react'

export default class StaticsBlock extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='statics_block'>
        <div className='icon'>
          {this.props.iconComponent}
        </div>
        <div className='count'>
          {this.props.count}
        </div>
      </div>
    )
  }
}
