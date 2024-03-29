import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, CategoryTitle } from "./category.style";
import Product from "../../components/product";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../store/categories/categories-selector";

const Category = () => {
  const categories = useSelector(categoriesSelector);

  /** useParams() simply return the path which is dynamic and is specified to the Route */
  const { category } = useParams();
  const [products, setProducts] = useState(categories[category]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
