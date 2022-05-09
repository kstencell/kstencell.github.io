import React, {useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import video from '../assets/video.mp4';
import BackgroundImg from '../assets/richard-hong-toronto-even-darker.jpg';
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
        <Container className='d-flex flex-column justify-content-center header has-bg-img'>
            <Container className="h-50 justify-content-center align-items-center">
                <Row className='justify-content-center align-items-center h-100'>
                    <h1 className='text-light titleFont' data-aos="zoom-in" data-aos-delay="400" data-aos-easing="ease">Hi. I'm Karl Stencell</h1>
                </Row>
            </Container>
            <Container className='d-flex flex-row h-40 justify-content-center mt-1'>
                <Col>
                    <h1>A</h1>
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
                    </Container>
                </Col>
                <Col>
                    <h1>C</h1>
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
            <img src={BackgroundImg} className='bg-img' 
            style={{
                position: 'absolute',
                width: "100%",
                height: "100%",
                left: "50%",
                top: "50%",
                objectFit: 'cover',
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}/>
            {/* <video loop autoPlay muted className='bg-img'
            style={{
                position: 'absolute',
                width: "100%",
                height: "100%",
                left: "50%",
                top: "50%",
                objectFit: 'cover',
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
                <source src={video} type="video/mp4"/>
            </video> */}
        </Container>
    );
}

export default Header;
