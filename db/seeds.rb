# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all
User.destroy_all
Review.destroy_all
# ActiveRecord::Base.connection.execute('ALTER TABLE table_name AUTO_INCREMENT = 1')
# ActiveRecord::Base.connection.reset_pk_sequence!('users')
# ActiveRecord::Base.connection.reset_pk_sequence!('businesses')
ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

require 'open-uri'

b1 = open('https://welp--seeds.s3.amazonaws.com/b1.png')
b2 = open('https://welp--seeds.s3.amazonaws.com/b2.jpg')
b3 = open('https://welp--seeds.s3.amazonaws.com/b3.jpg')

# attach to user
# bigburger.photo.attach(io: b1, filename: 'b1.png')
# midburger.photo.attach(io: b2, filename: 'b2.jpg')
# littleburger.photo.attach(io: b3, filename: 'b3.jpg')

# USERS
mike1 = User.create!(
    name: "mike1", 
    email: "mike1@email.com", 
    password: "123456"
)

mike2 = User.create!(
    name: "mike2", 
    email: "mike2@email.com", 
    password: "123456"
)

mike3 = User.create!(
    name: "mike3", 
    email: "mike3@email.com", 
    password: "123456"
)

mike4 = User.create!(
    name: "mike4", 
    email: "mike4@email.com", 
    password: "123456"
)

#BUSINESSES
bigburger = Business.create!(
    name: "Big Burger",
    location: "12 street",
    phone: 5555555,
    website: "bigburger.com",
    rating: 1,
    owner_id: 1
)
bigburger.photo.attach(io: b1, filename: 'b1.png')

littleburger = Business.create!(
    name: "Little Burger",
    location: "2 street",
    phone: 5555556,
    website: "littleburger.com",
    rating: 2,
    owner_id: 2
)
littleburger.photo.attach(io: b3, filename: 'b3.jpg')

midburger = Business.create!(
    name: "Mid Burger",
    location: "6 street",
    phone: 5555557,
    website: "midburger.com",
    rating: 4,
    owner_id: 3
)
midburger.photo.attach(io: b2, filename: 'b2.jpg')

badburger = Business.create!(
    name: "BAD Burger",
    location: "14 BAD st.",
    phone: 5555566,
    website: "badburger.com",
    owner_id: 4
)

# bigburger.photo.attach(io: b1, filename: 'b1.png')
# midburger.photo.attach(io: b2, filename: 'b2.jpg')
# littleburger.photo.attach(io: b3, filename: 'b3.jpg')

#REVIEWS
r1 = Review.create!(
    user_id: 1,
    business_id: 2,
    rating: 2,
    body: "burger is too little"
)
r2 = Review.create!(
    user_id: 2,
    business_id: 3,
    rating: 3,
    body: "just right"
)
r3 = Review.create!(
    user_id: 3,
    business_id: 1,
    rating: 4,
    body: "burger is too big"
)
