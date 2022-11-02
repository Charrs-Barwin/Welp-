class ChangePhoneToStringInBusinesses < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :phone, :string
  end
end
