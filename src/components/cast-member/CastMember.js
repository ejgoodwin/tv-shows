import CastMemberMain from "./CastMemberMain";
import personTemplate from '../../images/person-template.jpg';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const CastMember = () => {
    const [memberDetails, setMemberDetails] = useState('');
    const [memberCrewCredits, setMemberCrewCredits] = useState('')

    const params = useParams();

    useEffect(() => {
        // Get main data for the cast member.
        fetch(`https://api.tvmaze.com/people/${params.id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setMemberDetails(data);
        });

        // Get cast credit data for the cast member.
        fetch(`https://api.tvmaze.com/people/${params.id}/castcredits?embed=show`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMemberCrewCredits(data);
        });
    }, []);

    return (
        <div className="container">
            <CastMemberMain memberDetails={memberDetails} />
            <Typography variant="h4" component="h2"sx={{ marginTop:5, marginBottom:2 }} >TV Shows</Typography>
            <div className="card-container">
                {[...memberCrewCredits].map(person => (
                    <Link to={`../shows/${person._embedded.show.id}`}>
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
        </div>
    );
};

export default CastMember;