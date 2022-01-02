/*
    Presentational component: display cast member data.
    Data: TV shows.
*/

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import personTemplate from '../../images/person-template.jpg';

const CastMemberBody = ({ memberCrewCredits }) => {
    return (
        <section className="container">
            <Typography variant="h4" component="h2"sx={{ marginTop:5, marginBottom:2 }} >TV Shows</Typography>
            <div className="card-container">
                {[...memberCrewCredits].map(person => (
                    <Link to={`../tv-shows/shows/${person._embedded.show.id}`} key={person._embedded.show.id}>
                        <Card sx={{ margin:'auto', maxWidth:210 }} className="card">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={ person._embedded.show.name }
                                    height="295"
                                    image={ person._embedded.show.image && person._embedded.show.image.medium ? person._embedded.show.image.medium : personTemplate }></CardMedia>
                                <CardContent>
                                    <Typography variant="h6" >{ person._embedded.show.name }</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default CastMemberBody;