class AddMeditationColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :meditations, :categories, :text, array: true, default: []
  end
end
