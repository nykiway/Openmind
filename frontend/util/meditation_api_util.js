export const fetchMeditations = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/meditations'
  })
};

export const fetchMeditation = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/meditations/${id}`
  })
}