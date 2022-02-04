import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

function MovieViewer({ movieList, fetchMovies }) {
    
    //----Sets current selected movie using passed in params
    const { id } = useParams()
    const movie = movieList["all_movies"].find(el => el.id == parseInt(id))

    //----State values to track watchlist and liked list
        const [isLiked,setIsLiked] = useState (movieList["liked_movies"].some(el => el.id == parseInt(id)))
        const [isOnWatchlist,setIsOnWatchlist] = useState (movieList["watchlist_movies"].some(el => el.id == parseInt(id)))
    
//----Determines initial isLiked/isOnWatchlist states
    // if(movieList["liked_movies"].some(el => el.id == parseInt(id))){
    //     setIsLiked(true)
    // }
    // if(movieList["watchlist_movies"].some(el => el.id == parseInt(id))){
    //     setIsOnWatchlist(true)
    // }

//----Sets url to access movie file
    const {url, title, art_url} = movie
    const base_url = [/*[SERVER IP AND PORT NUMBER HERE]*/]
    const query_param = [/*?[ACCESS TOKEN HERE]*/]

//----Functions to handle add/delete
    const addToWatchlist = () => {
        fetch('/watchlists/?movie_id='+id,{
            method: 'POST'
        }).then(fetchMovies);
        setIsOnWatchlist(true)
    }
    const removeFromWatchlist = () => {
        fetch('/watchlists/'+id,{
            method: 'DELETE'
        }).then(fetchMovies);
        setIsOnWatchlist(false)
    }
    const addToLiked = () => {
        fetch('/likeds/?movie_id='+id,{
            method: 'POST'
        }).then(fetchMovies);
        setIsLiked(true)
    }
    const removeFromLiked = () => {
        fetch('/likeds/'+id,{
            method: 'DELETE'
        }).then(fetchMovies);
        setIsLiked(false)
    }

    return (
        <div>
            <img className="art-file" width = "1900" src={base_url+art_url+query_param} />
            <div className='movie-window'>
                <div className="movie-title-bar">
                    <h1 className="movie-title">{title}&nbsp;</h1>
                    {isOnWatchlist ?
                        <button id="watchlist-button" onClick={removeFromWatchlist}>➖</button>
                        :
                        <button id="watchlist-button" onClick={addToWatchlist}>✚</button>
                    }
                    {isLiked ?
                        <button id="like-button" onClick={removeFromLiked}>❤️ </button>
                        :
                        <button id="like-button" onClick={addToLiked}>🖤 </button>
                    }
                </div>
                <br></br>
                <div className="movie-player">
                    <video className="video-player" width = "80%" src={base_url+url+query_param} controls></video>
                </div>
            </div>
        </div>
    );
}

export default MovieViewer;
