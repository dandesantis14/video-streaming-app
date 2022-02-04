import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function LoggedOutLanding({ setCurrentUser, fetchMovies}) {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage setCurrentUser={setCurrentUser} fetchMovies={fetchMovies} />}
                />

                <Route
                    path="/signup"
                    element={<SignUpPage setCurrentUser={setCurrentUser} fetchMovies={fetchMovies}/>}
                />
            </Routes>
        </div>
    );
}

export default LoggedOutLanding;