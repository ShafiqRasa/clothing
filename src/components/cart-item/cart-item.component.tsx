import { CartItemContainer, ItemDetails, Image, Span } from "./cart-item.style";
type cartItemType = {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

const CartItem = ({ name, imageUrl, price, quantity }: cartItemType) => {
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
