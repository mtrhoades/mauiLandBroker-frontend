import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MLBlogo from '../assets/images/MLBlogo.png';


function NavigationBar() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img className="navImg" alt="logo" src={MLBlogo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav
              className="ms-auto me-6 my-2 my-lg-0 fs-3"
            >
              <Nav.Link href="/">Home</Nav.Link>

              <NavDropdown title="About">
                <NavDropdown.Item className="navDropdownItem fs-5" href="/agents">Agents</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/about">About MLB</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/associations">Associations</Nav.Link>

              {/* <NavDropdown title="Associations" id="navbarScrollingDropdown">
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Hale Kaiola</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Koa Kai</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Kualono</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Kulamalu Hilltop</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Liholani Golf Villas</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Maluhia Country Ranches</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Pu'uone Terrace</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Wailuku Country Estates</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Waiolani Elua</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Waiolani Mauka</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Wailuku Parkside</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Waikapu Gardens</NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem fs-5" href="/associations">Waiale Elua</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navDropdownItem" href="/associations">
                  Something else here?
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
