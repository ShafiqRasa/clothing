import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories";
import CategoryPreview from "../category-preview";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Fragment>
      {categories &&
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </Fragment>
  );
};

export default CategoriesPreview;
