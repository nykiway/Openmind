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

m1 = Meditation.new({name: 'Acceptance & Letting Go', category: ['sadness', 'acceptance', 'letting go'], duration: '00:00:53'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Acceptance+%26+Letting+Go.mp3')
m1.mp3_file.attach(io: meditation, filename: 'Acceptance & Letting Go.mp3')
m1.save!

m2 = Meditation.new({name: 'Aid with Anxiety & Stress', category: ['anxiety', 'stress', 'relax'], duration: '00:01:19'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Aid+with+Anxiety+%26+Stress.mp3')
m2.mp3_file.attach(io: meditation, filename: 'Aid with Anxiety & Stress.mp3')
m2.save!

m3 = Meditation.new({name: 'Appreciate Nature', category: ['nature', 'gratitude'], duration: '00:02:37'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Appreciate+Nature.mp3')
m3.mp3_file.attach(io: meditation, filename: 'Appreciate Nature.mp3')
m3.save!

m4 = Meditation.new({name: 'Become Sleepy', category: ['sleep', 'relax'], duration: '00:04:33'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Become+Sleepy.mp3')
m4.mp3_file.attach(io: meditation, filename: 'Become Sleepy.mp3')
m4.save!

m5 = Meditation.new({name: 'Breathe', category: ['mindfulness', 'breathe', 'relax'], duration: '00:01:10'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Breathe.mp3')
m5.mp3_file.attach(io: meditation, filename: 'Breathe.mp3')
m5.save!

m6 = Meditation.new({name: 'Breathing for Kids', category: ['mindfulness', 'for kids', 'relax'], duration: '00:01:14'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Breathing+Meditation+for+Kids.mp3')
m6.mp3_file.attach(io: meditation, filename: 'Breathing Meditation for Kids.mp3')
m6.save!

m7 = Meditation.new({name: 'Experience Your Food', category: ['mindfulness, food'], duration: '00:01:11'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Experience+Your+Food.mp3')
m7.mp3_file.attach(io: meditation, filename: 'Experience Your Food.mp3')
m7.save!

m8 = Meditation.new({name: 'Find Your Focus - Sunday Scaries', category: ['work', 'focus', 'productivity'], duration: '00:04:19'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Acceptance+%26+Letting+Go.mp3')
m8.mp3_file.attach(io: meditation, filename: 'Find Your Focus - Sunday Scaries.mp3')
m8.save!

m9 = Meditation.new({name: 'Get More From Your Workout', category: ['productivity, health, fitness'], duration: '00:01:11'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Get+More+From+Your+Workout.mp3')
m9.mp3_file.attach(io: meditation, filename: 'Get More From Your Workout.mp3 ')
m9.save!

m10 = Meditation.new({name: 'Getting a Good Nights Rest', category: ['sleep', 'relax'], duration: '00:01:09'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Getting+a+Good+Nights+Rest.mp3')
m10.mp3_file.attach(io: meditation, filename: 'Getting a Good Nights Rest.mp3')
m10.save!

m11 = Meditation.new({name: 'Impatience', category: ['anxiety', 'stress', 'gratitude'], duration: '00:04:14'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Impatience.mp3')
m11.mp3_file.attach(io: meditation, filename: 'Impatience.mp3')
m11.save!

m12 = Meditation.new({name: 'Kindness - Be Nice to Yourself', category: ['graditude', 'forgiveness', 'kindness'], duration: '00:02:19'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Kindness+How+to+be+nicer+to+yourself.mp3')
m12.mp3_file.attach(io: meditation, filename: 'Kindness How to be nicer to yourself.mp3')
m12.save!

m13 = Meditation.new({name: 'Learn Patience', category: ['patience', 'kindness'], duration: '00:01:51'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Learn+Patience.mp3')
m13.mp3_file.attach(io: meditation, filename: 'Learn Patience.mp3')
m13.save!

m14 = Meditation.new({name: 'Let Go of Stress', category: ['letting go', 'stress', 'forgiveness'], duration: '00:01:07'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Let+Go+of+Stress.mp3')
m14.mp3_file.attach(io: meditation, filename: 'Let Go of Stress.mp3')
m14.save!

m15 = Meditation.new({name: 'Meditation for Gratitude.', category: ['gratitude', 'relax', 'peace'], duration: '00:03:40'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Meditation+for+Gratitude.mp3')
m15.mp3_file.attach(io: meditation, filename: 'Meditation for Gratitude.mp3')
m15.save!

m16 = Meditation.new({name: 'Meditation for Stress', category: ['stress', 'depression', 'anxiety'], duration: '00:01:56'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Meditation+for+Stress.mp3')
m16.mp3_file.attach(io: meditation, filename: 'Meditation for Stress.mp3')
m16.save!

m17 = Meditation.new({name: 'Meditation for Two', category: ['relax', 'relationships', 'couple'], duration: '00:01:30'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Meditation+for+Two.mp3')
m17.mp3_file.attach(io: meditation, filename: 'Meditation for Two.mp3')
m17.save!

m18 = Meditation.new({name: 'Obstacles & Doubt', category: ['doubt', 'fear', 'anxiety'], duration: '00:04:16'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Obstacles+%26+Doubt.mp3')
m18.mp3_file.attach(io: meditation, filename: 'Obstacles & Doubt.mp3')
m18.save!

m19 = Meditation.new({name: 'Positive Day Meditation', category: ['positivity', 'gratitude, joy'], duration: '00:03:03'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Positive+Day+Meditation.mp3')
m19.mp3_file.attach(io: meditation, filename: 'Positive Day Meditation.mp3')
m19.save!

m20 = Meditation.new({name: 'Reflection - Sunday Scaries', category: ['work', 'gratitude', 'reflection', 'relax'], duration: '00:03:54'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Reflection+-+Sunday+Scaries.mp3')
m20.mp3_file.attach(io: meditation, filename: 'Reflection - Sunday Scaries.mp3')
m20.save!

m21 = Meditation.new({name: 'Self Care - Sunday Scaries', category: ['self esteem', 'work', 'self care'], duration: '00:04:21'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Self+Care+-+Sunday+Scaries.mp3')
m21.mp3_file.attach(io: meditation, filename: 'Self Care - Sunday Scaries.mp3')
m21.save!

m21 = Meditation.new({name: 'Setting Intentions - Sunday Scaries', category: ['intentions', 'work', 'productivity', 'focus'], duration: '00:03:53'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Setting+Intentions+-+Sunday+Scaries.mp3')
m21.mp3_file.attach(io: meditation, filename: 'Setting Intentions - Sunday Scaries.mp3')
m21.save!

m22 = Meditation.new({name: 'Unwind', category: ['relax'], duration: '00:01:10'})
song = EzDownload.open('https://openmind-seeds.s3-us-west-1.amazonaws.com/Unwind.mp3')
m22.mp3_file.attach(io: meditation, filename: 'Unwind.mp3')
m22.save!
