import React from "react";
import './Header.css'
import siteLogo from '../assets/logo.png'
import { FaCartShopping, FaBars } from "react-icons/fa6";

// let bars = document.getElementById("bars");
// let mobileStatus = false
// // let mobileMenu = document.getElementById("mobile-nav-links");

// // Function to handle mobile navigation toggle
// function handleMobileNav(){
//         mobileStatus = !mobileStatus
//         console.log(mobileStatus)
//     if (!mobileStatus){
//         //
//     }
// }

// bars.addEventListener("click", handleMobileNav);

const Header = () => {
    return(
        <nav>
            <div className="nav-container">
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
            {/* <div className="mobile-nav"> */}
            <FaCartShopping className="cart"/> 

            <FaBars className="hamburger" id="bars" />
            {/* </div> */}
            </div>
            </div>
            <ul className="mobile-nav-links" id="mobile-nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/">Offer</a></li>
                <li><a href="/">Price list</a></li>
                <li><a href="/">About me</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;
