import React from "react";
import './Header.css'
import siteLogo from './assets/logo.png'
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
    return(
        <nav>
            <div className="left-nav">
                <div className="logo">
                    <img src={siteLogo} alt="Personal Trainer site Logo" />
                </div>
                <p className="logoname">John Smith</p>
            </div>
            <div className="right-nav">
            <ul className="navList">
                <li><a href="/">Home</a></li>
                <li><a href="/">Offer</a></li>
                <li><a href="/">Price list</a></li>
                <li><a href="/">About me</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <FaCartShopping className="cart"/> 
            </div>
        </nav>
    )
}

export default Header;
