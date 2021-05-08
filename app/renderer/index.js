import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>
          We are using Node.js <span id='node-version' />,
          Chromium <span id='chrome-version' />,
          and Electron <span id='electron-version' />.
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
