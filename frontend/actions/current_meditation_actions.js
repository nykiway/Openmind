import * as MeditationAPI from '../util/meditation_api_util';

export const RECEIVE_CURRENT_MEDITATION = "RECEIVE_CURRENT_MEDITATION";
export const TOGGLE_PLAY = "TOGGLE PLAY";

export const receiveCurrentMeditation = (meditation) => {
  return {
    type: RECEIVE_CURRENT_MEDITATION,
    meditation
  };
};

export const toggleMeditation = () => {
  return {
    type: TOGGLE_PLAY,
  };
};

// Thunk Actions

export const fetchCurrentMeditation = (id) => (dispatch) => {
  return MeditationAPI.fetchCurrentMeditation(id).then((meditation) =>
    dispatch(receiveCurrentMeditation(meditation))
  );
};