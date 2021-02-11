class ListMeditation > ActiveRecord
  validates :list_id, :meditation_id, presence: true

  belongs_to :list
  belongs_to :meditation
end