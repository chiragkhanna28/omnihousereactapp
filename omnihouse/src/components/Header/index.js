import React from 'react';
import './header.css'
import './../../index.css'
import Icon from './../Icon/index.js'


const Header = () => {
    return <div class="header_wrapper clearfix">
                <div className="left_wrapper">
                    <div className = "homeicon_wrapper">
                        <Icon name="homebutton" />
                    </div>
                    <p className="white_color font_26 margin_10_left">Omnihouse</p>
                </div>
                <div className="right_wrapper">
                    <p className="white_color margin_20 font_20">Landlords</p>
                    <p className="white_color margin_20 font_20">Tenants</p>
                    <p className="white_color margin_20 font_20">Reference Check</p>
                </div>
            </div>
    };


export default Header;