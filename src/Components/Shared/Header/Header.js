import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import siteLogo from "../../../images/logo2.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
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
            <div className="d-flex align-items-lg-center">
              {/* <div>
                <Nav.Link as={HashLink} to="/checkout">
                  checkout
                </Nav.Link>
              </div> */}
              <div>
                {!user.email ? (
                  <Nav.Link as={HashLink} to="/login">
                    Log In
                  </Nav.Link>
                ) : (
                  <span className="me-2">{user.displayName}</span>
                )}
              </div>
              <div>
                {user.email ? (
                  <button className="button" onClick={logOut}>
                    Log Out
                  </button>
                ) : (
                  <Nav.Link as={HashLink} to="/register" className="button">
                    Sign Up
                  </Nav.Link>
                )}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
