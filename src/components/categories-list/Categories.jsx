import React from "react";
import Item from "../directory-item";
import "./categories-list.style.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-list-container">
      {categories.map((category) => (
        <Item key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Categories;
