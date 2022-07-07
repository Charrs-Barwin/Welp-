#@users#.each {|u|json.extract! u, :name, :id, :email}
# json.businesses do 
#     @businesses.each do |business|
#         json.set! business.id do
#             json.extract! business,:name,:location,:phone,:website,:owner_id
#         end
#     end
# end
json.array! @businesses do |business|
    json.partial! 'business', business: business
end  