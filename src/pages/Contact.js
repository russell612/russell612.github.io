import './Styles.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { BsLinkedin } from 'react-icons/bs';
import { BsMailbox2 } from 'react-icons/bs';

function Contact() {
    return(
        <div className='BasicStyle'>
            <header className='Header'>
                <h1>Contact me!</h1>
            </header>
            <hr></hr>
            <br></br>
            <Container fluid>
                <Row>
                    <h4 className='CenterStyle'>My Email</h4>
                </Row>
                <Row>
                    <Col>                    
                    </Col>
                    <Col>
                        <Button href="mailto:russellkong616@gmail.com"
                            variant="dark"
                            size = 'lg'
                            className="d-grid gap-2"
                            >
                            <BsMailbox2 style={{display:"block", margin:"auto" }}/>
                        </Button> 
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <h4 className='CenterStyle'>LinkedIn</h4>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button href="https://www.linkedin.com/in/russell616/"
                                variant="dark"
                                size = 'lg'
                                className="d-grid gap-2"
                                target='_blank'
                                
                                >
                                <BsLinkedin style={{display:"block", margin:"auto" }}/>
                        </Button> 
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
            <br></br>

        </div>
    )
};



export default Contact