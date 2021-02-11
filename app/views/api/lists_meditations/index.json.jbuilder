@list_meditations.each do |list_meditation|
  json.set! list_meditation.id do
    json.extract! list_meditation, :id, :list_id, :meditation_id
  end
end
