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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Bailey Dennis</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/Bio">About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Tech">Technologies</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Projects">Projects</Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link className="nav-link" to="/Blog">Blog</Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
