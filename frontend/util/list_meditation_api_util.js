export const fetchListMeditation = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/list_meditations/${id}`
  })
};

export const createListMeditation = (listMeditation) => {
  return $.ajax({
    method: 'POST',
    url: 'api/list_meditations',
    data: { listMeditation }
  })
}

export const destroyListMeditation = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/list_meditations/${id}`
  })
}