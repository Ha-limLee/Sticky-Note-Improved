import React, { Component } from 'react'
import { ImageIcon } from '@primer/octicons-react'
import { BtnClassNameRaw } from '../../../../../configs'

export default class BtnHeading extends Component {
  constructor (props) {
    super()
    this.fileInputRef = React.createRef()
  }

  clickHandler = () => {
    this.fileInputRef.current.change()
  }

  changeHandlerImage = () => {
    const file = document.querySelector('input[type=file]').files[0]

    const reader = new FileReader()

    reader.onload = (e) => {
      const elm = document.querySelector('.editor_body > .textarea')
      const img = document.createElement('img')

      img.className = 'attached_image'
      img.src = e.target.result

      elm.innerHTML = elm.innerHTML + img.outerHTML
      const ev = document.createEvent('HTMLEvents')
      ev.initEvent('input', true, false)
      elm.dispatchEvent(ev)

      // Allows to upload same file
      this.fileInputRef.current.value = ''
    }

    if (file) reader.readAsDataURL(file)
  }

  render () {
    const doClick = this.clickHandler
    const getImage = this.changeHandlerImage
    return (
      <div className={BtnClassNameRaw}>
        <label htmlFor='fileInputField'>
          <input
            id='fileInputField'
            className='hidden'
            accept='image/*'
            type='file'
            onChange={getImage}
            ref={this.fileInputRef}
          />
          <ImageIcon size={16} onClick={doClick}/>
        </label>
      </div>
    )
  }
}
