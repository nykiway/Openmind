export const fetchMeditations = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/meditations',
    data
  })
};

export const fetchMeditation = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/meditations/${id}`
  })
}