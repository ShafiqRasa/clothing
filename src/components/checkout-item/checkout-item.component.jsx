import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart-selector";
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
import {
  addItemToCart,
  removeItemFromCart,
  directRemoveItemFromCart,
} from "../../store/cart/cat-actions";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(cartSelector);
  const { name, imageUrl, price, quantity } = cartItem;

  const incrementItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrementItem = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const removeItem = () =>
    dispatch(directRemoveItemFromCart(cartItems, cartItem));
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
