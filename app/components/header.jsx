import React from 'react';
import { Navbar, NavDropdown, NavItem, Nav, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from '../styles/header.scss';

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect id="header">
        <Navbar.Header>
          <a href="/"><h1>Cycling Across Canada for Crohn&apos;s</h1></a>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav bsStyle="pills" className="menu" pullLeft>
            <li role="presentation"><a href="https://www.youtube.com/playlist?list=PLC89iFKPZDsaRgAXTsGUYLqussx49UF_q">Vlogs</a></li>

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
            <li role="presentation">
              <a href="https://twitter.com/cycling_woman">
                <i className="fa fa-twitter fa-2x" />
              </a>
            </li>

            <li role="presentation">
              <a href="https://instagram.com/cycling_woman/">
                <i className="fa fa-instagram fa-2x" />
              </a>
            </li>

            <li role="presentation">
              <a href="https://www.youtube.com/c/rideoncycling">
                <i className="fa fa-youtube-square fa-2x" />
              </a>
            </li>

            <li role="presentation">
              <a href="http://facebook.com/cyclingacrosscanada">
                <i className="fa fa-facebook fa-2x" />
              </a>
            </li>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

