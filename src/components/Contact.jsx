import React, { Component, useEffect } from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AOS from 'aos';
import "aos/dist/aos.css";
import './CSS/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolid, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { fa, faBrands, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Contact() {

    useEffect(() => {
        AOS.init({
          duration: 50,
          ease: 'ease-out-back'
        });
        AOS.refresh();
      }, []);

    return ( 
        <Row className='d-flex contact-view-container justify-content-center'>
            <Row className='contact-title h1 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                Contact
            </Row>
            <Row className='d-flex justify-content-center social-btns' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <a class="btn linkedin-in" href="https://www.linkedin.com/in/karl-stencell/" target='_blank'>
                    <FontAwesomeIcon class='fa' icon={faLinkedinIn}/>                
                </a>
                <a class="btn github" href="https://github.com/kstencell" target='_blank'>
                    <FontAwesomeIcon class='fa' icon={faGithub}/>                
                </a>
                <a class="btn envelope" href="mailto: karldstencell@gmail.com">
                    <FontAwesomeIcon class='fa' icon={faEnvelope}/>                
                </a>
            </Row>
        </Row>
     );
}

export default Contact;