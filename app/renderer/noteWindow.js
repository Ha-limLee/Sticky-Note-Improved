import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/commons/Header'
import Editor from './components/noteWindow/Editor'

export default class App extends Component {
  constructor (props) {
    super()
    this.state = {
      id: '' // It will be used to save and load data
    }
  }

  setTitle (title) {
    document.title = title
  }

  componentDidMount () {
    this.setState({
      id: window.api.getNoteId()
    })
  }

  componentWillUnmount () {
    window.api.beforeUnmound('Does it work?')
  }

  render () {
    const onChangeHandler = () => {
      this.setTitle('Sticky Note')
    }
    const testHandler = () => {
      this.test()
    }
    return (
      <div>
        <Header
          title='안녕하세요.'
          editable='true'
          onChange={onChangeHandler}
        />
        <Editor id={this.state.id} />
        <button onClick={testHandler}>log id</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
