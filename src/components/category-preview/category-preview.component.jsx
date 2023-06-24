import Product from "../product/product-component";
import {
  CategoryPreviewContainer,
  NavLink,
  Preview,
} from "./category-preview.style";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <NavLink to={title}>{title.toUpperCase()}</NavLink>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
