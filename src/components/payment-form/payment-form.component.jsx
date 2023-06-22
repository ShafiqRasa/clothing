import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES } from "../genral-button/Button";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handlePayment = async (event) => {
    event.preventDefault();
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit card payment: </h2>
        <CardElement />
        <Button btnType={BUTTON_TYPES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
