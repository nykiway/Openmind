import * as MeditationAPI from '../song/api/util';

export const RECEIVE_ALL_MEDITATIONS = "RECEIVE_ALL_MEDITATIONS";
export const RECEIVE_MEDITATION = "RECEIVE_MEDITATION";

const receiveAllMeditations = (meditations) => {
  return {
    type: RECEIVE_ALL_MEDITATIONS,
    meditations
  }
};

const receiveMeditation = meditation => {
  return {
    type: RECEIVE_MEDITATION,
    meditation
  }
}

// Thunk Actions

export const requestAllMeditations = () => dispatch => {
  return MeditationAPI.fetchAllMeditations()
    .then(() => dispatch(receiveAllMeditations(meditations)))
};

export const requestMeditation = (id) => dispatch => {
  return MeditationAPI.fetchMeditation(id)
    .then(meditation => dispatch(receiveMeditation(meditation)))
}