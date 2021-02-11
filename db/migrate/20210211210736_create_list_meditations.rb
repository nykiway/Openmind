class CreateListMeditations < ActiveRecord::Migration[5.2]
  def change
    create_table :list_meditations do |t|
      t.integer :list_id, null: false
      t.integer :meditation_id, null: false
      t.timestamps
    end
    add_index :list_meditations, :list_id
    add_index :list_meditations, :meditation_id
  end
end
