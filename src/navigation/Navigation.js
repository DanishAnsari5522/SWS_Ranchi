import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

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
                    <Container className="dannav">
                        <Navbar.Brand>
                            {/* <img src={logo} className="logo" /> */}
                            SWS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link eventKey={2} href="#memes"></Nav.Link>
                                <Link to="/" className="nav-item text-secondary">Home</Link>
                                <Link to="/Origin" className="nav-item text-secondary">Origin</Link>
                                <Link to="/Activitys" className="nav-item text-secondary">Activitys</Link>
                                <Link to="/gallery" className="nav-item text-secondary">Gallery</Link>
                                <Link to="/contactus" className="nav-item text-secondary">Contact Us</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation