class Meditation < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  # validates :categories

  has_many :lists,
    class_name: :List

  has_many :list_meditations
  has_many :lists, through: :list_meditations
  
  has_one_attached :mp3_file
end
