import React from 'react'
import './Footer.css'
import { FaShopify } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <FaShopify />
        <p>My Pets</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
        <FaInstagramSquare />
        </div>
        <div className="footer-icons-container">
        <MdEmail />
        </div>
        <div className="footer-icons-container">
        <FaWhatsapp />
        </div>
      </div>
    </div>
  )
}

export default Footer

