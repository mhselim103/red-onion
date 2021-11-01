import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import siteLogo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={HashLink} to="/home">
          <img className="logo" src={siteLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/login">
              Log In
            </Nav.Link>
            <Nav.Link as={HashLink} to="/register" className="button">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
