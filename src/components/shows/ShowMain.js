/*
    Presentational component: display the show's name, images, airtime and summary.
*/

import { Chip } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import Gallery from "../common/Gallery";

const ShowMain = ({ showInfo }) => {
    console.log(showInfo);
    return (
        <React.Fragment>
            <div className="main-info">
                <img src={showInfo.image.medium}/>
                <div className="main-info__text">
                    <Typography variant="h2" component="h1" gutterBottom>{ showInfo.name }</Typography>
                    <div className="chip-container">
                        <Chip label={showInfo.type} color="primary" />
                        {showInfo.genres.map(genre => <Chip label={genre} color="secondary" />)}
                    </div>
                    {showInfo.schedule.time.length > 0 && <p><strong>Time:</strong> {showInfo.schedule.time} on {showInfo.network.name}</p>}
                    <Typography variant="h5" component="h2" gutterBottom>Summary</Typography>
                    <Typography variant="body1">{ showInfo.summary.replace(/(<([^>]+)>)/gi, "") }</Typography>
                </div>
            </div>
            {showInfo._embedded.images.length > 1 && <Typography variant="h4" component="h2" gutterBottom>Gallery</Typography>}

            <Gallery images={showInfo._embedded.images.filter(image => !image.main)} />
        </React.Fragment>
    );
}

export default ShowMain;