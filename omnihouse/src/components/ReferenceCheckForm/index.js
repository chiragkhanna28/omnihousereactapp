import React, { useState,useEffect } from 'react';
import './referencecheckform.css'
import './../../index.css'
import Progress from './../Progress/index.js'
import Icon from './../Icon/index.js'
import { Link } from "react-router-dom";
import { Formik , useFormik} from 'formik';
import  Renter  from './../Renter/index.js';
import fire from './../../config.js'
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import HelpModal from './../HelpModal/index.js'
import axios from 'axios';


const ReferenceCheckForm = (props) => {

    const [open, setOpen] = useState(false);

    const helpHandler = () => {
        setOpen(true)
    }
    const onCloseModal = () => setOpen(false);

    const recaptchaRef = React.useRef();
    const containerReference = React.useRef();
    const siteKey = "6LcjhpEaAAAAAEzs_AgVbPeRrJuBfO5Cm0d6RYVy";
    const secretKey = "6LcjhpEaAAAAAAAC_2B7qylKpG9cxN7_8w2fLC7U";
    let captchaToken = "";

    const [addRenters, setAddRenters] = useState([0]);

    const [userDetails, setUserDetails] = useState();
    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    const [formcaptchaToken, setFormcaptchaToken] = useState("");
    let updatedUserDetails,formIsValid;

    const addAnotherRenter = () => {
        const length = addRenters.length;
        const renters = [...addRenters,length];
        setAddRenters(renters);
    } 
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
            backgroundColor: '#736671',
            className:'floatRight'
        }
    ]
    const history = useHistory();
    const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userDetails);
        var initialstate = {...errors};
        initialstate["name"] = "";
        initialstate["email"] = "";
        initialstate["rental_address"] = "";
        initialstate["total_rent"] = "";
        initialstate["security_deposit"] = "";
        setErrors(initialstate);
        //Name
        if(!fields["name"]){
            formIsValid = false;
            initialstate["name"] = "Please enter the name";
            setErrors(initialstate);
            containerReference.current.scrollIntoView();
            return;
         }
   
         if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z ]+$/)){
               formIsValid = false;
               initialstate["name"] = "Please make sure name contains only letters";
               setErrors(initialstate);
               containerReference.current.scrollIntoView();
               return;
            }        
         }

         // Email

         if(!fields["email"]){
            formIsValid = false;
            initialstate["email"] = "Please enter email";
            setErrors(initialstate);
            containerReference.current.scrollIntoView();
            return;
         }
   
         if(typeof fields["email"] !== "undefined"){
            if(!validEmailRegex.test(fields["email"])){
               formIsValid = false;
               initialstate["email"] = "Please enter the valid email address";
               setErrors(initialstate);
               containerReference.current.scrollIntoView();
               return;
            }        
         }

         //Rental address
         if(!fields["rental_address"]){
            formIsValid = false;
            initialstate["rental_address"] = "Please enter the rental address";
            setErrors(initialstate);
            containerReference.current.scrollIntoView();
            return;
         }

         //Total rent
         if(!fields["total_rent"]){
            formIsValid = false;
            initialstate["total_rent"] = "Please enter the rent";
            setErrors(initialstate);
            containerReference.current.scrollIntoView();
            return;
         }
         if(typeof fields["total_rent"] !== "undefined"){
            if(!fields["total_rent"].match(/^[0-9]+$/)){
               formIsValid = false;
               initialstate["total_rent"] = "Please enter the rent in numbers";
               setErrors(initialstate);
               containerReference.current.scrollIntoView();
               return;
            }        
         }

         // Secutity Deposit
         if(!fields["security_deposit"]){
            formIsValid = false;
            initialstate["security_deposit"] = "Please enter the security deposit";
            setErrors(initialstate);
            containerReference.current.scrollIntoView();
            return;
         }
         if(typeof fields["security_deposit"] !== "undefined"){
            if(!fields["security_deposit"].match(/^[0-9]+$/)){
               formIsValid = false;
               initialstate["security_deposit"] = "Please enter the security deposit in numbers";
               setErrors(initialstate);
               containerReference.current.scrollIntoView();
               return;
            }        
        }

        if(initialstate["recaptcha_error"]!=="undefined" && initialstate["recaptcha_error"] == "Verified successfully"){
            fire.database().ref("userdetails").push(userDetails);
            history.push('/payment');
        }else{
            initialstate["recaptcha_error"] = "Please verify you are human";
            setErrors(initialstate);
        }
    }
    useEffect(() => {
        var initialstate = {...errors};
        recpatchaVerify(initialstate);
    },[formcaptchaToken])

    const recpatchaVerify = async (initialstate) => {
        console.log(formcaptchaToken);
        if(formcaptchaToken!=""){
            const recatchaResponse = await isHuman(formcaptchaToken);
            console.log(recatchaResponse);
            if(recatchaResponse.data.success || recatchaResponse.data.succcess){
                initialstate["recaptcha_error"] = "Verified successfully";
                setErrors(initialstate);
            }else{
                initialstate["recaptcha_error"] = "Please verify you are human";
                setErrors(initialstate);
            }
        }
    }

    const handleChange = (event) => {
        var commonKey = event.target.getAttribute("commonkey");
        if(commonKey!=null){
            updatedUserDetails = { ...userDetails};
            if(updatedUserDetails[commonKey] !== undefined){
                updatedUserDetails[commonKey][event.target.name] = event.target.value
            }else{
                updatedUserDetails[commonKey] = [];
                updatedUserDetails[commonKey][event.target.name] = event.target.value
            }
        }else{
            updatedUserDetails = { ...userDetails,
                [event.target.name] : event.target.value
            }
        }
        setUserDetails(updatedUserDetails);
        let formfields = {...fields};
        formfields[event.target.name] = event.target.value; 
        setFields(formfields)
    }

    const onCaptchaChange = (value) => {
        console.log(value);
        captchaToken = value;
        setFormcaptchaToken(value);
    }

    const isHuman = async(humanKey) => {
        console.log(secretKey);
        console.log(humanKey);

        return await axios.post(`http://localhost:5000/recaptcha/verify`,{
            secretKey: secretKey,
            token: humanKey
        })
    }

    const iconStyle = {
        cursor: 'pointer'
    }
    
    return (
        <div className="ref_check_wrapper" ref={containerReference}>
            <div className="ref_header_wrapper">
                <p className="white_color font_22 margin_0">Reference Check</p>
                <Icon style={iconStyle} className="help_icon" name="help" onClick={helpHandler} />
            </div>
            <Progress progressData={progressTracker}></Progress>
           
                <form onSubmit={handleSubmit}>
                    <h4 className="white_color font_20 margin_bt_10">Your Details</h4>
                    <div className="field_wrapper">
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="dis_block form_input"
                            placeholder="Your name"
                        />
                        <span className="error_message" style={{color: "red"}}>{errors["name"]}</span>
                    </div>
                    <div className="field_wrapper">
                        <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            className="dis_block form_input"
                            placeholder="Your email address"
                        />
                        <span className="error_message" style={{color: "red"}}>{errors["email"]}</span>
                    </div>
                    <h4 className="white_color font_20 margin_bt_10">Rental Details</h4>
                    <div className="field_wrapper">
                        <input
                            type="text"
                            name="rental_address"
                            onChange={handleChange}
                            className="dis_block form_input"
                            placeholder="Rental address"
                        />
                        <span className="error_message" style={{color: "red"}}>{errors["rental_address"]}</span>
                    </div>
                    <div className="field_wrapper">
                        <input
                            type="text"
                            name="total_rent"
                            onChange={handleChange}
                            className="dis_block form_input"
                            placeholder="Total rent per calendar month (£)"
                        />
                        <span className="error_message" style={{color: "red"}}>{errors["total_rent"]}</span>
                    </div>
                    <div className="field_wrapper">
                        <input
                            type="text"
                            name="security_deposit"
                            onChange={handleChange}
                            className="dis_block form_input"
                            placeholder="Required amount for security deposit (£)"
                        />
                        <span className="error_message" style={{color: "red"}}>{errors["security_deposit"]}</span>
                    </div>
                    <h4 className="white_color font_20 margin_bt_10">Renter(s) Details</h4>
                    {
                    addRenters.map((row, idx) => {
                        return <div>
                                <div class="horizontal_line"></div>
                                <Renter handleChange={handleChange} index = {idx+1} key={idx}></Renter>
                            </div>
                        })
                    }
                    <div className="clearfix add_other_container" onClick={addAnotherRenter}>
                        <span className="add_other white_color">ADD ANOTHER RENTER</span>
                    </div>
                    <div className="field_wrapper">
                        <div className="recaptcha_wrapper">
                            <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey= {siteKey}
                            size="normal"
                            onChange={onCaptchaChange}
                            />
                            <span className="error_message recaptcha_center_error_message" style={{color: "red"}}>{errors["recaptcha_error"]}</span>
                        </div>
                    </div>
                    
                    <input type="submit" value="CONTINUE TO CARD PAYMENT" className="white_color card_payment ref_check_btn"/>
                    
                </form>
                <HelpModal open={open} onCloseModal={onCloseModal}>
                </HelpModal>
        </div>
    )
}

export default ReferenceCheckForm;
