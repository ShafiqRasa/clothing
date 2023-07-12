import React from "react";
import Item from "../directory-item/directory-item.component";
import { CategoriesListContainer } from "./categories-list.style";

const Categories = ({ categories }) => {
  return (
    <CategoriesListContainer>
      {categories.map((category) => (
        <Item key={category.id} {...category} />
      ))}
    </CategoriesListContainer>
  );
};

export default Categories;
