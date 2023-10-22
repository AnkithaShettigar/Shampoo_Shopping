import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="contents">
          <div className="online">
            <div className="insta "></div>
          </div>
          <div className="online">
            <div className="twitter "></div>
          </div>
          <div className="online">
            <div className="facebook "></div>
          </div>

          <div className="online">
            <div className="skype "></div>
          </div>
        </div>
        <p className="footer-text">Terms & Conditions</p>
        <p className="footer-text1">Shopping Cart</p>
      </div>
    </div>
  );
};

export default Footer;
