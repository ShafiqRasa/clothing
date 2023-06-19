import React, { Fragment } from "react";
import CategoryPreview from "../category-preview";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../store/categories/categories-selector";
import Spinner from "../spinner/spinner-component";
import { selectCategoriesIsLoading } from "../../store/categories/categories-selector";

const CategoriesPreview = () => {
  const categories = useSelector(categoriesSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
