/*
    Presentational component: display the cast member image, name and character if applicable.
*/

import personTemplate from '../../images/person-template.jpg';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const CastMember = ({ details }) => {

    return (
        <Link to={`../cast-member/${details.person.id}`}>
            <Card sx={{ margin:'auto', maxWidth:210 }} className="card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={ details.person.name }
                        height="295"
                        image={ details.person.image && details.person.image.medium ? details.person.image.medium : personTemplate }></CardMedia>
                    <CardContent>
                        <h3>{ details.person.name }</h3>
                        { !details.self && <p> as {details.character.name}</p>}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default CastMember;