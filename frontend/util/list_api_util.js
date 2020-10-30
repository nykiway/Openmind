export const fetchLists = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/lists',
    data
  })
};

export const fetchList = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/lists/${id}`
  })
};

export const createList = list => {
  return $.ajax({
    method: 'POST',
    url: 'api/lists',
    data: { list }
  })
}

export const updateList = (list, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/lists/${id}`,
    data: { list }
  })
}

export const destroyList = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/lists/${id}`
  })
};