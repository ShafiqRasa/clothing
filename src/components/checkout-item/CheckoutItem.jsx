import React, { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Price,
  Arrow,
  Quantity,
  RemoveButton,
} from "./checkout-item.style";
import { CartContext } from "../../contexts/cart";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, directRemoveItemFromCart } =
    useContext(CartContext);

  const incrementItem = () => addItemToCart(cartItem);
  const decrementItem = () => removeItemFromCart(cartItem);
  const removeItem = () => directRemoveItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decrementItem}>&#10094;</Arrow>
        {quantity}
        <Arrow onClick={incrementItem}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
