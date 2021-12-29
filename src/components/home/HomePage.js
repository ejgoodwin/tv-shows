import React from 'react';
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Show from './Show';

const HomePage = ({ currentShows, showClick }) => {
    return (
        <div className="container">
            <h1>Home page</h1>
            <TextField id="outlined-basic" label="Search" variant="outlined" theme='dark'/>
            <h2>What's on?</h2>
            <div className="current-shows">
                {currentShows.map(show => <Show id={show.show.id} image={show.show.image} key={show.id} name={show.show.name} summary={show.show.summary} showClick={showClick}/>) }
            </div>
        </div>
    )
}

export default HomePage;
