class Movie < ApplicationRecord

    has_many :watchlists
    has_many :likeds
    has_many :suggesteds

end
