import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='left'>
          <p className='logo common'>Sticky Note</p>
          <h1 className='page_title'>{this.props.title}</h1>
        </div>
        <div className='right user'>
          <div className='userprofile' />
        </div>
      </div>
    )
  }
}
