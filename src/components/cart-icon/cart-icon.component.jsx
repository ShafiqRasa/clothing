import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from "./cart-icon.style";
import { setIsOpen } from "../../store/cart/cart-slice";
import { useSelector, useDispatch } from "react-redux";
import { newCartCount } from "../../store/cart/cart-selector";

const CartIcon = () => {
  const cartCount = useSelector(newCartCount);
  const dispatch = useDispatch();
  const handleShopping = () => {
    dispatch(setIsOpen());
  };
  return (
    <CartIconContainer onClick={handleShopping}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
