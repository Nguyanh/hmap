import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary clearfix" sticky="top">
            <Container>
                {/* Logo and brand name */}
                <Navbar.Brand className="fw-bold d-flex justify-content-start" href="#home">
                    <Image src="../logo.png" rounded/>{' '}
                    HMAP
                </Navbar.Brand>

                {/* Toggled options */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#founder">Founder</Nav.Link>
                        <NavDropdown title="HSI" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Meet Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Join Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Past Placements</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="PH116" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Meet Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Join Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Student Testimonials</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="FSI" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Meet Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Join Us</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#resources">TA Resources</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default NavBar;