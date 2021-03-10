import React from 'react';
import './MoreDetail.css';
import { faFlag, faMars, faPodcast, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import male from '../../photo/male.png';
import female from '../../photo/female.png';
import Facebook from '../../icon/Facebook.png';
import Twitter from '../../icon/Twitter.png';
import YouTube from '../../icon/YouTube.png';
import { Link } from 'react-router-dom';

const moreDetail = (props) => {
    const { strLeague, strCountry, intFormedYear, strBanner, strGender, strCurrentSeason, strLogo, strTwitter, strYoutube, strFacebook } = props.leagueInfo;
    return (
        <div className="container">
            <img src={strBanner} className="img-fluid" alt=""/>
            <div className="pb-5 detail-style pt-3">
                <div className="d-flex">
                    <div className="col-sm-7">
                        <h2>{strLeague}</h2>
                        <h4><FontAwesomeIcon icon={faPodcast} /> FormedYear: {intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faWind} /> CurrentSeason: {strCurrentSeason}</h4>
                        <h4><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h4>
                    </div>
                    <div className="col-sm-5">
                        <img src={female} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="mt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit minima dolorem odit eveniet sint nisi illo ipsam, error atque eum est suscipit aliquid quasi unde quibusdam iure officiis doloribus? Magni, maxime culpa. Rem quam animi eius, a rerum ducimus tempore consequuntur reprehenderit. Quasi, voluptas soluta! Veniam facere esse fugit. Ratione maxime asperiores odit culpa, officiis perferendis repudiandae veniam at!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nostrum. Minima enim iste eaque saepe dolorum commodi? Quae, architecto cum delectus quasi tempora provident assumenda incidunt iste odio illum, modi natus temporibus nemo fuga molestiae voluptatem odit, veritatis eum molestias cupiditate dignissimos alias fugiat maiores voluptates? Fuga neque explicabo quibusdam.</p>
                </div>
                <div className="icon-style text-center mt-5 ">
                    <Link to={`${strFacebook}`}><img src={Facebook} alt="" /></Link>
                    <Link to={`${strTwitter}`}><img src={Twitter} alt="" /></Link>
                    <Link to={`${strYoutube}`}><img src={YouTube} alt="" /></Link>
                </div>
            </div>

        </div>
    );
};

export default moreDetail;