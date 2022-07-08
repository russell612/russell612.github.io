import './About.css';
import React, {useEffect} from 'react';
import FadeIn from 'react-fade-in';
import Aos from "aos";
import "aos/dist/aos.css";
import { ListGroup } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const AboutMe = () => { 
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return(
        <div className='About'>
            <FadeIn transitionDuration="1000" delay="00">
            <div>
                <header className='AboutHeader'>
                    <h2 className='Headings'>About Me</h2>
                    <p></p>
                    <p>
                        Hey there! My name is Russell, an avid learner of coding and everything tech. <br></br><br></br>
                        I am based from Monash University Malaysia, Selangor and am currently undergoing my second year of University studying Computer Science with a specialization 
                        in Advanced Comptuer Science.
                    </p>
                </header>
                <text className='AboutHeaderRight' data-aos='fade-right' data-aos-delay="000">
                    Coming from Tawau, Sabah. I am interested in learning more about various fields in Computer Science such as data structures and algorithms, mobile and web app development and Artificial Intelligence.
                </text>
                <br></br>
                <text className='AboutHeader' data-aos='fade-left' data-aos-delay="000">
                    My skillsets:
                </text>
                <br></br>
                <div data-aos='fade-left' data-aos-delay="000">
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={3}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1" variant="secondary">
                                    Mobile Application Development
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2" variant="secondary">
                                    TensorFlow ML Framework
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link3" variant="secondary">
                                    Web Development
                                </ListGroup.Item>
                            </ListGroup>
                            </Col>
                            <Col sm={9} className="pt-3">
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1" variant="secondary">
                                    <text>
                                        Experience in Android App Development with knowledge on building apps, layout design, debugging, database management and deployment onto Google Play.
                                    </text>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2" variant="secondary">
                                    <text>Skilled in building Neural Networks to handle a variety of tasks such as Image Classification, Time Series Prediction and Natural Language Processing.</text>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link3" variant="secondary">
                                    <text>
                                        Knowledgable in building UI for websites using the React.js Framework (This website is one example). I have also done a vacation planning website using Material Design Lite and Mapbox APIs
                                    </text>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
            </FadeIn>
            <div data-aos='fade-left' data-aos-delay="000">
                <text className='AboutHeader' data-aos='fade-left' data-aos-delay="000">
                    My Experiences:
                </text>
                <br></br>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" variant="dark">
                        <Row>
                            <Col sm={3}>
                            <ListGroup variant="dark">
                                <ListGroup.Item action href="#link1" variant="secondary">
                                    AFS Intercultural Exchange
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2" variant="secondary">
                                    WIRED Malaysia Events Associate
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link3" variant="secondary">
                                    Kiosk Manager at Cocoraw Chocoalates
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link4" variant="secondary">
                                    "Hello Coders" Mentor
                                </ListGroup.Item>                                
                            </ListGroup>
                            </Col>
                            <Col sm={9} className="pt-3">
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <h5>February 2019 - January 2020</h5>
                                    <text>
                                        Went on an exchange year to Switzerland to learn a new foreign language and connect with people that not only live locally but also from other countries across the world
                                    </text>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    <h5>November 2021 - Present</h5>
                                    <text>Tasked with helping and managing logistics for WIRED Malaysia Events</text>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link3">
                                    <h5>November 2020 - January 2021</h5>
                                    <text>
                                        Managed a kiosk selling chocolates to help in interpersonal skills and communication with cilents and customers.
                                    </text>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">
                                    <h5>November 2021 - July 2022</h5>
                                    <text>
                                        Mentoring incoming computer science students by helping them with course advice and enquiries about coding and school.
                                    </text>
                                </Tab.Pane>                                
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div> 
                 
                 
            </div>
        </div>
    )
};

export default AboutMe;

