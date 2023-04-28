import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: ABC Maz Street</li>
          <li>Email: order@littlelemon.com</li>
          <li>Phone: 0900 786 01</li>
        </ul>
      </nav>
      <nav>
        <h3>Opening times</h3>
        <ul>
          <li>Monday - Friday: 9:00 - 20:00</li>
          <li>Saturday - Sunday: 11:00 - 22:00</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;