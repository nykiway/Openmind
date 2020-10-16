import { merge } from "lodash";

import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  CREATE_LIST
} from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      const newList = { [action.list.id]: action.list };
      return Object.assign({}, state, newList);
    case CREATE_LIST:
      // return Object.assign({}, state).new = action.list.data
      newState.new = action.list.data;
      return newState;
    default:
      return state;
  }
}

export default listsReducer;