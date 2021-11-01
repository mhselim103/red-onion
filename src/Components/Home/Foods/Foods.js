import React, { useState } from "react";
import useFoods from "../../../Hooks/useFoods";
import Food from "../Food/Food";

const Foods = () => {
  const [menu] = useFoods();
  const [type, setType] = useState("");
  // foodtype handling
  const handleMenu = (menuType) => {
    setType(menuType);
  };

  // filtering food
  const foodType = menu?.filter((fd) => fd.type === type);
  return (
    <div>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              onClick={() => handleMenu("Breakfast")}
              className="nav-link active"
              aria-current="page"
            >
              Breakfast
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleMenu("Lunch")} className="nav-link">
              Lunch
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleMenu("Dinner")} className="nav-link">
              Dinner
            </button>
          </li>
        </ul>
      </div>
      {/* <div>
        <button onClick={() => handleMenu("Breakfast")}>Breakfast</button>
        <button onClick={() => handleMenu("Lunch")}>Lunch</button>
        <button onClick={() => handleMenu("Dinner")}>Dinner</button>
      </div> */}
      {foodType?.map((food) => (
        <Food food={food}></Food>
      ))}
    </div>
  );
};

export default Foods;
