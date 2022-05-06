import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import video from '../assets/video.mp4';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CSS/Header.css';

class Header extends Component {
    state = {  } 
    render() { 
        return (
        <Container className='d-flex flex-column justify-content-center m-0 header has-bg-img'>
            <Row className='align-self-center'>
            <h1 className='text-light titleFont'>Hi. I'm Karl Stencell</h1>
            </Row>
            <Row className='align-self-center'>
            <h3 className='text-light titleFont2'>A Software Engineer</h3>
            </Row>
            <video loop autoPlay muted className='bg-img'
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
            </video>
        </Container>
        );
    }
}
 
export default Header;


// export const Header = () => (
//     <Container className='Header'>
        {/* <video loop autoPlay muted
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
//         <Container>
//             <h1>Welcome</h1>
//         </Container>
//     </Container>
// );
