import React from "react";
import "../../src/styles/Footer.css";
import RBI_Logo from "../assets/images/RBI_Logo.png";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div>
        <img src={RBI_Logo} alt="RBI logo" className="rbi-footer-logo" />
        {/* <p>© Reserve Bank of India. All Rights Reserved.</p> */}
      </div>
      <div>
        <a href="#">Contact us</a>
        <a href="#">About Integrated Ombudsman Scheme</a>
      </div>
      <div>
        <a href="#">Give feedback</a>
        <a href="#">FAQs</a>
      </div>
      <div>
        <a href="#">Important websites</a>
        <a href="#">Sitemap</a>
      </div>
    </footer>
  );
}
