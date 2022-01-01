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
        // Use AbortController to abort the fetch and cleanup in return function to avoid memory leaks.
        const controller = new AbortController();
        fetch(`https://api.tvmaze.com/people/${params.id}`, {signal: controller.signal})
        .then(res => res.json())
        .then(data =>  setMemberDetails(data))
        .catch(e => console.log(e));

        // Get cast credit data for the cast member.
        fetch(`https://api.tvmaze.com/people/${params.id}/castcredits?embed=show`, {signal: controller.signal})
        .then(res => res.json())
        .then(data => setMemberCrewCredits(data))
        .catch(e => console.log('<CastMemberContainer>',e));
        
        return () => controller.abort();
    }, []);

    return (
        <React.Fragment>
            <CastMemebrHero memberDetails={memberDetails} />
            <CastMemberBody memberCrewCredits={memberCrewCredits} />
        </React.Fragment>
    );
};

export default CastMemberContainer;