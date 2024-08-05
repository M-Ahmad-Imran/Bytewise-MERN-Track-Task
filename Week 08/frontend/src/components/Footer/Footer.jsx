import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import intagram_icon from '../Assets/instagram_icon.png'
import pinterset_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>APNA STORE</p>
      </div>
      <ul className="footer-list">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="soical-icons">
        <div className="icons-cont">
            <img src={intagram_icon} alt="" />
        </div>
        <div className="icons-cont">
            <img src={pinterset_icon} alt="" />
        </div>
        <div className="icons-cont">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>COPYRIGHT @ 2024. All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer
