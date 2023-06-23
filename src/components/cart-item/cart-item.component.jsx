import { CartItemContainer, ItemDetails, Image, Span } from "./cart-item.style";

const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <Span>{name}</Span>
        <Span>
          {quantity}x{price}
        </Span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
