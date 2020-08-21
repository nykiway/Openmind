@meditations.each do |meditation|
  json.set! meditation.id do
    json.partial! 'meditation', meditation: meditation
  end
end
