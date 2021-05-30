import React, { Component } from 'react'
import { ImageIcon } from '@primer/octicons-react'
import { BtnClassNameRaw } from '../../../../../configs'

export default class BtnHeading extends Component {
  clickHandler () {
    document.execCommand('formatBlock', false, '<h2>')
  }

  changeHandlerImage () {
    const file = document.querySelector('input[type=file]').files[0]
    const reader = new FileReader()
    let dataURI

    reader.addEventListener(
      'load',
      () => {
        dataURI = reader.result
        const img = document.createElement('img')
        img.className = 'attached_image'
        img.src = dataURI
        document.querySelector('.editor_body').appendChild(img)
      }, false
    )
    if (file) reader.readAsDataURL(file)
  }

  render () {
    const doClick = this.clickHandler
    const getImage = this.changeHandlerImage
    return (
      <div className={BtnClassNameRaw} onClick={doClick}>
        <label htmlFor='fileInputField'>
          <input
            id='fileInputField'
            className='hidden'
            accept='image/*'
            type='file'
            onChange={getImage}
          />
          <ImageIcon size={16} />
        </label>
      </div>
    )
  }
}
