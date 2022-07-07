class AddOwnerIdToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :owner_id, :integer
  end
end
