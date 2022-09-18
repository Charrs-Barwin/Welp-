class Business < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :reviews, foreign_key: :business_id, class_name: :Review, dependent: :delete_all
    belongs_to :owner, foreign_key: :owner_id, class_name: :User
    has_many :reviewers, through: :reviews, source: :author
    
    has_one_attached :photo

    def avgRating()
        ratings = self.reviews.map {|r|r.rating}
        ratings.count ? (ratings.sum.to_f/ratings.count).round(2) : 0.0
    end

end
