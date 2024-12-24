class CreateChunks < ActiveRecord::Migration[8.0]
  def change
    create_table :chunks do |t|
      t.string :tiles

      t.timestamps
    end
  end
end
