import { combineReducers } from 'redux';
import modal from './modals_reducer';
import currentMeditation from './current_meditation_reducer';

export default combineReducers({
  modal,
  currentMeditation
});