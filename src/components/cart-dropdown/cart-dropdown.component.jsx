import { useNavigate } from "react-router-dom";
import Button from "../genral-button/genral-button.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart-selector";

const CartDropdown = () => {
  const { cartItems } = useSelector(cartSelector);
  const navigate = useNavigate();
  const goToCheckout = () => navigate("/checkout");
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems ? (
          cartItems?.map(({ id, ...item }) => <CartItem key={id} {...item} />)
        ) : (
          <EmptyMessage>Cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
