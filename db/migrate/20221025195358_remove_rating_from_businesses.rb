class RemoveRatingFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :rating, :decimal
  end
end
