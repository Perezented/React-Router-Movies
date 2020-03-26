import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function SavedList(props) {
    console.log(useHistory());
    return (
        <div className="saved-list">
            <h3>Saved Movies:</h3>
            {props.list.map(movie => (
                // console.log(props)
                <span className="saved-movie">{movie.title}</span>
            ))}
            <div className="home-button">
                {" "}
                <Link to={"/"}>Home </Link>
            </div>
        </div>
    );
}
