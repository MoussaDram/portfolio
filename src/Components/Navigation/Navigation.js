import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import "../../App.css"

function NavbarItems() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='logo'>
            <Link to="/">Moussa</Link></Navbar.Brand>
          <Nav className="navlink">
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/portfolio">Portfolio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavbarItems;
