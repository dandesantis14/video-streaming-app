class MovieSerializer < ActiveModel::Serializer
  attributes :id, :url, :title, :rating, :sub_genre, :country, :duration, :director, :description, :year, :thumbnail_url, :art_url, :watch_count
end
