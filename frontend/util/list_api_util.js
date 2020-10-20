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