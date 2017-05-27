class CreateContests < ActiveRecord::Migration
  def change
    create_table :contests do |t|
      t.string :title
      t.date :period
      t.text :introduce
      t.integer :category

      t.timestamps null: false
    end
  end
end
