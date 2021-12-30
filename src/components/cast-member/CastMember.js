import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CastMemberMain from "./CastMemberMain";
import CastMemberCreditCard from "./CastMemberCreditCard";

const CastMember = () => {
    const [memberDetails, setMemberDetails] = useState('');
    const [memberCrewCredits, setMemberCrewCredits] = useState('')

    const params = useParams();

    useEffect(() => {
        // Get main data for the cast member.
        fetch(`https://api.tvmaze.com/people/${params.id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setMemberDetails(data);
        });

        // Get cast credit data for the cast member.
        fetch(`https://api.tvmaze.com/people/${params.id}/castcredits?embed=show`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMemberCrewCredits(data);
        });
    }, []);

    return (
        <div className="container">
            <CastMemberMain memberDetails={memberDetails} />
            <h2>Know for</h2>
            <div className="cast-member-credits">
                {[...memberCrewCredits].map(item => <CastMemberCreditCard credit={item._embedded.show} />)}
            </div>
        </div>
    );
};

export default CastMember;