import React from "react";
import "./Footer.css";
import footerLogo from "../../../images/logo.png";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <footer className="container">
          <Row>
            <Col className="col-md-6 ">
              <div className=" d-flex flex-column align-content-center">
                <div>
                  <img className="w-25" src={footerLogo} alt="" />
                </div>
                <div>
                  <p>Developed By @Mh-Selim</p>
                </div>
              </div>
            </Col>
          </Row>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
