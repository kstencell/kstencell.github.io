import React, {useEffect} from 'react';
import { Row, Col, Card, ListGroup, Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AOS from 'aos';
import "aos/dist/aos.css";
import './CSS/ProjectCards.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa, faBrands, faReact, faBootstrap, faFontAwesome, faSwift, faApple, faPython, faJs, faCss3Alt, faHtml5, faAws } from '@fortawesome/free-brands-svg-icons';
import { faSquare, faNetworkWired, faFile, faBowlRice, faHammer } from '@fortawesome/free-solid-svg-icons';

import WebsiteThumnail from '../assets/website-thumbnail-w400.jpg';
import PixelSketchThumnail from '../assets/pixel-sketch-thumbnail.jpg';
import GuitarPracticeThumnail from '../assets/guitar-practice-thumbnail.jpg';
import TicTacToeThumbnail from '../assets/tic-tac-toe-thumbnail.png';
import CrewDragonThumbnail from '../assets/crew-dragon-thumbnail.png';
import SentimentAnalysisThumbnail from '../assets/sentiment-analysis.png';
import Cpp from '../assets/cpp.png';
import Qt from '../assets/qt-logo.png';
import Python from '../assets/python.png';
import MySQL from '../assets/mysql.png';
import AWS from '../assets/aws2.png';
import JS from '../assets/javascript.png';
import csharp from '../assets/csharp.png';
import multithreading from '../assets/multithreading.png';
import soup from '../assets/soup.png';
import numpy from '../assets/numpy.png';
import MachineLearning from '../assets/machine-learning.png';


function ProjectCards() {

    useEffect(() => {
        AOS.init({
          duration: 50,
          ease: 'ease-out-back'
        });
        AOS.refresh();
      }, []);

    return ( 
        <Row className='p-0 card-group'>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={WebsiteThumnail} alt='This Website View'/>
                    <Card.Body>
                        <Card.Title className='h5'>This Website</Card.Title>
                        <Card.Text>My software engineering portfolio built entirely from the ground up with React. <br/><br/>This was an interesting project because the graphical design took the majority of development time. Since this website serves as a resume of sorts, it is important that it looks professional. <br/><br/> It became quite the meaningful study into flexible and responsive HTML design. As such, this website looks good on any screen size from mobile to ultrawides which I've now learned is no small feat!</Card.Text>
                    </Card.Body>
                    <ListGroup varient='flush'>
                        <ListGroup.Item className='technology-header'>
                            <Row className='p-0 m-0'>
                                <h5 className='list-item-header'>Technologies</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <FontAwesomeIcon className='fa-2x icon-container' icon={faReact} color='#61DBFB'/>
                                <h5 className='list-item-text'>React</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <FontAwesomeIcon className='fa-2x icon-container' icon={faBootstrap} color='#563d7c'/>
                                <h5 className='list-item-text'>Bootstrap</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <FontAwesomeIcon className='fa-2x icon-container' icon={faFontAwesome} color='rgb(82 141 215)'/>
                                <h5 className='list-item-text'>Font Awesome</h5>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={GuitarPracticeThumnail} alt='Guitar Practice Logo'/>
                    <Card.Body>
                        <Card.Title className='h5'>Guitar Practice</Card.Title>
                        <Card.Text>This is an iOS app developed, designed, and deployed solely by myself. It reached #23 on the App Store charts for music apps in Canada.<br/><br/>The premise is that it generates melodic chord progressions using randomly chosen chord positions along the fretboard. By ensuring musical coherence, rote finger exercises are guaranteed to be pleasant to the ear. <br/><br/>This project started as a Python script and then I ported it to iOS so that I could practice guitar on my front porch. </Card.Text>
                    </Card.Body>
                    <ListGroup varient='flush'>
                        <ListGroup.Item className='technology-header'>
                            <Row className='p-0 m-0'>
                                <h5 className='list-item-header'>Technologies</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <FontAwesomeIcon className='fa-2x icon-container' icon={faSwift} color='#F05138'/>
                                <h5 className='list-item-text'>Swift</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <FontAwesomeIcon className='fa-2x icon-container' icon={faHammer} color='#1778e4'/>
                                <h5 className='list-item-text'>Xcode</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={Python}/>
                                <h5 className='list-item-text'>Python</h5>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={PixelSketchThumnail} alt='Pixel Sketch Logo'/>
                    <Card.Body>
                        <Card.Title className='h5'>Pixel Sketch</Card.Title>
                        <Card.Text>An interactive pixel drawing website which was my first stab at web development and uses only the basic web dev stack.<br/><br/>This project was developed as part of The Odin Project open-source Javascript course. <br/><br/>It served as an introductory study into how Javascript provides interactability to otherwise static pages.</Card.Text>
                    </Card.Body>
                    <ListGroup varient='flush'>
                        <ListGroup.Item className='technology-header'>
                            <Row className='p-0 m-0'>
                                <h5 className='list-item-header'>Technologies</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                {/* <span className="fa-layers fa-fw stacked-icon-container">
                                    <FontAwesomeIcon icon={faSquare} size='icon-container fa-2x'/>
                                    <FontAwesomeIcon className='fa-2x icon-container' icon={faJs} color='#f0db4f'/>
                                </span> */}
                                <Image className='logo-img' src={JS}/>
                                <h5 className='list-item-text'>Javascript</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <FontAwesomeIcon className='fa-2x icon-container' icon={faCss3Alt} color='#264de4'/>
                                <h5 className='list-item-text'>CSS3</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <FontAwesomeIcon className='fa-2x icon-container' icon={faHtml5} color='#e34c26'/>
                                <h5 className='list-item-text'>HTML5</h5>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={TicTacToeThumbnail} alt='Tic-Tac-Toe Thumbnail'/>
                    <Card.Body>
                        <Card.Title className='h5'>Online Tic-Tac-Toe</Card.Title>
                        <Card.Text>This project is the combination of a web server and a client GUI application.<br/><br/>Agile development methodologies were leveraged by myself and three other developers to bring this project to a production quality release.<br/><br/>The database was hosted on AWS to provide account/statistic consistency across remote clients. </Card.Text>
                    </Card.Body>
                    <ListGroup varient='flush'>
                        <ListGroup.Item className='technology-header'>
                            <Row className='p-0 m-0'>
                                <h5 className='list-item-header'>Technologies</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={Cpp}/>
                                <h5 className='list-item-text'>C++</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={Qt}/>
                                <h5 className='list-item-text'>Qt Creator</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={MySQL}/>
                                <h5 className='list-item-text'>MySQL Database</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={AWS}/>
                                <h5 className='list-item-text'>Amazon Web Services</h5>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={CrewDragonThumbnail} alt='Crew Dragon Thumbnail'/>
                    <Card.Body>
                        <Card.Title className='h5'>Crew Dragon HMI</Card.Title>
                        <Card.Text>A science fiction themed SCADA/HMI program for a spaceship.<br/><br/>Four independent modules (Movement, Alarm, Energy, and Hull Integrity) operate on individual threads that communicate through file I/O. The GUI runs on a fifth thread to provide program responsiveness.<br/><br/>This project was the result of a collaboration with three other developers using agile developement methodologies.</Card.Text>
                    </Card.Body>
                    <ListGroup varient='flush'>
                        <ListGroup.Item className='technology-header'>
                            <Row className='p-0 m-0'>
                                <h5 className='list-item-header'>Technologies</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={csharp}/>
                                <h5 className='list-item-text'>C#</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <FontAwesomeIcon className='fa-2x icon-container' icon={faFile} color='#125282'/>
                                <h5 className='list-item-text'>Windows Forms</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={multithreading}/>
                                <h5 className='list-item-text'>Background Worker (Multi-Threading)</h5>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={SentimentAnalysisThumbnail} alt='Sentiment Analysis Thumbnail'/>
                    <Card.Body>
                        <Card.Title className='h5'>Sentiment Stock Risk Analyzer</Card.Title>
                        <Card.Text>This project involves web scraping well known financial news sites and tracking stock prices of mentioned companies.<br/><br/>Rudimentary machine learning techniques are used to deduce sentiment, categorically predict price movement, and perform risk analysis.<br/><br/>This project is not open-source.</Card.Text>
                    </Card.Body>
                    <ListGroup varient='flush'>
                        <ListGroup.Item className='technology-header'>
                            <Row className='p-0 m-0'>
                                <h5 className='list-item-header'>Technologies</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={Python}/>
                                <h5 className='list-item-text'>Python</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={numpy}/>
                                <h5 className='list-item-text'>Numpy</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={soup}/>
                                <h5 className='list-item-text'>Beautiful Soup</h5>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Image className='logo-img' src={MachineLearning}/>
                                <h5 className='list-item-text'>Machine Learning</h5>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
     );
}

export default ProjectCards;