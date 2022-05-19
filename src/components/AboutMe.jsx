import React, {useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CSS/Body.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import './CSS/AboutMe.css'

import ProfilePicture from '../assets/me.png';
import Note from '../assets/looking-for-work-note.png';

function AboutMe() {
    return ( 
        <Container className='p-0 row about-me-view'>
            <Row className='p-0 m-0 about-me-row'>
                <Col className='p-0 m-0 profile-picture-col d-flex align-items-end'>
                    <img src={ProfilePicture} className='profile-picture'/>
                </Col>
                <Col className='about-me-text-column d-flex flex-column'>
                    <Row className='h1 mb-0 title-row'>About Me</Row>
                    <Row className='description-row'>
                        <Row className='pb-3'>I'm a Computer Scientist and Software Engineer residing in Waterloo, Ontario.</Row>
                        <Row className='pb-3'>Currently entering my 3rd year of a Bachelor of Computer Science (Honours) degree program at Conestoga College.</Row>
                        <Row>Graduated in 2019 with a Bachelor of Science (Honours) degree majoring in Theoretical Physics from the University of Guelph.</Row>
                    </Row>
                    <Row className='mt-0 fun-fact-row'>In my spare time I can usually be found whittling away on personal projects (see more below!), playing guitar, watching NBA, and, as of recently, diving into VR gaming.</Row>
                </Col>
                <img src={Note} className='note'/>
            </Row>
        </Container>
     );
}

export default AboutMe;