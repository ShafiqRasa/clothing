import React, { useContext } from "react";
import "./checkout-item.style.scss";
import { CartContext } from "../../contexts/cart";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, directRemoveItemFromCart } =
    useContext(CartContext);

  const incrementItem = () => addItemToCart(cartItem);
  const decrementItem = () => removeItemFromCart(cartItem);
  const removeItem = () => directRemoveItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementItem}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={incrementItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
