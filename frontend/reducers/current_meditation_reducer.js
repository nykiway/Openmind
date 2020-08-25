import { 
  RECEIVE_CURRENT_MEDITATION,
  TOGGLE_PLAY,
} from '../actions/current_meditation_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch(action.type) {
    case RECEIVE_CURRENT_MEDITATION:
      // this one worked!
      // action.meditation.isPlaying = true;
      // newState.meditation = action.meditation;
      // return newState;
      action.meditation.isPlaying = true;
      // newState.meditation = action.meditation;
      return Object.assign({}, action.meditation );

    case TOGGLE_PLAY:
      if (newState.meditation.isPlaying) newState.meditation.isPlaying = false;
      else newState.meditation.isPlaying = true;
      return newState;
    default:
      return newState;
  }
};