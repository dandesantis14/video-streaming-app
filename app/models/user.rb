class User < ApplicationRecord

    has_many :watchlists
    has_many :likeds
    has_many :suggesteds
    
    has_secure_password
    
    validates :username, :email, :password, presence: true
    validates :email, uniqueness: true
    validates :password, confirmation: true

end
