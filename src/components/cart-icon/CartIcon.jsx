import { useContext } from "react";
import "./cart-icon.style.scss";
import { CheckoutContext } from "../../contexts/checkout";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(CheckoutContext);
  const handleShopping = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={handleShopping} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
