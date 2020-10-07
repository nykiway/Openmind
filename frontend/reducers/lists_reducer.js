import { merge } from "lodash";

import {
  RECEIVE_LISTS,
  RECEIVE_LIST
} from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      const newList = { [action.list.id]: action.list };
      return Object.assign({}, state, newList);
    default:
      return state;
  }
}

export default listsReducer;