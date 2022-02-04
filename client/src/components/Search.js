import React from 'react';
import { Link } from 'react-router-dom';

function Search({ search, handleSearchChange, moviesToDisplay}) {
    
    const base_url = [/*[SERVER IP AND PORT NUMBER HERE]*/]
    const query_param = [/*?[ACCESS TOKEN HERE]*/]

    const movieElements = moviesToDisplay.map((el) => <Link to={"/watch/"+el.id}><img className="movie-card" src={base_url+el.thumbnail_url+query_param} width="200" height="300"/> </Link>)

    return (
        <div className='search-container'>
            <div className='search-bar-div'>
                <form className="search-form">
                    <input
                    id="search-input"
                    type="text"
                    placeholder='Search by movie title...'
                    value={search}
                    onChange={handleSearchChange}
                    />
                </form>
            </div>
            <div className='search-cards'>
                {movieElements}
            </div>
        </div>
    );
}

export default Search;
