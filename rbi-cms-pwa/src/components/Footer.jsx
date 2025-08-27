import "../styles/Footer.css";
import RBI_Logo from "../assets/images/RBI_Logo.png";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div>
          <img src={RBI_Logo} alt="RBI logo" className="rbi-footer-logo" />
        </div>
        <div>
          <a href="#">Important websites</a>
          <a href="#">About Integrated Ombudsman Scheme</a>
        </div>
        <div>
          <a href="#">Contact us</a>
          <a href="#">Give feedback</a>
        </div>
        <div>
          <a href="#">FAQs</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 RBI All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
