class LikedsController < ApplicationController
    
    def create
        Liked.create(user_id:@current_user.id, movie_id:params[:movie_id])
    end
    
    def user_liked_list
        liked_list = []
        movie_reference_list = Liked.where( "user_id = ?", params[:user_id] )
        movie_reference_list.each do |entry|
            liked_list << Movie.find(entry.movie_id)
        end
        render json: liked_list
    end

    def destroy
        entry = Liked.where("user_id = ? AND movie_id = ?", @current_user.id, params[:id]).ids 
        Liked.destroy(entry)
    end

end
