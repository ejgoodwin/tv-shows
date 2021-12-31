/*
    Presentational component: display the show's name, images, airtime and summary.
*/

import { Chip } from "@mui/material";
import React from "react";

const ShowMain = ({ showInfo }) => {
    console.log(showInfo);
    return (
        <React.Fragment>
            <div className="main-info">
                <img src={showInfo.image.medium}/>
                <div className="main-info__text">
                    <h1>{showInfo.name}</h1>
                    <div className="chip-container">
                        <Chip label={showInfo.type} color="primary" />
                        {showInfo.genres.map(genre => <Chip label={genre} color="secondary" />)}
                    </div>
                    {showInfo.schedule.time.length > 0 && <p><strong>Time:</strong> {showInfo.schedule.time} on {showInfo.network.name}</p>}
                    <h3>Summary</h3>
                    {showInfo.summary.replace(/(<([^>]+)>)/gi, "")}
                </div>
            </div>
            {showInfo._embedded.images.length > 1 && <h2>Gallery</h2>}

            <ul className="show-gallery">
                {showInfo._embedded.images.filter(image => !image.main).map((image) => (
                    <li key={image.id} >
                        <img 
                            alt="" 
                            className="show-gallery__img" 
                            src={image.resolutions.medium ? image.resolutions.medium.url : image.resolutions.original.url} />
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default ShowMain;