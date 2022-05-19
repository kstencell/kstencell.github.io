import React, {useEffect} from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CSS/Body.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import './CSS/AboutMe.css'

import ProfilePicture from '../assets/me.png';
import Note from '../assets/looking-for-work-note.png';
import CurlUp from '../assets/curl-up.png';
import CurlDown from '../assets/curl-down.png';


function AboutMe() {

    useEffect(() => {
        AOS.init({
          duration: 50,
          ease: 'ease-out-back'
        });
        AOS.refresh();
      }, []);

    return (
        <Row className='about-me-view'>
            <Image src={CurlUp} className='curl-up'/>
            <Image src={CurlDown} className='curl-down'/>
            <Row className='p-0 m-0 about-me-row' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="300">
                <Container className='col-md-6 col-lg-4 col-xl-3 p-0 m-0 profile-picture-col d-flex align-items-end'>
                    <img src={ProfilePicture} className='profile-picture'/>
                </Container>
                <Container className='col-md-6 col-lg-8 col-xl-9 p-3 m-0 about-me-text-column d-flex flex-column'>
                    <Row className='h1 m-0 title-row'>About Me</Row>
                    <Row className='m-0 description-row'>
                        <Row className='pb-3'>I'm a Computer Scientist and Software Engineer residing in Waterloo, Ontario.</Row>
                        <Row className='pb-3'>Currently entering my 3rd year of a Bachelor of Computer Science (Honours) degree program at Conestoga College.</Row>
                        <Row>Graduated in 2019 with a Bachelor of Science (Honours) degree majoring in Theoretical Physics from the University of Guelph.</Row>
                    </Row>
                    <Row className='m-0 fun-fact-row'>In my spare time I can usually be found whittling away on personal projects (see more below!), playing guitar, watching NBA, and, as of recently, diving into VR gaming.</Row>
                </Container>
                <img src={Note} className='note'/>
            </Row>
        </Row>
     );
}

export default AboutMe;