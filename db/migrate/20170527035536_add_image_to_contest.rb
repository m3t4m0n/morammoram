class AddImageToContest < ActiveRecord::Migration
  def change
    add_column :contests, :image, :string
  end
end
