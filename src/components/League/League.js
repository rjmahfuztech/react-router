import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const League = (props) => {
    const { strLeague, idLeague, strSport } = props.league;
    const history = useHistory();
    const handleClick = (byId) => {
        const url = `/league/${byId}`;
        history.push(url);
    }
    
    return (
        <div className="text-center">
            <Card className="card-color" style={{ maxWidth: '18rem', margin: '0 auto', backgroundColor: 'rgb(14, 188, 204)', color: 'rgb(116, 16, 16)' }}>
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        Sport Type: {strSport}
                    </Card.Text>
                    <Button onClick={() => handleClick(idLeague)} variant="info">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;