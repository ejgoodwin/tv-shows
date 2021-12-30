import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import personTemplate from '../../images/person-template.jpg';
import { Link } from 'react-router-dom';

const CastMemberCreditCard = ({ credit }) => {
    console.log(credit);
    return (
        <Link to={`../shows/${credit.id}`}>
            <Card sx={{ margin:'auto', maxWidth:210 }} className="card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={ credit.name }
                        height="295"
                        image={ credit.image && credit.image.medium ? credit.image.medium : personTemplate }></CardMedia>
                    <CardContent>
                        <h3>{ credit.name }</h3>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default CastMemberCreditCard;