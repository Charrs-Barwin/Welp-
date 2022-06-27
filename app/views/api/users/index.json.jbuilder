#@users#.each {|u|json.extract! u, :name, :id, :email}
json.users do 
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :name, :id, :email
        end
    end
end