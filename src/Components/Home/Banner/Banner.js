import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner d-flex justify-content-center align-items-center">
      <div className="contents d-flex flex-column  align-items-center">
        <div>
          <h1 className="">Best Food Waiting for your Belly</h1>
        </div>
        <div className="mb-3 search-option">
          <input
            className="input-field"
            type="text"
            placeholder="search your food"
          />
          <button className="button">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
