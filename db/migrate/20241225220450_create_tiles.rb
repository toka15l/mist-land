class CreateTiles < ActiveRecord::Migration[8.0]
  def change
    create_table :tiles do |t|
      t.string :display
      t.string :color
      t.string :bg_color

      t.timestamps
    end
  end
end
