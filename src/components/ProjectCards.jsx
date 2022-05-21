import React, {useEffect} from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AOS from 'aos';
import "aos/dist/aos.css";
import './CSS/ProjectCards.css';
import WebsiteThumnail from '../assets/website-thumbnail-w400.jpg';
import PixelSketchThumnail from '../assets/pixel-sketch-thumbnail.jpg';
import GuitarPracticeThumnail from '../assets/guitar-practice-thumbnail.jpg';
import TicTacToeThumbnail from '../assets/tic-tac-toe-thumbnail.png';
import CrewDragonThumbnail from '../assets/crew-dragon-thumbnail.png';
import SentimentAnalysisThumbnail from '../assets/sentiment-analysis.png';


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
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={GuitarPracticeThumnail} alt='Guitar Practice Logo'/>
                    <Card.Body>
                        <Card.Title className='h5'>Guitar Practice</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={PixelSketchThumnail} alt='Pixel Sketch Logo'/>
                    <Card.Body>
                        <Card.Title className='h5'>Pixel Sketch</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={TicTacToeThumbnail} alt='Tic-Tac-Toe Thumbnail'/>
                    <Card.Body>
                        <Card.Title className='h5'>Online Tic-Tac-Toe</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={CrewDragonThumbnail} alt='Crew Dragon Thumbnail'/>
                    <Card.Body>
                        <Card.Title className='h5'>Crew Dragon HMI</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col-12 col-lg-6 col-xl-4 d-flex justify-content-center' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease" data-aos-duration="500">
                <Card>
                    <Card.Img varient='top' src={SentimentAnalysisThumbnail} alt='Sentiment Analysis Thumbnail'/>
                    <Card.Body>
                        <Card.Title className='h5'>Sentiment Stock Risk Analyzer</Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
     );
}

export default ProjectCards;