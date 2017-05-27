class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :title
      t.integer :grade
      t.references :contest, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
