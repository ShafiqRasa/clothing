import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES } from "../genral-button/genral-button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h1>Credit card payment:</h1>
        <CardElement />
        <Button btnType={BUTTON_TYPES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
