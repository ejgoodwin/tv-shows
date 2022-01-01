/*
    Container component: fetch data for the show using the id in the URL. Pass data to child presentational components.
*/

import ShowHero from "./ShowHero";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ShowBody from "./ShowBody";

const ShowContainer = () => {
    const [showInfo, setShowInfo] = useState(null);

    // Fetch data from URL param so that if the user reloads, the data is fetched again instead of losing the state if it was passed down.
    const params = useParams();
    
    useEffect(() => {
        // Get data for the show that has ID matching the URL param.
        fetch(`https://api.tvmaze.com/shows/${params.id}?embed[]=cast&embed[]=images&embed[]=episodes`)
        .then(res => res.json())
        .then(data => setShowInfo(data));
        return () => {}
    }, [showInfo]);

    if (!showInfo) return '';

    return (
        <React.Fragment>
            <ShowHero showInfo={showInfo} />
            <ShowBody showInfo={showInfo} />
        </React.Fragment>
    );
}

export default ShowContainer;