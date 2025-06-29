import React from 'react';
import './Footer.css'
import {FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaFacebook} from 'react-icons/fa';

const Footer = () =>{
    return(
        <footer>
            <div className="footer-elements">
            <div className="phone-sec">
                <FaPhone className="phone-icon" />
                <p>+1 789 456 1230</p>
            </div>
            <div className="email-sec">
                <FaEnvelope className="email-icon" />
                <p>contact@trainerjohn.com</p>
            </div>
            <div className="socials-sec">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon" />
                </a>
            </div>
            </div>
        </footer>
    )
}

export default Footer;