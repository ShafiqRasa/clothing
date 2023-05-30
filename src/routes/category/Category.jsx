import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import "./category.style.scss";
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
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-conainer">
        {products &&
          products.map((product) => (
            <Product key={product.is} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
