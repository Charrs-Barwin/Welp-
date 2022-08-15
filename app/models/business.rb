class Business < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :reviews, foreign_key: :business_id, class_name: :Review
    belongs_to :owner, foreign_key: :owner_id, class_name: :User
    has_many :reviewers, through: :reviews, source: :user


end
