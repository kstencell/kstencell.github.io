import React, {useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CSS/Body.css';
import AOS from 'aos';
import "aos/dist/aos.css";

import AboutMe from './AboutMe'


function Body() {
    return ( 
        <Container className='body-view'>
            <AboutMe/>
        </Container>
     );
}

export default Body;