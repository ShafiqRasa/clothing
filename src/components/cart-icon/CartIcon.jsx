import { useContext } from "react";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from "./cart-icon.style";
import { CartContext } from "../../contexts/cart";

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);
  const handleShopping = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CartIconContainer onClick={handleShopping}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
