import {
  UserLoginSrc,
  UserLoginDoneSrc,
  QuerySelectorName,
  QuerySelectorMajor,
  REGEXStudentID,
  ContentType,
  LoginInputElementRequired,
  REGEXLoginInputElement
} from './variables'

export default class Parser {
  getUserData () {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 201) {
          console.log(xhr.responseText)
          xhr.open('POST', UserLoginDoneSrc)
          xhr.setRequestHeader('Content-Type', ContentType)
          xhr.send(JSON.stringify({ LoginInputElementRequired: 'hello' }))
        }
      }
    }
    xhr.open('GET', UserLoginDoneSrc)
    xhr.send()
  }
}
const webviewElement = document.getElementById('userlogin_display__webview')
webviewElement.addEventListener('dom-ready', () => {
  console.log(webviewElement.getURL() === UserLoginDoneSrc)
  if (webviewElement.getURL() === UserLoginDoneSrc) {
  }
})
