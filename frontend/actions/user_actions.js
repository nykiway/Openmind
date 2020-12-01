// import * as SessionAPI from "../util/session_api_util";
import * as UserAPI from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});


export const updateUser = (user, id) => (dispatch) => {
  return UserAPI.updateUser(user, id)
    .then((user) => dispatch(receiveCurrentUser(user)))
}