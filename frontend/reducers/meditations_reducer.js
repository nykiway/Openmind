import { merge } from "lodash";

import {
  RECEIVE_MEDITATIONS,
  RECEIVE_MEDITATION
} from '../actions/meditation_actions';

import {
  RECEIVE_LIST_MEDITATION,
  REMOVE_LIST_MEDITATION
} from '../actions/list_meditation_actions';

const meditationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MEDITATIONS:
      return action.meditations;
    case RECEIVE_MEDITATION:
      return merge({}, { [action.meditations.id]: action.meditation })
    case RECEIVE_LIST_MEDITATION:
      return merge({}, state, action.meditaiton);
    case REMOVE_LIST_MEDITATION:
      newState = Object.assign({}, state);
      delete newState[action.meditationId];
      return newState;
    default:
      return state;
  }
}

export default meditationsReducer;