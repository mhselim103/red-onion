import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Food.css";

const Food = (props) => {
  const { image, about, title, price } = props.food;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img className="w-75 mx-auto" variant="top" src={image} />
          <Card.Body className="text-center">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{about}</Card.Text>
            <h3>${price}</h3>
            <button className="order-btn">Order Now</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Food;
