import {React, useState} from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CSS/NavigationBar.css';

function NavigationBar() {


    return (
        <Navbar bg="dark" variant='dark' className='navigationBar navbar-expand'>
        <Container>
            <Navbar.Brand>Karl Stencell</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='#about-me-anchor' onClick={() => this.className='nav-link'}>About</Nav.Link>
                <Nav.Link href='#projects-anchor' onClick={() => this.className='nav-link'}>Projects</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href='#contact-anchor' onClick={() => this.className='nav-link'}>Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      );
}

export default NavigationBar;

// class NavigationBar extends Component {
//     render() { 
//         return (
//             <Navbar bg="dark" expand="sm" variant='dark' className='navigationBar'>
//                 <Container>
//                     <Navbar.Brand>Karl Stencell</Navbar.Brand>
//                     <Nav className='me-auto'>
//                         <Nav.Link href=''>About</Nav.Link>
//                         <Nav.Link href=''>Projects</Nav.Link>
//                     </Nav>
//                     <Nav>
//                         <Nav.Link href=''>Contact</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         );
//     }
// }
 
// export default NavigationBar;