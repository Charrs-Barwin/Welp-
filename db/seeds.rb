# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# Examples:
#  movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#  Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all
User.destroy_all
Review.destroy_all
# ActiveRecord::Base.connection.execute('ALTER TABLE table_name AUTO_INCREMENT = 1')
# ActiveRecord::Base.connection.reset_pk_sequence!('users')
# ActiveRecord::Base.connection.reset_pk_sequence!('businesses')
# ActiveRecord::Base.connection.reset_pk_sequence!('reviews')
ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

require 'faker'
Faker::UniqueGenerator.clear
# Faker::Name.name      #=> "Christophe Bartell"
# Faker::Internet.email #=> "kirsten.greenholt@corkeryfisher.info"

require 'open-uri'
# b1 = open('https://welp--seeds.s3.amazonaws.com/b1.png')
# b2 = open('https://welp--seeds.s3.amazonaws.com/b2.jpg')
# b3 = open('https://welp--seeds.s3.amazonaws.com/b3.jpg')


stockPhotoUrls = [
    'https://images.pexels.com/photos/2331536/pexels-photo-2331536.jpeg',
    'https://images.pexels.com/photos/194913/pexels-photo-194913.jpeg',
    'https://images.pexels.com/photos/5713766/pexels-photo-5713766.jpeg',
    'https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg',
    'https://images.pexels.com/photos/983587/pexels-photo-983587.jpeg',
    'https://images.pexels.com/photos/916416/pexels-photo-916416.jpeg',
    'https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg',
    'https://images.pexels.com/photos/343870/pexels-photo-343870.jpeg',
    'https://images.pexels.com/photos/2919579/pexels-photo-2919579.jpeg',
    'https://images.pexels.com/photos/2781537/pexels-photo-2781537.jpeg',
    'https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg',
    'https://images.pexels.com/photos/1694865/pexels-photo-1694865.jpeg',
    'https://images.pexels.com/photos/4062274/pexels-photo-4062274.jpeg',
    'https://images.pexels.com/photos/836850/pexels-photo-836850.jpeg',
    'https://images.pexels.com/photos/4059426/pexels-photo-4059426.jpeg',
    'https://images.pexels.com/photos/2781540/pexels-photo-2781540.jpeg',
    'https://images.pexels.com/photos/9919799/pexels-photo-9919799.jpeg',
    'https://images.pexels.com/photos/3215513/pexels-photo-3215513.jpeg',
    'https://images.pexels.com/photos/2317542/pexels-photo-2317542.jpeg',
    'https://images.pexels.com/photos/52576/pexels-photo-52576.jpeg',
    'https://images.pexels.com/photos/4669246/pexels-photo-4669246.jpeg',
    'https://images.pexels.com/photos/6240974/pexels-photo-6240974.jpeg',
    'https://images.pexels.com/photos/8697543/pexels-photo-8697543.jpeg',
    'https://images.pexels.com/photos/7627414/pexels-photo-7627414.jpeg',
    'https://images.pexels.com/photos/7627422/pexels-photo-7627422.jpeg',
    'https://images.pexels.com/photos/4669251/pexels-photo-4669251.jpeg',
    'https://images.pexels.com/photos/5192027/pexels-photo-5192027.jpeg',
    'https://images.pexels.com/photos/6240876/pexels-photo-6240876.jpeg',
    'https://images.pexels.com/photos/6373441/pexels-photo-6373441.jpeg',
    'https://images.pexels.com/photos/4586810/pexels-photo-4586810.jpeg',
    'https://images.pexels.com/photos/4062272/pexels-photo-4062272.jpeg',
    'https://images.pexels.com/photos/6270651/pexels-photo-6270651.jpeg',
    'https://images.pexels.com/photos/6270663/pexels-photo-6270663.jpeg',
    'https://images.pexels.com/photos/5616132/pexels-photo-5616132.jpeg',
    'https://images.pexels.com/photos/5616129/pexels-photo-5616129.jpeg',
    'https://images.pexels.com/photos/6373255/pexels-photo-6373255.jpeg',
    'https://images.pexels.com/photos/6382782/pexels-photo-6382782.jpeg',
    'https://images.pexels.com/photos/6382822/pexels-photo-6382822.jpeg',
    'https://images.pexels.com/photos/11213692/pexels-photo-11213692.jpeg',
    'https://images.pexels.com/photos/4809147/pexels-photo-4809147.jpeg',
    'https://images.pexels.com/photos/4566718/pexels-photo-4566718.jpeg',
    'https://images.pexels.com/photos/5192030/pexels-photo-5192030.jpeg',
    'https://images.pexels.com/photos/9311856/pexels-photo-9311856.jpeg',
    'https://images.pexels.com/photos/8743917/pexels-photo-8743917.jpeg',
    'https://images.pexels.com/photos/9329433/pexels-photo-9329433.jpeg',
    'https://images.pexels.com/photos/6241091/pexels-photo-6241091.jpeg',
    'https://images.pexels.com/photos/6241118/pexels-photo-6241118.jpeg',
    'https://images.pexels.com/photos/6240997/pexels-photo-6240997.jpeg',
    'https://images.pexels.com/photos/10132214/pexels-photo-10132214.jpeg',
    'https://images.pexels.com/photos/5616153/pexels-photo-5616153.jpeg',
    'https://images.pexels.com/photos/6383072/pexels-photo-6383072.jpeg',
    'https://images.pexels.com/photos/6383081/pexels-photo-6383081.jpeg',
    'https://images.pexels.com/photos/6383082/pexels-photo-6383082.jpeg',
    'https://images.pexels.com/photos/7627441/pexels-photo-7627441.jpeg',
    'https://images.pexels.com/photos/7214136/pexels-photo-7214136.jpeg',
    'https://images.pexels.com/photos/8292348/pexels-photo-8292348.jpeg',
    'https://images.pexels.com/photos/6640619/pexels-photo-6640619.jpeg',
    'https://images.pexels.com/photos/11744264/pexels-photo-11744264.jpeg',
    'https://images.pexels.com/photos/7736773/pexels-photo-7736773.jpeg',
    'https://images.pexels.com/photos/8951408/pexels-photo-8951408.jpeg',
]



