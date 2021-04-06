import React,{ useState,useEffect } from 'react';
import './referencecheck.css'
import './../../index.css'
import Icon from './../Icon/index.js'
import Accordion from './../Accordion/index.js'
import Progress from './../Progress/index.js'
import HelpModal from './../HelpModal/index.js'
import { Link } from "react-router-dom"; 
import { useHistory } from 'react-router-dom';


const ReferenceCheck = () => {

    const [open, setOpen] = useState(false);

    const helpHandler = () => {
        setOpen(true)
    }
    const onCloseModal = () => setOpen(false);

    const history = useHistory();
    const progressTracker = [
        {
            backgroundColor: '#51B64F',
            className:'floatLeft'
        },
        {
            backgroundColor: '#736671',
            className:'center'
        },
        {
            backgroundColor: '#736671',
            className:'floatRight'
        }
    ]
    const referenceCTA = [
        {
            title:'Instant Check',
            subTitle:'£3.99',
            showYesNoButton: true,
            isExpand: true,
            subItemsLeftSection:[
                {
                    title:'Identity verification'
                },
                {
                    title:'Income verification'
                },
                {
                    title:'Projected income'
                },
                {
                    title:'Spending ratio'
                },
                {
                    title:'Reoccuring expenses'
                },
                {
                    title:'Affordability rating'
                }
            ],
            subItemsRightSection:[
                {
                    title:'Projected affordability'
                },
                {
                    title:'Gambling activity'
                },
                {
                    title:'Number of credit cards'
                },
                {
                    title:'Standing orders'
                },
                {
                    title:'Large transactions'
                }
            ]
        },
        {
            title:'Self-declaration',
            subTitle:'coming soon',
            showYesNoButton: false,
            isExpand: false,
            subItemsLeftSection:[
                {
                    title:'Salary confirmation'
                },
                {
                    title:'Rent payment history'
                },
                {
                    title:'Phone number verification'
                },
                {
                    title:'Pets, smoker & dependants'
                }
            ],
            subItemsRightSection:[
                {
                    title:'Right to Rent check'
                },
                {
                    title:'Previous landlord’s contact details'
                },
                {
                    title:'National insurance number'
                }
            ]
        },
        {
            title:'Credit check',
            subTitle:'coming soon',
            showYesNoButton: false,
            isExpand: false,
            subItemsLeftSection:[
                {
                    title:'Credit score'
                },
                {
                    title:'Identity and fraud information'
                },
                {
                    title:'History of bankruptency'
                }
            ],
            subItemsRightSection:[
                {
                    title:'Outstanding debt search (CCJs, Decrees & other court information)'
                }
            ]
        },
        {
            title:'Comprehensive',
            subTitle:'coming soon',
            showYesNoButton: false,
            isExpand: false,
            subItemsLeftSection:[
                {
                    title:'Manual verification of self-declared information'
                },
                {
                    title:'Previous landlord reference'
                },
                {
                    title:'Employer reference'
                }
            ],
            subItemsRightSection:[

            ]
        }
    ];

  
    const iconStyle = {
        cursor: 'pointer'
    }
    

    return <div className="ref_check_wrapper">
                <div className="ref_header_wrapper">
                    <p className="white_color font_22 margin_0">Reference Check</p>
                    <Icon style={iconStyle} className="help_icon" name="help" onClick={helpHandler} />
                </div>
                <Progress progressData={progressTracker}></Progress>
                <div className="accordion_wrapper margin_tp_bt_15">
                    {
                        referenceCTA.map(item => {
                            return <Accordion {
                                    ...item
                                    }>
                                </Accordion>
                        })
                    }
                </div>
                <div className="total_price_section">
                    <span className="gray_color font_italic">Total</span>
                    <p className="white_color total_price">£3.99</p>
                </div>
                 <Link className="white_color ref_check_btn textdec_none" to="/reference-check">PURCHASE REFERENCE CHECK</Link>
                 <HelpModal open={open} onCloseModal={onCloseModal}>

                 </HelpModal>
            </div>
};


export default ReferenceCheck;