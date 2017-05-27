class AddIsadminToUser < ActiveRecord::Migration
  def change
    add_column :users, :isadmin, :integer, default: 0
  end
end
