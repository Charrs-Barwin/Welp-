class AddRatingToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :rating, :decimal, precision: 5, scale: 2
  end
end
