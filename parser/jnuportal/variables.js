/* JNU Portal URL Data */
const UserLoginSrc = 'https://portal.jnu.ac.kr/Common/Login/Login.aspx'
const UserLoginDoneSrc = 'https://portal.jnu.ac.kr/Pages/Default.aspx'
const UserEClassSrc = 'https://sel.jnu.ac.kr'

/* JNU Portal User Information Parsing Data */
const QuerySelectorName = 'div.media-body h5.h5.g-font-weight-600.g-color-gray-dark-v2'
const QuerySelectorMajor = 'div.media-body span.g-color-portal.g-font-weight-600.g-font-size-15'
const REGEXStudentID = /var USER_ID.?=.?'([0-9].*?)\|(?<stuid>[0-9].*?)\|/

/* JNU Portal User Login Parsing Data */
// 21.06.02: Useless Data
const ContentType = 'application/x-www-form-urlencoded'
const LoginInputElementRequired = '__VIEWSTATE'
const REGEXLoginInputElement = /<<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="(?<value>[a-zA-Z0-9=/].*?)" \/>/gm

export {
  UserLoginSrc,
  UserLoginDoneSrc,
  UserEClassSrc,
  QuerySelectorName,
  QuerySelectorMajor,
  REGEXStudentID,
  ContentType,
  LoginInputElementRequired,
  REGEXLoginInputElement
}
