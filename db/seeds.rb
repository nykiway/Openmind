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

m1 = Meditation.new({name: 'Acceptance & Letting Go', categories: ['sadness', 'acceptance', 'letting go'], duration: '00:00:53'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Acceptance+%26+Letting+Go.mp3')
m1.mp3_file.attach(io: meditation, filename: 'Acceptance & Letting Go.mp3')
m1.save!

m2 = Meditation.new({name: 'Aid with Anxiety & Stress', categories: ['anxiety', 'stress', 'relax'], duration: '00:01:53'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Aid+with+Anxiety+%26+Stress.mp3')
m2.mp3_file.attach(io: meditation, filename: 'Aid with Anxiety & Stress.mp3')
m2.save!

m3 = Meditation.new({name: 'Appreciate Nature', categories: ['nature', 'gratitude'], duration: '00:02:37'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Appreciate+Nature.mp3')
m3.mp3_file.attach(io: meditation, filename: 'Appreciate Nature.mp3')
m3.save!

m4 = Meditation.new({name: 'Become Sleepy', categories: ['sleep', 'relax'], duration: '00:04:33'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Become+Sleepy.mp3')
m4.mp3_file.attach(io: meditation, filename: 'Become Sleepy.mp3')
m4.save!

m5 = Meditation.new({name: 'Breathe', categories: ['mindfulness', 'breathe', 'relax'], duration: '00:01:10'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Breathe.mp3')
m5.mp3_file.attach(io: meditation, filename: 'Breathe.mp3')
m5.save!

m6 = Meditation.new({name: 'Breathing for Kids', categories: ['mindfulness', 'for kids', 'relax'], duration: '00:01:14'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Breathing+Meditation+for+Kids.mp3')
m6.mp3_file.attach(io: meditation, filename: 'Breathing Meditation for Kids.mp3')
m6.save!

m7 = Meditation.new({name: 'Experience Your Food', categories: ['mindfulness, food'], duration: '00:01:11'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Experience+Your+Food.mp3')
m7.mp3_file.attach(io: meditation, filename: 'Experience Your Food.mp3')
m7.save!

m8 = Meditation.new({name: 'Find Your Focus - Sunday Scaries', categories: ['work', 'focus', 'productivity'], duration: '00:04:19'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Acceptance+%26+Letting+Go.mp3')
m8.mp3_file.attach(io: meditation, filename: 'Find Your Focus - Sunday Scaries.mp3')
m8.save!

m9 = Meditation.new({name: 'Get More From Your Workout', categories: ['productivity, health, fitness'], duration: '00:01:11'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Get+More+From+Your+Workout.mp3')
m9.mp3_file.attach(io: meditation, filename: 'Get More From Your Workout.mp3 ')
m9.save!

m10 = Meditation.new({name: 'Getting a Good Nights Rest', categories: ['sleep', 'relax'], duration: '00:01:09'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Getting+a+Good+Nights+Rest.mp3')
m10.mp3_file.attach(io: meditation, filename: 'Getting a Good Nights Rest.mp3')
m10.save!

m11 = Meditation.new({name: 'Impatience', categories: ['anxiety', 'stress', 'gratitude'], duration: '00:04:14'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Impatience.mp3')
m11.mp3_file.attach(io: meditation, filename: 'Impatience.mp3')
m11.save!

m12 = Meditation.new({name: 'Kindness - Be Nice to Yourself', categories: ['graditude', 'forgiveness', 'kindness'], duration: '00:02:19'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Kindness+How+to+be+nicer+to+yourself.mp3')
m12.mp3_file.attach(io: meditation, filename: 'Kindness How to be nicer to yourself.mp3')
m12.save!

m13 = Meditation.new({name: 'Learn Patience', categories: ['patience', 'kindness'], duration: '00:01:51'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Learn+Patience.mp3')
m13.mp3_file.attach(io: meditation, filename: 'Learn Patience.mp3')
m13.save!

m14 = Meditation.new({name: 'Let Go of Stress', categories: ['letting go', 'stress', 'forgiveness'], duration: '00:01:07'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Let+Go+of+Stress.mp3')
m14.mp3_file.attach(io: meditation, filename: 'Let Go of Stress.mp3')
m14.save!

m15 = Meditation.new({name: 'Meditation for Gratitude.', categories: ['gratitude', 'relax', 'peace'], duration: '00:03:40'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Meditation+for+Gratitude.mp3')
m15.mp3_file.attach(io: meditation, filename: 'Meditation for Gratitude.mp3')
m15.save!

m16 = Meditation.new({name: 'Meditation for Stress', categories: ['stress', 'depression', 'anxiety'], duration: '00:01:56'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Meditation+for+Stress.mp3')
m16.mp3_file.attach(io: meditation, filename: 'Meditation for Stress.mp3')
m16.save!

m17 = Meditation.new({name: 'Meditation for Two', categories: ['relax', 'relationships', 'couple'], duration: '00:01:30'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Meditation+for+Two.mp3')
m17.mp3_file.attach(io: meditation, filename: 'Meditation for Two.mp3')
m17.save!

m18 = Meditation.new({name: 'Obstacles & Doubt', categories: ['doubt', 'fear', 'anxiety'], duration: '00:04:16'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Obstacles+%26+Doubt.mp3')
m18.mp3_file.attach(io: meditation, filename: 'Obstacles & Doubt.mp3')
m18.save!

m19 = Meditation.new({name: 'Positive Day Meditation', categories: ['positivity', 'gratitude, joy'], duration: '00:03:03'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Positive+Day+Meditation.mp3')
m19.mp3_file.attach(io: meditation, filename: 'Positive Day Meditation.mp3')
m19.save!

m20 = Meditation.new({name: 'Reflection - Sunday Scaries', categories: ['work', 'gratitude', 'reflection', 'relax'], duration: '00:03:54'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Reflection+-+Sunday+Scaries.mp3')
m20.mp3_file.attach(io: meditation, filename: 'Reflection - Sunday Scaries.mp3')
m20.save!

m21 = Meditation.new({name: 'Self Care - Sunday Scaries', categories: ['self esteem', 'work', 'self care'], duration: '00:04:21'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Self+Care+-+Sunday+Scaries.mp3')
m21.mp3_file.attach(io: meditation, filename: 'Self Care - Sunday Scaries.mp3')
m21.save!

m21 = Meditation.new({name: 'Setting Intentions - Sunday Scaries', categories: ['intentions', 'work', 'productivity', 'focus'], duration: '00:03:53'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Setting+Intentions+-+Sunday+Scaries.mp3')
m21.mp3_file.attach(io: meditation, filename: 'Setting Intentions - Sunday Scaries.mp3')
m21.save!

m22 = Meditation.new({name: 'Unwind', categories: ['relax'], duration: '00:01:10'})
meditation = open('https://openmind-seeds.s3-us-west-1.amazonaws.com/meditations/Unwind.mp3')
m22.mp3_file.attach(io: meditation, filename: 'Unwind.mp3')
m22.save!
