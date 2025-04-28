class AddTraits < ActiveRecord::Migration[8.0]
  def change
    create_table :traits do |t|
      t.string :name
      t.timestamps
    end

    create_table :tiles_traits, id: false do |t|
      t.belongs_to :tile
      t.belongs_to :trait
    end
  end
end