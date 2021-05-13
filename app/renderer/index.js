import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import NoteIndex from './components/lobby/NoteIndex'

export default class App extends Component {
  constructor () {
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
      /*
        <button onClick={addNote}>
        노트 추가
      </button>*/
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
