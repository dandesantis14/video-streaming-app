import { Routes, Route } from "react-router-dom"
import { useNavigate } from 'react-router'
import { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import NavPanel from "./NavPanel";
import MovieContainer from "./MovieContainer";
import MovieViewer from "./MovieViewer";
import Search from "./Search";

function HomePage({ currentUser, movieList, fetchMovies, moviesToDisplay, setMoviesToDisplay }) {

    // const [isViewing, setIsViewing] = useState(false)
    // const [selectedMovie, setSelectedMovie] = useState({})

    const [search, setSearch] = useState('')

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
        setMoviesToDisplay(handleFilter(movieList["all_movies"], e.target.value))
    }
    const handleFilter = (movieArray, filterValue) => {
        return movieArray.filter((movie) => {
            if (filterValue.length > 0) {
                return movie.title.toLowerCase().includes(filterValue.toLowerCase())
            } else {
                return true
            }
        })
    }
    
    return (
        <div>
            <div>
                <Link to="/" style={{textDecoration:"none"}}><h1 className="link">DanFlix</h1></Link>
            </div>
            <div className="user-bar">
                <div id="welcome">
                    Welcome {currentUser.username}!
                </div>
            <NavPanel />
            </div>
            <Routes>
                <Route
                    path="/"
                    element = {<MovieContainer movieList={movieList} />}
                />
                <Route
                    path="/search"
                    element = {<Search search={search} handleSearchChange={handleSearchChange} moviesToDisplay={moviesToDisplay} />}
                />
                <Route
                    path="/watch/:id"
                    element = {<MovieViewer movieList={movieList} fetchMovies={fetchMovies}/>}
                />
            </Routes>
        </div>
    );
}

export default HomePage;