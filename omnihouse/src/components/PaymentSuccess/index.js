import React, { useState } from 'react';
import Icon from './../Icon/index.js'
import Progress from './../Progress/index.js'
import { Link } from "react-router-dom";
import HelpModal from './../HelpModal/index.js'
import './paymentsuccess.css'
import './../../index.css'

const PaymentSuccess = (props) => {
    const [open, setOpen] = useState(false);

    const helpHandler = () => {
        setOpen(true)
    }
    const onCloseModal = () => setOpen(false);
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
            <p className="white_color margin_top_15">Thank you for your purchase. The reference check has been sent to the renter(s) to complete. </p>
            <p className="white_color margin_bottom_30">We have sent you an email order confirmation. When the tenant has completed the check you will be sent the completed reference report to the same email. Please be wary of any emails going into spam/junk.</p>
            
            <Link className="white_color ref_check_btn textdec_none" to="/">START NEW REFERENCE CHECK</Link>
            <HelpModal open={open} onCloseModal={onCloseModal}>
            </HelpModal>
        </div>
    )
}

export default PaymentSuccess;