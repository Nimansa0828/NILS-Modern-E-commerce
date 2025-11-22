import React from 'react'

import './Footer.css'

import insta_icon from '../Assets/instagram.png'
import facebook_icon from '../Assets/facebook.png'
import whatsapp_icon from '../Assets/whatsapp-logo.png'
import youtube_icon from '../Assets/youtube.png'
import twitter_icon from '../Assets/twitter.png'


export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-sections">
        <div className="footer-links-section">
          <h3>Information</h3>
          <hr />
          <ul>
            <li>Blog</li>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Exchange & Refund Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className="footer-links-section">
          <h3>Customer Service</h3>
          <hr />
          <ul>
            <li>Contact Us</li>
            <li>Our Stores</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div className="footer-links-section">
          <h3>My Account</h3>
          <hr />
          <ul>
            <li>Sign In</li>
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>

        <div className="footer-socials-icon">

            <div className="footer-icons-container">
                <img src={insta_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={facebook_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={youtube_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={twitter_icon} alt="" />
            </div>

        </div>
          
          <div className="footer-copyright">
            <hr />
            <p>e-commerce powered by niogin.com © 2025 All Rights Reserved.</p>
          </div>

    
    </footer>
  );
};

export default Footer;