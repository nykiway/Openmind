import { TOGGLE_PLAY } from "../actions/current_meditation_actions";

export default (state = false, action) => {
  Object.freeze(state);

  switch (action.type) {
    case TOGGLE_PLAY:
      if (state) {
        return false;
      } else {
        return true;
      }
    default:
      return state;
  }
};
