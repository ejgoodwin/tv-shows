/*
    Presentational component: display TV show data.
    Data: summary, gallery and cast members.
*/

import personTemplate from '../../images/person-template.jpg';
import Gallery from "../common/Gallery";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';

const ShowBody = ({ showInfo }) => {
    return (
        <React.Fragment>
            <section className="container section-spacing-medium">
                <Typography variant="h4" component="h2" gutterBottom>Summary</Typography>
                <Typography className="summary" variant="body1">{ showInfo.summary && showInfo.summary.replace(/(<([^>]+)>)/gi, "") }</Typography>
            </section>

            {showInfo._embedded.images.length > 1 &&
                <section className="container section-spacing-medium">
                    <Typography variant="h4" component="h2" gutterBottom>Gallery</Typography>
                    <Gallery images={showInfo._embedded.images.filter(image => !image.main)} />
                </section>
            }

            {showInfo._embedded.cast.length > 0 && 
                <section className="container section-spacing-medium" id="cast-section">
                    <Typography variant="h4" component="h2" gutterBottom>Cast</Typography>
                    <div className="card-container">
                        {showInfo._embedded.cast.map(detail => (
                            <Link to={`../tv-shows/cast-member/${detail.person.id}`} key={detail.person.id}>
                                <Card sx={{ margin:'auto', maxWidth:210 }} className="card">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={ detail.person.name }
                                            height="295"
                                            image={ detail.person.image && detail.person.image.medium ? detail.person.image.medium : personTemplate }></CardMedia>
                                        <CardContent>
                                            <Typography variant="h6" >{ detail.person.name }</Typography>
                                            <Typography variant="subtitle" >{ detail.character.name }</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            }

        </React.Fragment>
    );
}

export default ShowBody;