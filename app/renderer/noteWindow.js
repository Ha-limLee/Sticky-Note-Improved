import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/commons/Header'
import Editor from './components/noteWindow/Editor'

export default class App extends Component {
  constructor (props) {
    super()
  }

  setTitle (title) {
    document.title = title
  }

  render () {
    return (
      <div>
        <Header
          title='안녕하세요.'
          editable='true'
        />
        <Editor />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
