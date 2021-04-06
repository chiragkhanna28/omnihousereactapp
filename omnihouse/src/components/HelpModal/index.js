import React from 'react';
import './helpmodal.css'
import './../../index.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const HelpModal = (props) => {
    return (
        <Modal open={props.open} onClose={props.onCloseModal} center>
        <h2 className="white_color">Help</h2>
        <p className="white_color_version">Add your contact and property details so we can send the reference check request to the renter(s) with context and so we know who to send the report back to. We ask for the ‘Total rent per calendar month’ to help work out the affordability rating.
        </p>
        <p className="white_color_version">Once you have filled the form and have completed your payment an email/text message will be sent to the tenant to authorise the request. They then approve our token allowing us to analyse their financial history. The analysis is presented in a report to which we send back to your in an encrypted email.</p>
        <p className="white_color_version">The report is based of the financial data that is made available and can analysed. If the renter(s) moves their money around/has a lot of cash transaction/or is spending alot in a period of time it will skew the results. If we can not detect the data required it will come back as incomplete. </p>
     </Modal>
    )
}

export default HelpModal;