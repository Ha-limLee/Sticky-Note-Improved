import * as cheerio from 'cheerio'
import {
  UserLoginDoneSrc,
  QuerySelectorName,
  QuerySelectorMajor,
  REGEXStudentID
} from './variables'

function getUserData () {
  // console.log('Called `getUserData`')
  const xhr = new XMLHttpRequest()
  xhr.open('GET', UserLoginDoneSrc)
  xhr.send()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const $ = cheerio.load(xhr.responseText)
      // console.log($(QuerySelectorName).text())

      let flag = false

      const resID = xhr.responseText.match(REGEXStudentID).groups.stuid
      if (resID) {
        localStorage.setItem('userprofileID', resID)
        flag = true
      }

      const resName = $(QuerySelectorName).text()
      if (resName) {
        localStorage.setItem('userprofileName', resName)
        flag = true
      }

      const resMajor = $(QuerySelectorMajor).text()
      if (resMajor) {
        localStorage.setItem('userprofileMajor', resMajor)
        flag = true
      }

      if (flag) localStorage.setItem('userprofileExists', true)
    }
  }
}

export { getUserData }
