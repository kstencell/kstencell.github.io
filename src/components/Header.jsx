import React, {useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BraceRight from '../assets/brace-right.png';
import BraceLeft from '../assets/brace-left.png';
import WhiteDot from '../assets/white-dot.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CSS/Header.css';
import Scroll from './Scroll';
import AOS from 'aos';
import "aos/dist/aos.css";


function Header() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          ease: 'ease-out-back'
        });
        AOS.refresh();
      }, []);

    return (
        <Container fluid className='view'>
            <Container fluid className='mask'>
                <Container fluid className='d-flex flex-column header'>
                    <Row className='h-40 justify-content-center align-items-center text-light titleFont nowrap' data-aos="zoom-in" data-aos-delay="100" data-aos-easing="ease">
                        Hi. I'm Karl Stencell
                    </Row>
                    <Container className='d-flex flex-row justify-content-center align-items-stretch middle-row'>
                        <Col className='p-0 d-flex align-items-start justify-content-end' data-aos="fade-right" data-aos-delay="600" data-aos-easing="ease" data-aos-duration="1500">
                            <img src={BraceLeft} className='brace-image'/>
                        </Col>
                        <Col className='col-auto mb-3'>
                            <Container classname='d-flex flex-column justify-content-center'>
                                <Row className='justify-content-center titleFont2 text-light nowrap' data-aos="fade-up" data-aos-delay="650" data-aos-easing="ease">
                                Software Engineer
                                </Row>
                                <Row className='justify-content-center titleFont2 text-light nowrap' data-aos="fade-up" data-aos-delay="700" data-aos-easing="ease">
                                Computer Scientist
                                </Row>
                                <Row className='justify-content-center titleFont2 text-light nowrap' data-aos="fade-up" data-aos-delay="750" data-aos-easing="ease">
                                Web Designer
                                </Row>
                                <Row className='justify-content-center titleFont2 text-light nowrap' data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease">
                                Theoretical Physicist
                                </Row>
                                <Row className='justify-content-center' data-aos="fade-up" data-aos-delay="850" data-aos-easing="ease">
                                <img src={WhiteDot} className='white-dot'/>
                                </Row>
                                <Row className='justify-content-center' data-aos="fade-up" data-aos-delay="900" data-aos-easing="ease">
                                <img src={WhiteDot} className='white-dot'/>
                                </Row>
                                <Row className='justify-content-center' data-aos="fade-up" data-aos-delay="950" data-aos-easing="ease">
                                <img src={WhiteDot} className='white-dot'/>
                                </Row>
                            </Container>
                        </Col>
                        <Col className='p-0 d-flex align-items-start justify-content-start' data-aos="fade-left" data-aos-delay="600" data-aos-easing="ease" data-aos-duration="1500">
                            <img src={BraceRight} className='brace-image'/>
                        </Col>
                    </Container>
                    <Container className="d-flex flex-column justify-content-around mt-auto" data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease">
                        <Row className='justify-content-center'>
                            <h5 class='text-light titleFont3 pt-3'>SCROLL DOWN</h5>
                        </Row>
                        <Row className='justify-content-center m-3'>
                            <Scroll/>
                        </Row>
                    </Container>
                </Container>
            </Container>
            <a id='about-me-anchor'/>
        </Container>
    );
}

export default Header;
