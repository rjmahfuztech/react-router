import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import League from '../League/League';
import banner from '../../banner.jpg';
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
                    <Card.Img className="banner-img" src={banner} alt="Background image" />
                    <Card.ImgOverlay className="alignment">
                        <Card.Title>
                            <h2 className="position">World Football Leagues Detail</h2>
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