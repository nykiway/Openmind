import { 
  RECEIVE_CURRENT_MEDITATION, NULL_CURRENT_MEDITATION
} from '../actions/current_meditation_actions';

import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch(action.type) {
    case RECEIVE_CURRENT_MEDITATION:
      return Object.assign({}, action.meditation );
    case NULL_CURRENT_MEDITATION:
      return {};
    default:
      return newState;
  }
};