json.list do
  json.extract! @list, :id, :title, :userId, :meditationIds
end