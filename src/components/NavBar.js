import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container>
                {/* Logo and brand name */}
                <Navbar.Brand className="fw-bold" href="#home">
                    <img 
                        src={logo}
                        alt=""
                        width="30"
                        height="30"
                        className='d-inline-block align-top'
                    />
                    {' '}
                    HMAP
                </Navbar.Brand>

                {/* Toggled options */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/founder">Founder</Nav.Link>
                        <NavDropdown title="HSI" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/hsi">About</NavDropdown.Item>
                            <NavDropdown.Item href="/hsi#meet_team">Meet Team</NavDropdown.Item>
                            <NavDropdown.Item href="/hsi#join_us">Join Us</NavDropdown.Item>
                            <NavDropdown.Item href="/hsi#past_placements">Past Placements</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="PH116" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/ph116">About</NavDropdown.Item>
                            <NavDropdown.Item href="/ph116#meet_team">Meet Team</NavDropdown.Item>
                            <NavDropdown.Item href="/ph116#join_us">Join Us</NavDropdown.Item>
                            <NavDropdown.Item href="/ph116#student_testimonials">Student Testimonials</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="FSI" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/fsi">About</NavDropdown.Item>
                            <NavDropdown.Item href="/fsi#meet_team">Meet Team</NavDropdown.Item>
                            <NavDropdown.Item href="/fsi#join_us">Join Us</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/resources">TA Resources</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default NavBar;