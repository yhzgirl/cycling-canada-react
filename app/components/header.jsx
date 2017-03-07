import React from 'react';
import { Navbar, NavDropdown, NavItem, Nav, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


require('../styles/App.scss');
require('../styles/header.scss');

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect id="header">
        <Navbar.Header>
          <a href="/"><h1>Cycling Across Canada for Crohn&apos;s</h1></a>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="menu" pullLeft>
            <NavItem eventKey={1} href="https://www.youtube.com/channel/UCgZu2jNyVKDtqoq0zTUCDnw" >Vlog</NavItem>

            <LinkContainer to="/route_map">
              <NavItem eventKey={2} >Route</NavItem>
            </LinkContainer>

            <LinkContainer to="/gear">
              <NavItem eventKey={3}>Gear</NavItem>
            </LinkContainer>

            <NavDropdown eventKey={4} title="More Info" id="basic-nav-dropdown">
              <LinkContainer to="/about">
                <MenuItem eventKey={4.1}>About Us</MenuItem>
              </LinkContainer>

              <LinkContainer to="/Contact">
                <MenuItem eventKey={4.2}>Contact</MenuItem>
              </LinkContainer>

              <LinkContainer to="/faq">
                <MenuItem eventKey={4.3}>FAQ&apos;s</MenuItem>
              </LinkContainer>

            </NavDropdown>
          </Nav>
          <Nav pullRight className="social-media">
            <NavItem eventKey={5} href="#">
              <a href="https://twitter.com/cycling_woman" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter fa-2x" />
              </a>
            </NavItem>
            <NavItem eventKey={6} href="#">
              <a href="https://instagram.com/cycling_woman/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram fa-2x" />
              </a>
            </NavItem>
            <NavItem eventKey={7} href="#">
              <a href="https://www.youtube.com/channel/UCgZu2jNyVKDtqoq0zTUCDnw?sub_confirmation=1&feature=iv&src_vid=mWC514efG40&annotation_id=annotation_2210725983" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube-square fa-2x" />
              </a>
            </NavItem>
            <NavItem eventKey={8} href="#">
              <a href="http://facebook.com/cyclingacrosscanada" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook fa-2x" />
              </a>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

