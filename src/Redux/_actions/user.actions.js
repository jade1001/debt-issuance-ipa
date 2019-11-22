import { userConstants } from '../_constants/user.constants'
import { userService } from '../_services/user.service'
import { alertActions } from './alert.actions'
import { history } from '../_helpers/history'

export const userActions = {
  login,
  logout,
}

function login(Email, Password) {
  return dispatch => {
    dispatch(request({ Email }))

    // userService.login(Email, Password).then(
    //   user => {
    //     dispatch(success(user))
    //     history.push('/')
    //   },
    //   error => {
    //     dispatch(failure(error.toString()))
    //     dispatch(alertActions.error(error.toString()))
    //   }
    // )
    if (userService.login(Email, Password)) {
      dispatch(success(Email))
      history.push('/')
    } else {
      dispatch(failure('Wrong email or password'))
      dispatch(alertActions.error('Wrong email or password'))
    }
  }

  function request(Email) {
    return { type: userConstants.LOGIN_REQUEST, Email }
  }
  function success(Email) {
    return { type: userConstants.LOGIN_SUCCESS, Email }
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  userService.logout()
  return { type: userConstants.LOGOUT }
}
