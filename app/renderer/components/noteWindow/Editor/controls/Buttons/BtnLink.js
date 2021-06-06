import React, { Component } from 'react'
import {
  LinkIcon, CheckIcon
} from '@primer/octicons-react'
import { BtnClassNameRaw } from '../../../../../configs'

export default class BtnLink extends Component {
  constructor (props) {
    super(props)
    this.state = {
      targetLink: 'https://'
    }
    this.changeInputFieldDisplay = this.changeInputFieldDisplay.bind(this)
  }

  changeInputFieldDisplay () {
    const e = document.querySelector('div#linkInputField')
    if (e.style.display === 'block') {
      e.style.display = 'none'
    } else {
      e.style.display = 'block'
    }
  }

  clickHandlerLink () {
    document.execCommand('createLink', false, this.state.targetLink)
  }

  changeHandlerLink (e) {
    this.setState({
      targetLink: e.target.value
    })
  }

  render () {
    const doOpen = () => {
      this.changeInputFieldDisplay()
    }
    const doLink = () => {
      this.clickHandlerLink()
      this.changeInputFieldDisplay()
    }
    const doChange = (e) => {
      this.changeHandlerLink(e)
    }

    return (
      <div className='btn wrapper'>
        <div className={BtnClassNameRaw} onClick={doOpen}>
          <LinkIcon size={16} />
        </div>
        <div id='linkInputField' className='input-field link hidden'>
          <label htmlFor='linkInputField'>
            <input type='text' name='linkInputField' onChange={doChange} />
          </label>
          <div className={BtnClassNameRaw} onClick={doLink}>
            <CheckIcon size={16} />
          </div>
        </div>
      </div>
    )
  }
}
