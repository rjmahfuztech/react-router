import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import League from '../League/League';
import banner from '../../banner.jpg';


const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, []);
    // console.log(leagues);
    return (
        <div className="container">
            <div>
                <img src={banner} className="img-fluid" alt="..."/>
                {/* <h1>h2</h1> */}
            </div>
            <div className="home-style col-sm">
                {
                    leagues.map(league => <League key={league.idLeague} league={league}></League>)
                }
            </div>
        </div>
    );
};

export default Home;