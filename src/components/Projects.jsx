import React, {useEffect} from 'react';
import { Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CSS/Body.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import './CSS/Projects.css';
import ProjectCards from './ProjectCards';


function Projects() {
    return ( 
        <Row className='projects-view-container d-flex justify-content-center'>
            <Row className='m-0 projects-title h1 d-flex justify-content-center'>
                Projects
            </Row>
            <ProjectCards/>
        </Row>
     );
}

export default Projects;