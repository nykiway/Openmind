class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false, unqiue: true
      t.integer :userId, null: false
      t.text :meditationIds, array: true, default: []
      t.timestamps
    end
  end
end
