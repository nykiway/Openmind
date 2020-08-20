# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# look at docs for me!!
require 'open-uri' 

User.delete_all
Meditation.delete_all


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

m1 = Meditation.new({name: 'Acceptance & Letting Go', category: 'sadness', duration: '00:00:53'})
song = open_uri('https://openmind-seeds.s3-us-west-1.amazonaws.com/Acceptance+%26+Letting+Go.mp3')
m1.mp3_file.attach(io: meditation, filename: 'Acceptance & Letting Go.mp3')
m1.save!