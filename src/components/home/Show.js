import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
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
                            <h3>{ name }</h3>
                            <p className="card-content-summary">{ summary.replace(/(<([^>]+)>)/gi, "") }</p>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

export default Show;