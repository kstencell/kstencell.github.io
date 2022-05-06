import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CSS/NavigationBar.css';

class NavigationBar extends Component {
    render() { 
        return (
            <Navbar bg="dark" expand="sm" variant='dark' className='navigationBar'>
                <Container>
                    <Navbar.Brand>Karl Stencell</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href=''>About</Nav.Link>
                        <Nav.Link href=''>Projects</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href=''>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
 
export default NavigationBar;