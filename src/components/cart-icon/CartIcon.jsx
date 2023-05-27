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
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={handleShopping} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
