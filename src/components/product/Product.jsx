import { useContext } from "react";
import { BUTTON_TYPES } from "../genral-button/Button";
import { CartContext } from "../../contexts/cart";
import {
  CategoryCartContainer,
  Footer,
  BackgroundImage,
  EnhancedButton,
} from "./product.style";

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <CategoryCartContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <EnhancedButton
        btnType={BUTTON_TYPES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </EnhancedButton>
    </CategoryCartContainer>
  );
};

export default Product;
