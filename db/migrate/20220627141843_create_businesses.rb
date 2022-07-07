class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :location
      t.integer :phone
      t.string :website

      t.timestamps
    end
  end
end
