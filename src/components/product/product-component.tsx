import { BUTTON_TYPES } from "../genral-button/genral-button.component";
import { addItemToCart } from "../../store/cart/cart-actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart-selector";
import {
  CategoryCartContainer,
  Footer,
  BackgroundImage,
  EnhancedButton,
} from "./product.style";
import { cartItem } from "../../store/cart/cart-types";
import { CategoryItem } from "../../store/categories/category-types";

type productProps = {
  product: CategoryItem;
};
const Product = ({ product }: productProps) => {
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
