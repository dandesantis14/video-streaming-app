class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :last_watched_id, :last_watched_time
end
