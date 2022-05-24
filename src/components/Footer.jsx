import React, { Component, useEffect } from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AOS from 'aos';
import "aos/dist/aos.css";
import './CSS/Footer.css';

function Footer() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          ease: 'ease-out-back'
        });
        AOS.refresh();
      }, []);

    return ( 
        <Row className='w-100 justify-content-center footer text-center'>
            <h5 className='email'>karldstencell@gmail.com</h5>
            <div className='credits'>
                Background image by Richard Hong (https://unsplash.com/@h_richard)
                <br/>
                Icon image from Flaticon.com (https://www.flaticon.com/free-icons/person)
            </div>
        </Row>
     );
}

export default Footer;