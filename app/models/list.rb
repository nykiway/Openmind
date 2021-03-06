class List < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true
  validates :userId, presence: true
  # validates :meditationIds, presence: true

  belongs_to :user,
    foreign_key: :userId, 
    class_name: :User

  has_many :list_meditations
  has_many :meditations, through: :list_meditations
end
