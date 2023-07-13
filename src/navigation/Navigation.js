import { Navbar, Nav, Container, Button, NavDropdown, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { FaFingerprint, FaOpencart } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import logo from '../assets/logo.jpg'



function Navigation() {
    const auth = localStorage.getItem('token');
    const logout = () => {
        localStorage.clear();
        window.location.replace("/");
    }
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className="dan">
                        <Navbar.Brand> <img src={logo} className="logo" />SWS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link eventKey={2} href="#memes"></Nav.Link>
                                <Link to="/" className="nav-item text-secondary">Home</Link>
                                <NavDropdown title="Who We are" id="collasible-nav-dropdown" className='select'>
                                    <NavDropdown.Item>
                                        <Link to="/Origin" className="nav-item text-secondary">Origin</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Join" id="collasible-nav-dropdown" className='select'>
                                    <NavDropdown.Item>
                                        <Link to="/Organza" className="nav-item text-secondary">Organza</Link>
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Item>
                                        <Link to="/Printed" className="nav-item text-secondary">Printed</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/doublelayered" className="nav-item text-secondary">Double Layered Hair Bows</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/Wristlets" className="nav-item text-secondary">Wristlets</Link>
                                    </NavDropdown.Item> */}
                                </NavDropdown>

                                <NavDropdown title="News" id="collasible-nav-dropdown" className='select'>
                                    <NavDropdown.Item>
                                        <Link to="/Organza" className="nav-item text-secondary">Organza</Link>
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Item>
                                        <Link to="/Printed" className="nav-item text-secondary">Printed</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/doublelayered" className="nav-item text-secondary">Double Layered Hair Bows</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/Wristlets" className="nav-item text-secondary">Wristlets</Link>
                                    </NavDropdown.Item> */}
                                </NavDropdown>

                                <Link to="/gallery" className="nav-item text-secondary">Gallery</Link>
                                <Link to="/contactus" className="nav-item text-secondary">Contact Us</Link>
                            </Nav>
                            <Nav>
                                <Link to="/Login" className="nav-item text-secondary">Login</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation