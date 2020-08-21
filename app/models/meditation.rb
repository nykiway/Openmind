class Meditation < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :categories, presence: true

  has_one_attached :mp3_file
end
