import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoggedOutLanding from "./components/LoggedOutLanding";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [movieList, setMovieList] = useState(
    {
      "all_movies":[],
      "watchlist_movies":[],
      "liked_movies":[]
    }
  )
  const [moviesToDisplay, setMoviesToDisplay] = useState([])

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

const fetchMovies = () => {
  fetch("/movie_collection")
  .then(resp => resp.json())
  .then(data => {
      setMovieList(data)
      setMoviesToDisplay(data["all_movies"])
  })
}

  if (!authenticated) {
    return <div></div>;
  }

  return (
    <div>
      <Router>
        {currentUser ? (
          <HomePage
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            movieList={movieList}
            setMovieList={setMovieList}
            moviesToDisplay={moviesToDisplay}
            setMoviesToDisplay={setMoviesToDisplay}
            fetchMovies={fetchMovies}
          />
        ) : (
          <LoggedOutLanding
            setCurrentUser={setCurrentUser}
            setMovieList={setMovieList}
            setMoviesToDisplay={setMoviesToDisplay}
            fetchMovies={fetchMovies}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
