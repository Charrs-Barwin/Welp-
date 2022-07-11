class User < ApplicationRecord
    validates :name, :password_digest, presence: true
    validates :name, uniqueness: true
    validates :password, length: {minimum: 6},allow_nil: true
    # has_many :goals, foreign_key: :user_id, class_name: :Goal // businesses/reviews

    after_initialize :ensure_session_token
    attr_reader :password

    def password=(pass)
        @password = pass
        self.password_digest = BCrypt::Password.create(pass)
    end

    def ensure_session_token
        self.session_token||= SecureRandom.base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save
        self.session_token
    end

    def self.find_by_credentials(name,pass)
        user = User.find_by(name: name)
        return user if user && BCrypt::Password.new(user.password_digest).is_password?(pass)
    end
    # def self.find_by_credentials(username, password)
    #     user = User.find_by(username: username)

    #     if user && user.is_password?(password)
    #         user
    #     else
    #         nil
    #     end
    # end

    # def is_password?(password)
    #     password_object = BCrypt::Password.new(self.password_digest)
    #     password_object.is_password?(password)
    # end
end
