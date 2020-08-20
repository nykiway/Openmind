import * as SessionAPI from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const NEW_USER = "NEW_USER";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  }
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const newUserDetails = currentUser => ({
  type: NEW_USER,
  currentUser
})

export const login = (formUser) => (dispatch) => {
  return SessionAPI.login(formUser)
    .then((user) => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveSessionErrors(error.responseJSON)))
};

export const signup = (formUser) => (dispatch) => {
  return SessionAPI.signup(formUser)
    .then((user) => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveSessionErrors(error.responseJSON)))
};

export const logout = () => (dispatch) => {
  return SessionAPI.logout()
    .then(() => dispatch(logoutCurrentUser()),
      error => dispatch(receiveSessionErrors(error.responseJSON)))
};

export const createNewUser = user => (dispatch) => {
  return SessionAPI.signup(user)
    .then(() => dispatch(newUserDetails(user)),
    error => dispatch(receiveSessionErrors(error.responseJSON)))
};