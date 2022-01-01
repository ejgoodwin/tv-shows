/*
    Presentational component: display TV show data.
    Data: main image, name, scheduled time and network, its rating and premiere data.
*/

import { Chip } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import VideocamIcon from '@mui/icons-material/Videocam';

const ShowHero = ({ showInfo }) => {
    return (
        <React.Fragment>
            <section className="hero-inner">
                <div className="hero-inner__container container">
                    <img className="hero-inner__image" src={showInfo.image && showInfo.image.medium}/>
                    <div className="hero-inner__text">
                        <Typography variant="h2" component="h1" gutterBottom>{ showInfo.name }</Typography>
                        <div className="chip-container">
                            <Chip label={showInfo.type} color="primary" />
                            {showInfo.genres.map(genre => <Chip label={genre} color="secondary" key={genre.replaceAll(' ', '')} />)}
                        </div>
                        {showInfo.schedule.time.length > 0 && 
                            <Typography variant="body1" gutterBottom sx={{display: 'flex'}}>
                                <AccessTimeFilledIcon className="icon-hero icon-time" />
                                Time: { showInfo.schedule.time } {showInfo.network && `on ${showInfo.network.name}`}</Typography>}
                        
                        {showInfo.rating.average && <Typography variant="body1" gutterBottom sx={{display: 'flex'}}>
                            <StarIcon className="icon-hero icon-rating" /> 
                            Rating: { showInfo.rating.average }</Typography>}

                        {showInfo.premiered && <Typography variant="body1" gutterBottom sx={{display: 'flex'}}>
                            <VideocamIcon className="icon-hero icon-video" />
                            Premiered: { new Date(showInfo.premiered).toDateString() }</Typography>}
 
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ShowHero;