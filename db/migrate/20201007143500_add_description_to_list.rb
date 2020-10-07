class AddDescriptionToList < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :description, :text
  end
end
