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

function getUserData () {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.responseText)
        const InputElement = xhr.responseText.match(REGEXLoginInputElement)
        if (!InputElement) return false // bug handle
        console.log(InputElement)
        xhr.open('POST', UserLoginDoneSrc)
        xhr.setRequestHeader('Content-Type', ContentType)
        xhr.send(JSON.stringify({ LoginInputElementRequired: 'hello' }))
      }
    }
  }
  xhr.open('GET', UserLoginDoneSrc)
  xhr.send()
}

export { getUserData }
