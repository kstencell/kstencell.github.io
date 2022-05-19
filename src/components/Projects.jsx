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
        <Container className='p-0 projects-view-container'>
            <Col className='p-0 m-0 project-view-col'>
                <Row className='m-0 projects-title h1 d-flex justify-content-center'>
                    Projects
                </Row>
                <ProjectCards/>
            </Col>
        </Container>
     );
}

export default Projects;