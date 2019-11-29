// import config from 'config'
// import { authHeader } from '../_helpers'

export const userService = {
  login,
  logout
}

function login(Email, Password) {
  if (Email === 'ipa.ops@ipabank.com' && Password === 'password') {
    localStorage.setItem('user', Email)
    return true
  } else return false
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}
