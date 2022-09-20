json.extract! business, :id, :name, :location, :phone, :website, :owner_id, :rating, :owner, :reviews, :avgRating, :reviewers
if business.photo.attached?
  json.photoUrl url_for(business.photo)
end
if business.photos.attached?
  json.photoUrls business.photos.map { |file| url_for(file) }
end