class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :business_id
      t.text :body
      t.integer :rating

      t.timestamps
    end
  end
end
