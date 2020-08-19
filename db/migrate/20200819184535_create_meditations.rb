class CreateMeditations < ActiveRecord::Migration[5.2]
  def change
    create_table :meditations do |t|
      t.string :name, null: false, unique: true
      t.string :category, null: false
      t.time :duration, null: false
      t.timestamps
    end
    add_index :meditations, :category
  end
end
