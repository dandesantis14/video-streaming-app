import React from 'react';
import { Link } from 'react-router-dom';

function MovieGrouping({ movieList,title }) {

    const base_url = "http://69.120.184.243:32400"
    const query_param = "?X-Plex-Token=LmKVY5RYJsrFmgmBFBF_"

    const movieElements = movieList.map((el) => <Link to={"/watch/"+el.id}><img className="movie-card" src={base_url+el.thumbnail_url+query_param} width="200" height="300"/> </Link>)
    if (movieList.length === 0){
        return <div></div>
    }

    // const moviePackage = {
    //     "Family": [],
    //     "Animation": [],
    //     "Crime": [],
    //     "Romance": [],
    //     "Documentary": [],
    //     "Mystery": [],
    //     "Musical": [],
    //     "Fantasy": [],
    //     "Short": [],
    //     "Action/Adventure": [],
    //     "Science Fiction": [],
    //     "Drama": [],
    //     "Horror": [],
    //     "Action": [],
    //     "Thriller": [],
    //     "Comedy": [],
    //     "War": []
    // }

    // if (title === "All Movies"){}

    return (
        <div>
            <h3>{title}</h3>
            {movieElements}
            <br></br>
        </div>
    );
}

export default MovieGrouping;
