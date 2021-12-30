import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Show = ({ id, image, name, showClick, summary }) => {
    if (!summary) return '';
    return (
        <Link to={`shows/${id}`}>
            <Card sx={{ margin:'auto', maxWidth:210 }} className="card">
                <CardActionArea onClick={ () => showClick(id) }>
                    <CardMedia
                        component="img"
                        alt={name}
                        height="295"
                        image={ image ? image.medium : 'https://placeimg.com/345/140/animals' }></CardMedia>
                    <CardContent sx={{ padding:0 }}>
                        <div className="card-content-main">
                            <Typography variant="h5" >{ name }</Typography>
                            <Typography className="card-content-summary" variant="body2" >{ summary.replace(/(<([^>]+)>)/gi, "") }</Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default Show;