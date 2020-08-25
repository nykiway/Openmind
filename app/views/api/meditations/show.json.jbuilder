json.extract! @meditation, :id, :name, :categories
json.mp3 url_for(@meditation.mp3_file)