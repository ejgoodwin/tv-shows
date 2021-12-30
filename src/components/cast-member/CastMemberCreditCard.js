import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
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
                        <Typography variant="h6" >{ credit.name }</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default CastMemberCreditCard;