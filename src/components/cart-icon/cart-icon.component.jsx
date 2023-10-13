import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from "./cart-icon.style";
import { setIsOpen } from "../../store/cart/cat-actions";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../store/cart/cart-selector";

const CartIcon = () => {
  const { cartCount } = useSelector(cartSelector);
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
