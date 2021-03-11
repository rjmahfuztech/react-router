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
import { Card } from 'react-bootstrap';

const moreDetail = (props) => {
    const { strLeague, strCountry, intFormedYear, strBanner, strGender, strCurrentSeason, strLogo, strTwitter, strYoutube, strFacebook } = props.leagueInfo;

    const genderMatch = `${strGender}` === "Male" ? <img src={male} className="img-fluid" alt="Male" /> : <img src={female} className="img-fluid" alt="Female" />;

    return (
        <div className="container">
            <Card className="banner-style">
                <Card.Img className="banner" src={strBanner} alt="Card image" />
                <Card.ImgOverlay className="text-center">
                    <Card.Title>
                        <img className="league-logo " src={strLogo} alt="Logo" />
                    </Card.Title>
                </Card.ImgOverlay>
            </Card>
            <div className="pb-5 detail-style pt-4">
                <div className="detail-info">
                    <div className="detail-info-style row">
                        <div className="col-sm-12 col-md-6">
                            <div className="text-white">
                                <div className="card-body">
                                    <h3 className="card-title">{strLeague}</h3>
                                    <h5 className="card-text"><FontAwesomeIcon icon={faPodcast} /> FormedYear: {intFormedYear}</h5>
                                    <h5 className="card-text"><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                                    <h5 className="card-text"><FontAwesomeIcon icon={faWind} /> CurrentSeason: {strCurrentSeason}</h5>
                                    <h5 className="card-text"><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 pt-2">
                            {genderMatch}
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
                    <div className="text-center mt-3">
                    <Link to="/home"><button className="btn-primary">Go Back</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default moreDetail;