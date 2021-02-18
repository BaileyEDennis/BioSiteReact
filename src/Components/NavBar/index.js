import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="navbar">
      <Navbar color="light" light fixed="top" expand="md">
        <NavbarBrand href="/">bailey dennis</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/Bio">about</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Tech">technologies</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Projects">projects</Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link className="nav-link" to="/Blog">blog</Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
