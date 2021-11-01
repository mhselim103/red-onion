import React, { useState } from "react";
import { Nav, Row } from "react-bootstrap";
import useFoods from "../../../Hooks/useFoods";
import Food from "../Food/Food";
import "./Foods.css";

const Foods = () => {
  const [menu] = useFoods();
  const [type, setType] = useState("Breakfast");
  // foodtype handling
  const handleMenu = (menuType) => {
    setType(menuType);
  };

  // filtering food
  return (
    <div className="container mt-5">
      {/* menu tab */}

      <Nav className="justify-content-center g-4">
        <Nav.Item>
          <Nav.Link
            className={type === "Breakfast" ? "is-active" : "inactive"}
            onClick={() => handleMenu("Breakfast")}
          >
            Breakfast
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={type === "Lunch" ? "is-active" : "inactive"}
            onClick={() => handleMenu("Lunch")}
          >
            Lunch
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={type === "Dinner" ? "is-active" : "inactive"}
            onClick={() => handleMenu("Dinner")}
          >
            Dinner
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* showing food to cart */}
      <Row xs={1} md={3} className="g-4 mt-3">
        {menu
          ?.filter((fd) => fd.type === type)
          .map((food) => (
            <Food food={food}></Food>
          ))}
      </Row>
      <div className="text-center mt-5">
        <button className="checkout-btn">Check Out Your Food</button>
      </div>
    </div>
  );
};

export default Foods;
