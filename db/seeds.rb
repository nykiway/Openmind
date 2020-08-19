# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all


# Users:

demouser = User.create!(
  username: 'demouser',
  email: 'demouser@gmail.com',
  password: '12345678'
)

dalailama = User.create!(
  username: 'thelamadama',
  email: 'thelamadama@outlook.com',
  password: 'tha_chosen1'
)

siddhartha = User.create!(
  username: 'buddahbuddy',
  email: 'buddhabuddy@gmail.com',
  password: 'sunmoontruth108'
)

confucius = User.create!(
  username: 'confuciussays',
  email: 'goldenrule@yahoo.com',
  password: 'moralsnstuff'
)

# Meditations

# m1 = Meditation.new({name: 'Find Your Focus', category: 'Focus', duration: '00:04:20'})
# song = EzDownload.open('link here')
# m1.mp3_file.attach(io: meditation, filename: 'Find Your Focus.mp3')
# m1.save!