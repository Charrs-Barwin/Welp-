# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all
User.destroy_all # can exist on its own
# ActiveRecord::Base.connection.execute('ALTER TABLE table_name AUTO_INCREMENT = 1')
# ActiveRecord::Base.connection.reset_pk_sequence!('users')
# ActiveRecord::Base.connection.reset_pk_sequence!('businesses')
ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

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

#BUSINESSES
bigburger = Business.create!(
    name: "Big Burger",
    location: "12 street",
    phone: 5555555,
    website: "bigburger.com",
    owner_id: 1
)

littleburger = Business.create!(
    name: "Little Burger",
    location: "2 street",
    phone: 5555556,
    website: "littleburger.com",
    owner_id: 2
)