
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import lmao from '../lmao.png';

function Navigationbar() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" fixed='top' style={{position: "sticky"}}>
                <Container>
                    <Navbar.Brand>
                        <img src={lmao} alt="" height="30" width="30"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About Me</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigationbar;