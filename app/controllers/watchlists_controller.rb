class WatchlistsController < ApplicationController

    def create
        Watchlist.create(user_id:@current_user.id, movie_id:params[:movie_id])
    end
    
    def user_watchlist
        movie_list = []
        movie_reference_list = Watchlist.where( "user_id  = ?", params[:user_id] )
        movie_reference_list.each do |entry|
            movie_list << Movie.find(entry.movie_id)
        end
        render json: movie_list
    end

    def destroy
        entry = Watchlist.where("user_id = ? AND movie_id = ?", @current_user.id, params[:id]).ids 
        Watchlist.destroy(entry)
    end

    private

    def watchlist_params
        params.permit(:user_id, :movie_id)
    end

end
