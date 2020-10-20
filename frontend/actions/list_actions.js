import * as ListAPI from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const CREATE_LIST = "CREATE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

const receiveLists = (lists) => {
  return {
    type: RECEIVE_LISTS,
    lists
  }
};

const receiveList = (list) => {
  return {
    type: RECEIVE_LIST,
    list,
  }
}

const createAList = ( list ) => {
  return {
    type: CREATE_LIST,
    list
  }
}

const removeList = (listId) => {
  return {
    type: REMOVE_LIST,
    listId,
  }
}

// Thunk Actions

export const fetchLists = () => dispatch => {
  return ListAPI.fetchLists()
    .then((lists) => dispatch(receiveLists(lists)))
};

export const fetchList = (id) => dispatch => {
  return ListAPI.fetchList(id)
    .then(list => dispatch(receiveList(list)))
};

export const createList = list => dispatch => {
  return ListAPI.createList(list)
    .then(list => dispatch(createAList(list)))
};

export const deleteList = (id) => dispatch => {
  return ListAPI.destroyList(id)
    .then(() => dispatch(removeList(id)))
};