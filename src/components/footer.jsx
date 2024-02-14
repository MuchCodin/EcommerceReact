import React from 'react';
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: example@email.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <ul className="social-links">
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com/delectabletreats_za?igsh=MnVkZzhxNnJpeXNh">Instagram</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
        </ul>
      </div>

      <div className="payment-options">
        <h3>Payment Options</h3>
        <ul>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>Paypal</li>
        </ul>
      </div>
    </footer>
  );
};


