import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}alt="Dozy Kooki Logo" class="logo"/>
            <p>Served by us to fulfill your hunger, love, and tranquility is all we offer.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-centre">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+977 9825646190</li>
                <li>contact@dozykooki.com</li>
            </ul>
        </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 &copy;DozyKooki.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
