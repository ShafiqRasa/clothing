import React from "react";
import "./category-item.style.scss";

const Item = ({ title, imageUrl }) => {
  return (
    <div className=" category-container">
      <div
        className=" background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className=" category-body-container">
        <h2>{title}</h2>
        <p>something</p>
      </div>
    </div>
  );
};

export default Item;
