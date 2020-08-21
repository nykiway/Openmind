class ChangeMeditations < ActiveRecord::Migration[5.2]
  def change
    remove_column :meditations, :duration, :time
    remove_column :meditations, :category, :string
  end
end
