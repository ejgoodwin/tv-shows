import personTemplate from '../../images/person-template.jpg';

const CastMemberMain = ({ memberDetails }) => {
    return (
        <div className="cast-member-main">
            <img src={ memberDetails.image && memberDetails.image.medium ? memberDetails.image.medium : personTemplate } />
            <div className="cast-member-main__text">
                <h1>{ memberDetails.name }</h1>
                {memberDetails.country && <p>Country: {memberDetails.country.name}</p>}
                {memberDetails.birthday && <p>Born: {memberDetails.birthday}</p>}
                {memberDetails.deathday && <p>Died: {memberDetails.deathday}</p>}
            </div>
        </div>
    );
}

export default CastMemberMain;