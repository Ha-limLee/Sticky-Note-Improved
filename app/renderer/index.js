import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/commons/Header'
import NoteIndex from './components/lobby/NoteIndex'

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
