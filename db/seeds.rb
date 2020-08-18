# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

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