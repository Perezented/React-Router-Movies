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
            <div>
                <Route path="/MovieList/:movieID" component={Movie} />
                <Route exact path="/" component={MovieList} />
            </div>
        </div>
    );
};

export default App;
