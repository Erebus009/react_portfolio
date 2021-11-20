import React from "react";
import { useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";


function Header(props) {
    const [expanded, setExpanded] = useState(false);
    
    
    
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand={expanded} collapseOnSelect>
      <Container fluid className="d-flex justify-content-between">
        
        <Navbar.Brand href="/" className="display-1">
          Travis Puryear
         
      
          
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Offcanvas
          collapseOnSelect
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
             Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <Nav.Link eventKey="1" >{props.children}</Nav.Link>
            
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;
