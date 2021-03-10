import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const League = (props) => {
    const { strLeague, idLeague } = props.league;
    const history = useHistory();
    const handleClick = (byId) => {
        const url = `/league/${byId}`;
        history.push(url);
    }
    // console.log(props.league);
    return (
        <div className="text-center">
            <Card style={{ maxWidth: '18rem', margin: '0 auto' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button onClick={() => handleClick(idLeague)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;