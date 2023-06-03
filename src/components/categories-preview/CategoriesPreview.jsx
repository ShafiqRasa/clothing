import React, { Fragment } from "react";
import CategoryPreview from "../category-preview";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../store/categories/categories-selector";

const CategoriesPreview = () => {
  const categories = useSelector(categoriesSelector);

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
