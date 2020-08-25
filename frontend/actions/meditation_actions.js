import * as MeditationAPI from '../util/meditation_api_util';

export const RECEIVE_MEDITATIONS = "RECEIVE_MEDITATIONS";
export const RECEIVE_MEDITATION = "RECEIVE_MEDITATION";


const receiveMeditations = (meditations) => { 
  return {
    type: RECEIVE_MEDITATIONS,
    meditations
  }
};

const receiveMeditation = ({ meditation }) => {
  return {
    type: RECEIVE_MEDITATION,
    meditation,
  }
}

// Thunk Actions

export const fetchMeditations = () => dispatch => {
  return MeditationAPI.fetchMeditations()
    .then((meditations) => dispatch(receiveMeditations(meditations)))
};

export const fetchMeditation = (id) => dispatch => {
  return MeditationAPI.fetchMeditation(id)
    .then(meditation => dispatch(receiveMeditation(meditation)))
}