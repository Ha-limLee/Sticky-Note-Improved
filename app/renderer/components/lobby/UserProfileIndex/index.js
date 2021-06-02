import React, { Component } from 'react'
import { HashRouter as BrowserRouter, Route, Link } from 'react-router-dom'
import UserProfile from '../../commons/UserProfile'
import {
  UserLoginSrc,
  UserLoginDoneSrc
} from '../../../configs'
import { getUserData } from '../../../../../parser/jnuportal'

export default class UserProfileIndex extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div className='userprofile_index'>
        <BrowserRouter>
          <Route exact path='/userprofile' component={UserProfileDisplay} />
          <Route exact path='/user_login' component={UserLoginDisplay} />
        </BrowserRouter>
      </div>
    )
  }
}

class UserProfileDisplay extends Component {
  constructor (props) {
    super()
    this.state = {
      userInformation: window.localStorage.getItem('userInformation')
    }
  }

  render () {
    let userName = <Link to='/user_login' className='link_component unknown_user'>비로그인 상태입니다.</Link>
    let userEmail = <Link to='/user_login' className='link_component unknown_user'><u>로그인하세요.</u></Link>
    if (this.state.userInformation) {
      userEmail = this.state.userInformation.id + '@jnu.ac.kr'
      userName = this.state.userInformation.userName
    }

    return (
      <div>
        <div className='user_information'>
          <div className='userimage'>
            <div className='wrapper'>
              <UserProfile type='large' />
            </div>
          </div>
          <div className='usersummary'>
            <div className='username'>{userName}</div>
            <div className='useremail'>{userEmail}</div>
          </div>
        </div>
        <div className='summary'>
          <div className='statistics_frame'></div>
        </div>
      </div>
    )
  }
}

class UserLoginDisplay extends Component {
  constructor (props) {
    super()
  }

  
  componentDidMount () {
    const webviewElement = document.getElementById('userlogin_display__webview')
    webviewElement.addEventListener('dom-ready', () => {
      console.log(webviewElement.getURL() === UserLoginDoneSrc)
      if (webviewElement.getURL() === UserLoginDoneSrc) {
        const userData = getUserData()
      }
    })
  }
  

  render () {
    return (
      <div className='userlogin_display'>
        <webview id='userlogin_display__webview' src={UserLoginSrc} nodeintegration='true' />
      </div>
    )
  }
}
