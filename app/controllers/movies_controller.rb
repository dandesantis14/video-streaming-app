class MoviesController < ApplicationController

    # skip_before_action :authenticate_user

    def index
        render json: Movie.all
    end

    def show
        render json: Movie.find(params[:id])
    end

    def create
        movie = Movie.create(movie_params)
        if movie.valid?
            render json: movie, status: :created
        else
            render json: movie.errors.full_messages, status: :unprocessable_entity
        end
    end

    def all_movies_for_user
        liked_list = []
        liked_reference_list = Liked.where( "user_id = ?", @current_user.id )
        liked_reference_list.each do |entry|
            liked_list << Movie.find(entry.movie_id)
        end
        watch_list = []
        movie_reference_list = Watchlist.where( "user_id = ?", @current_user.id )
        movie_reference_list.each do |entry|
            watch_list << Movie.find(entry.movie_id)
        end
        all_movie_list = Movie.all
        movie_collection = {
            :all_movies => all_movie_list,
            :watchlist_movies => watch_list,
            :liked_movies => liked_list
        }
        render json: movie_collection
    end

    private

    def movie_params
        params.permit(:url, :title, :rating, :sub_genre, :country, :duration, :director, :description, :year, :thumbnail_url, :art_url)
    end

end
