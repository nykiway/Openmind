json.list_meditations do
  json.extract! @list_meditation, :id, :list_id, :meditation_id
end