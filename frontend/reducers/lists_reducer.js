import { merge } from "lodash";

import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  CREATE_LIST,
  REMOVE_LIST
} from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;

    case RECEIVE_LIST:
      const newList = { [action.listId]: action.list };
      return Object.assign({}, state, newList);

    case CREATE_LIST:
      newState = merge({}, state);
      newState.new = action.list.data;
      return newState;

    case REMOVE_LIST:
      newState = Object.assign({}, state);
      delete newState[action.listId];
      return newState;
    default:
      return state;
  }
}

export default listsReducer;