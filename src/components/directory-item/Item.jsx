import React from "react";
import { Link } from "react-router-dom";
import "./directory-item.style.scss";

const Item = ({ title, imageUrl }) => {
  return (
    <Link to={`shop/${title}`} className="directory-tiem-container">
      <div
        className=" background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default Item;
