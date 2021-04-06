import React, { useState } from 'react';

const Renter = (props) => {
    return (
        <div>
             <input
                type="text"
                name={`${"renter_" + "name_" + props.index}`}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                commonkey = "rentersNames"
                className="dis_block form_input"
                placeholder="Renter name"
            />

            <input
                type="text"
                name={`${"renter_"+ "emailaddress_" +  props.index}`}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                commonkey = "rentersEmailAddresses"
                className="dis_block form_input"
                placeholder="Renter email address"
            />

            <input
                type="text"
                name={`${"renter_" + "mobilenumber_" +  props.index}`}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                commonkey = "rentersMobileNumber"
                className="dis_block form_input"
                placeholder="Renter mobile number"
            />
        </div>
    )
}
export default Renter;