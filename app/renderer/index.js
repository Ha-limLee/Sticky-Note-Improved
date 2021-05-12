import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import NoteIndex from './components/lobby/NoteIndex'

export default class App extends Component {
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
