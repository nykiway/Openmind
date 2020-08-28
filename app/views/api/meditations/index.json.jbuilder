@meditations.each do |meditation|
  json.set! meditation.id do
    json.extract! meditation, :id, :name, :categories, :duration
    json.mp3 url_for(meditation.mp3_file)
  end
end
