class AddDurationColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :meditations, :duration, :string
  end
end
