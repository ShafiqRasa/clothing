import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { useSelector } from "react-redux";
import { cartSelector, newTotalPrice } from "../../store/cart/cart-selector";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.style";

const Checkout = () => {
  const { cartItems } = useSelector(cartSelector);
  const totalPrice = useSelector(newTotalPrice);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: {totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
