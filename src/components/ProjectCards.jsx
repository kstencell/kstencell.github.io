import React, {useEffect} from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CSS/Body.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import './CSS/ProjectCards.css';

function ProjectCards() {
    return ( 
        <Container className='card-group'>
            <Card>
                <Card.Img varient='top' src='' alt='placeholder img'/>
                <Card.Body>
                    <Card.Title className='h5'>Project I</Card.Title>
                    <Card.Text>Project Description stuff</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img varient='top' src='' alt='placeholder img'/>
                <Card.Body>
                    <Card.Title className='h5'>Project I</Card.Title>
                    <Card.Text>Project Description stuff</Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img varient='top' src='' alt='placeholder img'/>
                <Card.Body>
                    <Card.Title className='h5'>Project I</Card.Title>
                    <Card.Text>Project Description stuff</Card.Text>
                </Card.Body>
            </Card>
        </Container>
     );
}

export default ProjectCards;