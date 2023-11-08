import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Image from "react-bootstrap/Image";
import LoginedUserInfo from "./loggedInUserInfo.jsx";

const Header = () => {
  return (
    <header>
      <Navbar fixed="top" expand="lg" style={{ backgroundColor: "#68b072" }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src="../logo.png" style={{ height: "40px" }} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <LinkContainer to="/cabs">
                <Nav.Link>Cabs</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav>
              <LoginedUserInfo />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
