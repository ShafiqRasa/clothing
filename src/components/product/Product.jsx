import { BUTTON_TYPES } from "../genral-button/Button";
import { addItemToCart } from "../../store/cart/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart-selector";
import {
  CategoryCartContainer,
  Footer,
  BackgroundImage,
  EnhancedButton,
} from "./product.style";

const Product = ({ product }) => {
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
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
