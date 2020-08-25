json.extract! @song, :id, :title, :album_id
json.mp3 url_for(@song.mp3_file)