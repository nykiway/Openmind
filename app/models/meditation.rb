class Meditation < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  # validates :categories

  has_many :lists,
    class_name: :List

  has_one_attached :mp3_file
end
