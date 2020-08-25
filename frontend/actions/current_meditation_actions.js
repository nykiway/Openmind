import * as MeditationAPI from '../util/meditation_api_util';

export const RECEIVE_CURRENT_MEDITATION = "RECEIVE_CURRENT_MEDITATION";
export const TOGGLE_PLAY = "TOGGLE PLAY";

export const receiveCurrentMeditation = (meditation) => {
  return {
    type: RECEIVE_CURRENT_MEDITATION,
    meditation,
  };
};

export const toggleMeditation = (meditation) => {
  return {
    type: TOGGLE_PLAY,
  };
};

// Thunk Actions

export const fetchCurrentMeditation = (id) => {
  return (dispatch) => {
    return MeditationAPI.fetchMeditation(id).then((meditation) => {
      dispatch(receiveCurrentMeditation(meditation));
    });
  };
};