import { useContext } from "react";
import Button from "../genral-button";
import "./cart-dropdown.style.scss";
import { CartContext } from "../../contexts/cart";
import CartItem from "../cart-item";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map(({ id, ...item }) => (
          <CartItem key={id} {...item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
