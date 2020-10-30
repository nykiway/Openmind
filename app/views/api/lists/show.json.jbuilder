json.list do
  json.extract! @list, :id, :title, :description, :userId, :meditationIds
end