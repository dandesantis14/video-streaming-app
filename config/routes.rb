Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'

  get '/me', to: 'users#show'

  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logout', to: 'sessions#logout'

  get '/movie_collection', to: 'movies#all_movies_for_user'

  # delete '/watchlists', to: 'watchlists#delete'
  # delete '/likeds', to: 'likeds#delete'

  resources :suggesteds
  resources :likeds
  resources :watchlists
  resources :movies
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
