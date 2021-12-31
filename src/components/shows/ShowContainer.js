import ShowMain from "./ShowMain";
import personTemplate from '../../images/person-template.jpg';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

/*
    Container component: fetch data for the show using the id in the URL. Pass data to child presentational components.
*/

const ShowContainer = () => {
    const [showInfo, setShowInfo] = useState(null);

    // Fetch data from URL param so that if the user reloads, the data is fetched again instead of losing the state if it was passed down.
    const params = useParams();
    
    useEffect(() => {
        // Get data for the show that has ID matching the URL param.
        fetch(`https://api.tvmaze.com/shows/${params.id}?embed[]=cast&embed[]=images&embed[]=episodes`)
        .then(res => res.json())
        .then(data => {
            setShowInfo(data);
        });
    }, []);

    if (!showInfo) return '';

    return (
        <div className="container">
            <ShowMain showInfo={showInfo} />
            {showInfo._embedded.cast.length > 0 && <Typography variant="h4" component="h2" gutterBottom>Cast</Typography>}
            <div className="card-container">
                {showInfo._embedded.cast.map(detail => (
                    <Link to={`../cast-member/${detail.person.id}`}>
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
        </div>
    );
}

export default ShowContainer;