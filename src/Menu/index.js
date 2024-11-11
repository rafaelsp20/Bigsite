import React from "react";
import "./styles.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function AppMenu() {
  return (<>
    <Navbar collapseOnSelect expand={false} bg="dark" variant="dark" fixed="top" className="py-3 w-100">
      <Navbar.Brand href="#home">
        <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Expresso Gordinho

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/servico">Serviço</Nav.Link>
          <Nav.Link href="/galeria">Galeria de Fotos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>  
    
 </>);
}
