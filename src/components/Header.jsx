import React, {useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import video from '../assets/video.mp4';
import BraceImage from '../assets/white-brace.png';
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
        <Container className='view'>
            <Container className='mask'>
                <Container className='d-flex flex-column justify-content-center header has-bg-img'>
                    <Container className="h-50 justify-content-center align-items-center">
                        <Row className='justify-content-center align-items-center h-100'>
                            <h1 className='text-light titleFont' data-aos="zoom-in" data-aos-delay="400" data-aos-easing="ease">Hi. I'm Karl Stencell</h1>
                        </Row>
                    </Container>
                    <Container className='d-flex flex-row h-40 justify-content-center mt-1'>
                        <Col className='d-flex flex-column justify-items-right' data-aos="fade-right" data-aos-delay="1000" data-aos-easing="ease">
                            <div class='curly-brace align-self-end'>&#123;</div>
                        </Col>
                        <Col>
                            <Container classname='d-flex flex-column justify-content-center'>
                                <Row className='justify-content-center'>
                                <h3 className='text-light titleFont2' data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease">Software Engineer</h3>
                                </Row>
                                <Row className='justify-content-center'>
                                <h3 className='text-light titleFont2' data-aos="fade-up" data-aos-delay="1200" data-aos-easing="ease">Computer Scientist</h3>
                                </Row>
                                <Row className='justify-content-center opacity-75'>
                                <h3 className='text-light titleFont2' data-aos="fade-up" data-aos-delay="1400" data-aos-easing="ease">Web Designer</h3>
                                </Row>
                                <Row className='justify-content-center opacity-75'>
                                <h3 className='text-light titleFont2' data-aos="fade-up" data-aos-delay="1600" data-aos-easing="ease">Theoretical Physicist</h3>
                                </Row>
                                <Row className='justify-content-center opacity-75'>
                                <h3 className='text-light titleFont2 dot' data-aos="fade-up" data-aos-delay="1600" data-aos-easing="ease">&#xb7;</h3>
                                </Row>
                                <Row className='justify-content-center opacity-75'>
                                <h3 className='text-light titleFont2 dot' data-aos="fade-up" data-aos-delay="1600" data-aos-easing="ease">&#xb7;</h3>
                                </Row>
                                <Row className='justify-content-center opacity-75'>
                                <h3 className='text-light titleFont2 dot' data-aos="fade-up" data-aos-delay="1600" data-aos-easing="ease">&#xb7;</h3>
                                </Row>
                            </Container>
                        </Col>
                        <Col data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease">
                            <div class='curly-brace align-self-start'>&#125;</div>
                        </Col>
                    </Container>
                    <Container className="d-flex flex-column h-25 justify-content-around" data-aos="fade-up" data-aos-delay="2000" data-aos-easing="ease">
                        <Row className='justify-content-center'>
                            <h5 class='text-light titleFont3 pt-3'>SCROLL DOWN</h5>
                        </Row>
                        <Row className='justify-content-center'>
                            <Scroll/>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </Container>
            // <img src={BackgroundImage} alt='' className='bg-image background-image shadow-2-strong'/>
    );
}

export default Header;
