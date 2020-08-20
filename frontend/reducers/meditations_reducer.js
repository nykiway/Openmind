import {
  RECEIVE_ALL_MEDITATIONS,
  RECEIVE_MEDITATION
} from '../actions/meditation_actions';

const meditationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MEDITATIONS:
      return Object.assign({}, state, action.meditations);
    case RECEIVE_MEDITATION:
      return Object.assign({}, state, { [action.meditation.id]: action.meditation });
    default:
      return state;
  }
}

export default meditationsReducer;