import { merge } from "lodash";

import {
  RECEIVE_MEDITATIONS,
  RECEIVE_MEDITATION
} from '../actions/meditation_actions';

const meditationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MEDITATIONS:
      return action.meditations;
    case RECEIVE_MEDITATION:
      return merge({}, { [action.meditations.id]: action.meditation })
    default:
      return state;
  }
}

export default meditationsReducer;