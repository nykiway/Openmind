import { combineReducers } from 'redux';
import modal from './modals_reducer';
import currentMeditation from './current_meditation_reducer';
import isPlaying from './is_playing_reducer';

export default combineReducers({
  modal,
  currentMeditation,
  isPlaying
});