class Meditation < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :category, presence: true
  validates :duration, presence: true

  has_one_attached :mp3_file
end
