import React from "react";

const Food = (props) => {
  const { image, description, title, price } = props.food;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Food;
