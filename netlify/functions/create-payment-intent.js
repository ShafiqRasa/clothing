require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * Creating payment intent for stripe using stripe library
 * In order to do that, couple thing to know
 * 1. currency
 * 2. payment method
 * 3. amount
 * */
exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log("payment intent error: ", error);
    return {
      ststusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
