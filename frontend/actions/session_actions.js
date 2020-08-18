import * as SessionAPI from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = (formUser) => (dispatch) => {
  return SessionAPI.login(formUser).then((user) => {
    return dispatch(receiveCurrentUser(user));
  });
};

export const signup = (formUser) => (dispatch) => {
  return SessionAPI.signup(formUser).then((user) => {
    dispatch(receiveCurrentUser(user));
  });
};

export const logout = () => (dispatch) => {
  return SessionAPI.logout().then((user) => {
    dispatch(logoutCurrentUser());
  });
};
