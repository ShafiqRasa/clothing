import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../genral-button";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.style";
import { CartContext } from "../../contexts/cart";
import CartItem from "../cart-item";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => navigate("/checkout");
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems?.map(({ id, ...item }) => (
          <CartItem key={id} {...item} />
        ))}
      </CartItems>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
