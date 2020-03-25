import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
    const [savedList, setSavedList] = useState([]);

    const addToSavedList = movie => {
        setSavedList([...savedList, movie]);
    };

    return (
        <div>
            <nav>
                <Link to="/">Movie List</Link>
            </nav>
            <SavedList list={savedList} />
            <Route path="/Movies/:movieID" component={Movie} />
            <Route exact path="/">
                <MovieList /> />
            </Route>
        </div>
    );
};

export default App;
