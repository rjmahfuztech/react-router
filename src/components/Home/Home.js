import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import League from '../League/League';
import { Card } from 'react-bootstrap';


const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, []);

    return (
        <div className="container">
            <div>
                <Card className="banner-style">
                    <Card.Img className="banner-img" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-2018-passion-world-cup-football-banner-image_193768.jpg" alt="Background image" />
                    <Card.ImgOverlay className="alignment">
                        <Card.Title>
                            <h1 className="position">World Football Leagues Detail</h1>
                        </Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className="home-style">
                {
                    leagues.map(league => <League key={league.idLeague} league={league}></League>)
                }
            </div>
        </div>
    );
};

export default Home;