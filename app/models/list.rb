class List < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :userId, presence: true
  validates :meditationIds, presence: true

  belongs_to :User
    foreign_key: :userId,
    class_name: :User

end
