// src/Footer.js

import React from "react";
import "../style/footer.css";
 // Make sure to have a logo image in the src folder
export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src="./images/logo.png" alt="Website Logo" className="logo" />
          <nav className="footer-nav">
            <a href="#header">Home</a>
            <a href="/policy">Privacy Policy</a>
            <a href="/policy">Services</a>
            <a href="/terms">Terms of Service</a>
          </nav>
          <div className="social-media">
            <a href="https://facebook.com">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <form action="/send_message" method="post">
            <input type="text" name="name" placeholder="Full Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              placeholder="write your message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Ultras.ma | All Rights Reserved
      </div>
    </footer>
  );
};
