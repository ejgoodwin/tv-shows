/*
    Container component: fetch data for the cast member using the id in the URL. Pass data to child presentational components.
*/

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import CastMemebrHero from "./CastMemeberHero";
import CastMemberBody from './CastMemberBody';

const CastMemberContainer = () => {
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
        .then(data => setMemberCrewCredits(data));
        return () => {};
    }, []);

    return (
        <React.Fragment>
            <CastMemebrHero memberDetails={memberDetails} />
            <CastMemberBody memberCrewCredits={memberCrewCredits} />
        </React.Fragment>
    );
};

export default CastMemberContainer;