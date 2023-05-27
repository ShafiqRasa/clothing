import { useContext } from "react";
import "./cart-icon.style.scss";
import { CartContext } from "../../contexts/cart";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";

const CartIcon = () => {
  const { isOpen, setIsOpen, cartItems } = useContext(CartContext);
  const numberOfItems = cartItems.length;
  const handleShopping = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={handleShopping} />
      <span className="item-count">{numberOfItems}</span>
    </div>
  );
};

export default CartIcon;
