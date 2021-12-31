import personTemplate from '../../images/person-template.jpg';
import { Typography } from '@mui/material';

const CastMemberMain = ({ memberDetails }) => {
    return (
        <div className="main-info">
            <img src={ memberDetails.image && memberDetails.image.medium ? memberDetails.image.medium : personTemplate } />
            <div className="main-info__text">
                <Typography variant="h2" component="h1">{ memberDetails.name }</Typography>
                {memberDetails.country && <Typography variant="subtitle" component="div" gutterBottom>{ `Country: ${memberDetails.country.name}` }</Typography>}
                {memberDetails.birthday && <Typography variant="subtitle" component="div" gutterBottom>{ `Born: ${memberDetails.birthday}` }</Typography>}
                {memberDetails.deathday && <Typography variant="subtitle" component="div" gutterBottom>{ `Died: ${memberDetails.deathday}` }</Typography>}
            </div>
        </div>
    );
}

export default CastMemberMain;