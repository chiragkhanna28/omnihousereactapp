const express = require("express");
var router = express.Router();
const stripe = require("stripe")("sk_test_fXqkXzRZa81ZNr4w2GRncEH1");

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 399;
};

router.post("/create-payment-intent", async (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: "eur"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

module.exports = router;