import { useContext } from "react";
import "./cart-icon.style.scss";
import { CartContext } from "../../contexts/cart";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);
  const handleShopping = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container" onClick={handleShopping}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
