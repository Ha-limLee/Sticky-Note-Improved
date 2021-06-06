import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserProfile from '../UserProfile'

export default class Header extends Component {
  constructor (props) {
    super(props)
    let titleValue = 'Sticky Note'
    if (this.props.id) {
      const titleValueSaved = window.localStorage.getItem(this.props.id + '__title')
      if (titleValueSaved) titleValue = titleValueSaved
    }
    this.state = {
      titleValue: titleValue
    }
  }

  handleChangeTitle (e) {
    this.setState({
      titleValue: e.target.value
    })
    document.title = this.state.titleValue
    window.localStorage.setItem(this.props.id + '__title', this.state.titleValue)
  }

  render () {
    const handleChangeTitle = (e) => {
      this.handleChangeTitle(e)
    }

    let appTitle = <p className='logo common'>Sticky Note</p>
    let pageTitle = <h1 className='page_title'>{this.props.title}</h1>
    if (this.props.enableHomeLink === 'true') {
      appTitle = <Link to='/'>{appTitle}</Link>
      pageTitle = <Link to='/'>{pageTitle}</Link>
    }
    if (this.props.editable === 'true') {
      pageTitle = (
        <input
          className='page_title editable'
          type='text'
          defaultValue={this.state.title}
          onChange={handleChangeTitle}
          value={this.state.titleValue}
        />
      )
    }

    let userProfile = ''
    if (this.props.enableProfile === 'true') {
      userProfile = <UserProfile enableLink='true' type='small' />
    }

    return (
      <div className='header'>
        <div className='left'>
          {appTitle}
          {pageTitle}
        </div>
        <div className='right user'>
          {userProfile}
        </div>
      </div>
    )
  }
}
