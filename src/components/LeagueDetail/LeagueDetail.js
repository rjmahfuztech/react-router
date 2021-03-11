import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MoreDetail from '../MoreDetail/MoreDetail';

const LeagueDetail = () => {
    const {leagueId} = useParams();
    const [leagueDetail, setLeagueDetail] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetail(data.leagues));
    }, [leagueId]);
    // console.log(leagueDetail);
    return (
        <div>
            {
                leagueDetail.map(leagueInfo => <MoreDetail leagueInfo = {leagueInfo} key ={leagueInfo.idLeague}></MoreDetail>)
            }
        </div>
    );
};

export default LeagueDetail;