# USERS
User.create!(
    name: "mike1", 
    email: "mike1@email.com", 
    password: "123456"
)

19.times do# |i|
    name = Faker::Name.unique.name
    email = Faker::Internet.safe_email(name: name)
    User.create!(
        name: name,
        email: email,
        password: "123456"
    )
end

User.create!(
    name: "demo user",
    email: "demo@email.com",
    password: "123456"
)

#BUSINESSES
bigburger = Business.create!(
    name: "Big Burger",
    location: "12 street",
    phone: 555-5555,
    website: "bigburger.com",
    owner_id: 1
)
# bigburger.photo.attach(io: b1, filename: 'b1.png')
_url = stockPhotoUrls.shift
bigburger.photo.attach(io: open(_url), filename: _url)
_url = stockPhotoUrls.shift
bigburger.photos.attach(io: open(_url), filename: _url)
_url = stockPhotoUrls.shift
bigburger.photos.attach(io: open(_url), filename: _url)

19.times do |i|
    name = Faker::Restaurant.unique.name
    location = Faker::Address.unique.full_address
    phone = Faker::PhoneNumber.unique.cell_phone
    website = Faker::Internet.domain_name(domain: name)

    business = Business.create!(
        name: name,
        location: location,
        phone: phone,
        website: website,
        owner_id: (i+2)
    )
    
    _url = stockPhotoUrls.shift
    business.photo.attach(io: open(_url), filename: _url)
    _url = stockPhotoUrls.shift
    business.photos.attach(io: open(_url), filename: _url)
    _url = stockPhotoUrls.shift
    business.photos.attach(io: open(_url), filename: _url)
end

#REVIEWS

20.times do |i|
    review = Faker::Restaurant.review
    review = Faker::Quote.unique.famous_last_words if ((i+1)%4 == 0)
    Review.create!(
        user_id: (i+1),
        business_id: (20-i),
        rating: [1,2,3,4,5].sample,
        body: review
    )
end

20.times do |i|
    review = Faker::Restaurant.review
    # review = Faker::Quote.unique.famous_last_words if ((i+1)%4 == 0)
    Review.create!(
        user_id: (i+1),
        business_id: ((i+2)%20)+1,
        rating: [1,2,3,4,5].sample,
        body: review
    )
end

# Business.each do |business|
#     _url = stockPhotoUrls.shift
#     business.photo.attach(io: open(_url), filename: _url)
#     _url = stockPhotoUrls.shift
#     business.photos.attach(io: open(_url), filename: _url)
#     _url = stockPhotoUrls.shift
#     business.photos.attach(io: open(_url), filename: _url)    
# end