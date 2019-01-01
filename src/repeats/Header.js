import React from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
}
from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" expand="md" light className="fixed-top bg-header">
          <NavbarBrand tag={Link} to="/"><img src={'../assets/Logo.png'}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">CONTACT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/team">TEAM</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
