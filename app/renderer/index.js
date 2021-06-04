import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as BrowserRouter, Route } from 'react-router-dom'
import Header from './components/commons/Header'
import NoteIndex from './components/lobby/NoteIndex'
import UserProfileIndex from './components/lobby/UserProfileIndex'

/**
 * App 컴포넌트는 Sticky Note를 구성하는 모든 컴포넌트의 최상위 컴포넌트입니다.
 *
 * @returns App: Component
 */
export default class App extends Component {
  constructor (pros) {
    super()
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <Route exact path='/' component={HomeDisplay} />
          <Route exact path='/userprofile' component={ProfileDisplay} />
          <Route exact path='/user_login' component={ProfileDisplay} />
        </BrowserRouter>
      </div>
    )
  }
}

class HomeDisplay extends Component {
  render () {
    return (
      <div>
        <Header
          title='안녕하세요.'
          enableProfile='true'
          enableHomeLink='true'
        />
        <NoteIndex />
      </div>
    )
  }
}

class ProfileDisplay extends Component {
  render () {
    return (
      <div>
        <Header
          title='Sticky Note 요약'
          enableProfile='false'
          enableHomeLink='true'
        />
        <UserProfileIndex />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
