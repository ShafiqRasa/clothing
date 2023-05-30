import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, CategoryTitle } from "./category.style";
import { CategoriesContext } from "../../contexts/categories";
import Product from "../../components/product";

const Category = () => {
  const { categories } = useContext(CategoriesContext);
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
            <Product key={product.is} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
