import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ShowInfo = () => {
    const [showInfo, setShowInfo] = useState(null);

    // Need to fetch data so that if the user reloads, the data is fetched again instead of losing the state if it was passed down.
    const params = useParams();
    
    useEffect(() => {
        // Get current shows for about page.
        fetch(`https://api.tvmaze.com/shows/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setShowInfo(data);
        });
    }, []);

    if (!showInfo) {
        return '';
    } else {
        return (
            <div className="container">
                <h1>{showInfo.name}</h1>
                <img src={showInfo.image.medium}/>
                <p>Time: {showInfo.schedule.time} on {showInfo.network.name}</p>
                {showInfo.summary.replace(/(<([^>]+)>)/gi, "")}
            </div>
        );
    }

}

export default ShowInfo;