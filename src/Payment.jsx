import React from "react";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
const PublicKey =
  "pk_test_51NzQjtSEeJfCNXwsASp8H5R1nZvO92slrqMMN8EMAJP5lobrki8gyP6muuIYQv6hBala3VLaAYHorxTJH552VX7u00VORZign4";
const stripetest = loadStripe(PublicKey);

function Payment() {
  return (
    <Elements stripe={stripetest}>
      <PaymentForm /> 
    </Elements>
  );
}

export default Payment;