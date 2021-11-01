import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Qualities = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col className="col-md-6">
          <h1>Why You Choose Us</h1>
          <small>
            We set a high standard for our food quality and ensures that guests
            receive the same quality with every meal. Serving quality food can
            earn your restaurant a good reputation and compel your guests to
            return for repeat visits
          </small>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="col-md-4">
          <Card>
            <img
              className="img-fluid"
              src="https://i.ibb.co/WxsKpHn/adult-blur-blurred-background-687824.png"
              alt=""
            />
            <h1>Fast Delivery</h1>
            <p>
              Keep your systems in sync with automated web hook bases
              notifications each tume link is paid and how we dream about our
              future.
            </p>
          </Card>
        </Col>
        <Col className="col-md-4">
          <Card>
            <img
              className="img-fluid"
              src="https://i.ibb.co/Qb6J07d/architecture-building-city-2047397.png"
              alt=""
            />
            <h1>Good Auto Responder</h1>
            <p>
              Keep your systems in sync with automated web hook bases
              notifications each tume link is paid and how we dream about our
              future.
            </p>
          </Card>
        </Col>
        <Col className="col-md-4">
          <Card>
            <img
              className="img-fluid"
              src="https://i.ibb.co/5shKKMk/Group-1151.png"
              alt=""
            />
            <h1>Home Delivery</h1>
            <p>
              Keep your systems in sync with automated web hook bases
              notifications each tume link is paid and how we dream about our
              future.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Qualities;
