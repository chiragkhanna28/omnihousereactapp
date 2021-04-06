import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Icon from './../Icon/index.js';
import './checkoutform.css';
import { useHistory } from 'react-router-dom';

export default function CheckoutForm() {

  const history = useHistory();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/stripepayment/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
      })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      history.push('/paymentsuccess');
    }
  };

  const iconStyle = {
    'max-width': '6%',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)'
   }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error red_color" role="alert">
          {error}
        </div>
      )}
      <div className="total_price_section">
                <span className="gray_color font_italic">Total</span>
                <p className="white_color total_price">£3.99</p>
      </div>
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
        className="ref_check_btn white_color pay_btn"
      >
       
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
              <div className="center_text">
                <Icon style={iconStyle} name="lock" />
                <span>Make Card payment</span>
              </div>
          )}
        </span>
      </button>
    </form>
  );
}
