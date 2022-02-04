import React from 'react';
import ContinueMovie from './ContinueMovie';
import MovieGrouping from './MovieGrouping';

function MovieContainer({ movieList }) {
    
    const movie_groups = [
        {title: "WatchList", list: movieList["watchlist_movies"]},
        {title: "Liked", list: movieList["liked_movies"]},
    ]

    for (let i = 0; i<movieList["all_movies"].length; i++){
        const group = movie_groups.find(el=> el.title === movieList["all_movies"][i]["sub_genre"])
        if (!!group) {
            group.list.push(movieList["all_movies"][i])
        } else {
            movie_groups.push(
                {
                    title: movieList["all_movies"][i]["sub_genre"],
                    list: [movieList["all_movies"][i]]
                }
            )
        }
    }


    const movie_groups_to_display = movie_groups.map((group) => {
        return (
                <MovieGrouping key={group.title} movieList={group.list} title={group.title}/>
        )
    })

    return (
        <div className="outer-movie-container">
            {movie_groups_to_display}
        </div>
    );
}

export default MovieContainer;
