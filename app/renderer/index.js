import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/commons/Header'
import NoteIndex from './components/lobby/NoteIndex'

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
        <Header
          title='안녕하세요.'
        />
        <NoteIndex />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
