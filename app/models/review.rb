class Review < ApplicationRecord
  validates :rating, presence: true
  
  belongs_to :author, foreign_key: :user_id, class_name: :User
  belongs_to :business, foreign_key: :business_id, class_name: :Business

end
