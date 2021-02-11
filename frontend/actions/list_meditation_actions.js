import * as ListMeditationAPI from '../util/list_meditation_api_util';

export const RECEIVE_LIST_MEDITATION = 'RECEIVE_LIST_MEDITATION';
export const REMOVE_LIST_MEDITATION = 'REMOVE_LIST_MEDITATION';

export const receiveListMeditation = (listMeditation) => {
  return {
    type: RECEIVE_LIST_MEDITATION,
    listMeditation
  }
};

const removeListMeditation = (listMeditationId) => {
  return {
    type: REMOVE_LIST_MEDITATION,
    listMeditationId
  }
}

// Thunk Actions

export const fetchListMeditation = (id) => dispatch => {
  return ListMeditationAPI.fetchListMeditation(id)
    .then(listMeditation => dispatch(receiveListMeditation(listMeditation)))
};

export const deleteListMeditation = (id) => dispatch => {
  return ListMeditationAPI.destroyListMeditation(id)
    .then(() => dispatch(removeListMeditation(id)))
};

export const createListMeditation = (listMeditation) => dispatch => {
  return ListMeditationAPI.createListMeditation(listMeditation)
    .then((listMeditation) => dispatch(receiveListMeditation(listMeditation)))
};