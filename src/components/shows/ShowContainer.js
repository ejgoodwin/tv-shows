import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CastMemberCard from "./CastMemberCard";
import ShowMain from "./ShowMain";

/*
    Container component: fetch data for the show using the id in the URL. Pass data to child presentational components.
*/

const ShowContainer = () => {
    const [showInfo, setShowInfo] = useState(null);

    // Fetch data from URL param so that if the user reloads, the data is fetched again instead of losing the state if it was passed down.
    const params = useParams();
    
    useEffect(() => {
        // Get data for the show that has ID matching the URL param.
        fetch(`https://api.tvmaze.com/shows/${params.id}?embed[]=cast&embed[]=images`)
        .then(res => res.json())
        .then(data => {
            setShowInfo(data);
        });
    }, []);

    if (!showInfo) return '';

    return (
        <div className="container">
            <ShowMain showInfo={showInfo} />
            {showInfo._embedded.cast.length > 0 && <h2>Cast</h2>}
            <div className="cast-container">
                {showInfo._embedded.cast.map(person => <CastMemberCard details={person} key={person.person.id} />)}
            </div>
        </div>
    );
}

export default ShowContainer;