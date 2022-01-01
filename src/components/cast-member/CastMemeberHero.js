/*
    Presentational component: display cast member data.
    Data: image, name, birthday, birthplace and deathday.
*/

import personTemplate from '../../images/person-template.jpg';
import { Typography } from '@mui/material';

const CastMemebrHero = ({ memberDetails }) => {
    return (
        <section className="hero-inner">
            <div className="hero-inner__container container">
                <img className="hero-inner__image" src={ memberDetails.image && memberDetails.image.medium ? memberDetails.image.medium : personTemplate } />
                <div className="hero-inner__text">
                    <Typography variant="h2" component="h1">{ memberDetails.name }</Typography>
                    {memberDetails.birthday && <Typography variant="subtitle" component="div" gutterBottom>{ `Born: ${new Date(memberDetails.birthday).toDateString()} in ${memberDetails.country.name}` }</Typography>}
                    {memberDetails.deathday && 
                        <Typography 
                        variant="subtitle" 
                        component="div" 
                        gutterBottom>{ `Died: ${new Date(memberDetails.deathday).toDateString()}` }</Typography>}
                </div>
            </div>
        </section>
    );
}

export default CastMemebrHero;