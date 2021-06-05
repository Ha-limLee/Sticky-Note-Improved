import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/commons/Header'
import Editor from './components/noteWindow/Editor'

export default class App extends Component {
  constructor (props) {
    super()
    this.id = window.api.getNoteId()
  }

  setTitle (title) {
    document.title = title
  }

  componentDidMount () {
    console.log('in app', this.id)
  }

  componentWillUnmount () {
    window.api.beforeUnmound('Does it work?')
  }

  render () {
    const onChangeHandler = () => {
      this.setTitle('Sticky Note')
    }
    return (
      <div>
        <Header
          title='안녕하세요.'
          editable='true'
          onChange={onChangeHandler}
        />
        <Editor id={this.id} />
        {/* <button onClick={testHandler}>log id</button> */}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
