import React, { Component } from 'react'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      titleValue: 'Untitled Note'
    }
  }

  handleChangeTitle (e) {
    this.setState({
      titleValue: e.target.value
    })
    document.title = this.state.titleValue
  }

  render () {
    const handleChangeTitle = (e) => {
      this.handleChangeTitle(e)
    }
    let pageTitle = <h1 className='page_title'>{this.props.title}</h1>
    if (this.props.editable === 'true') {
      pageTitle = <input className='page_title editable' type='text' defaultValue={this.state.title} onChange={handleChangeTitle} value={this.state.titleValue} />
    }

    return (
      <div className='header'>
        <div className='left'>
          <p className='logo common'>Sticky Note</p>
          {pageTitle}
        </div>
        <div className='right user'>
          <div className='userprofile' />
        </div>
      </div>
    )
  }
}
