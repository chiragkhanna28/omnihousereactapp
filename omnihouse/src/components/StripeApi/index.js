import React, { useState } from 'react';
import Progress from './../Progress/index.js'
import './../../index.css'
import Icon from './../Icon/index.js'
import StripeLogo from './../../assets/stripeapi.png'; 
import './stripeapi.css'
import { Link } from "react-router-dom"; 
import HelpModal from './../HelpModal/index.js'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./../CheckoutForm/index.js";

const StripeApi = (props) => {

    const [open, setOpen] = useState(false);

    const helpHandler = () => {
        setOpen(true)
    }
    const onCloseModal = () => setOpen(false);

    const promise = loadStripe("pk_test_tAk8tzX1J65sBA23utJFDHWU");

    const progressTracker = [
        {
            backgroundColor: '#51B64F',
            className:'floatLeft'
        },
        {
            backgroundColor: '#51B64F',
            className:'center'
        },
        {
            backgroundColor: '#51B64F',
            className:'floatRight'
        }
    ];
    
    const helpiconStyle = {
        cursor: 'pointer'
    }

    return (
        <div className="ref_check_wrapper">
            <div className="ref_header_wrapper">
                <p className="white_color font_22 margin_0">Reference Check</p>
                <Icon style={helpiconStyle} className="help_icon" name="help" onClick={helpHandler} />
            </div>
            <Progress progressData={progressTracker}></Progress>
            <p className="white_color">Stripe API</p>
            <Elements stripe={promise}>
                <CheckoutForm />
            </Elements>
            <HelpModal open={open} onCloseModal={onCloseModal}>
            </HelpModal>
        </div>
    )
}

export default StripeApi;