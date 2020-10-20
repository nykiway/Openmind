import { merge } from "lodash";

import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  CREATE_LIST,
  DELETE_LIST
} from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      const newList = { [action.list.id]: action.list };
      return Object.assign({}, state, newList);
    case CREATE_LIST:
      newState.new = action.list.data;
      return newState;
    case DELETE_LIST:
      let newState = Object.assign({}, state);
      delete newState[action.list.id];
      return newState;
    default:
      return state;
  }
}

export default listsReducer;