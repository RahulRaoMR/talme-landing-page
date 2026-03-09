import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedin,FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-columns">

        <div className="footer-column">
          <h4>MANAGED SERVICES</h4>
          <p>Client Accounting Services</p>
          <p>People Practice</p>
          <p>Business Services</p>
          <p>Compliance Management</p>
        </div>

        <div className="footer-column">
          <h4>ASSURANCE</h4>
          <p>Audit Services</p>
          <p>Accounting Advisory</p>
          <p>Quality Enablement</p>
        </div>

        <div className="footer-column">
          <h4>RISK ADVISORY</h4>
          <p>Internal Audit</p>
          <p>SOX Compliance</p>
          <p>Technology Risk</p>
          <p>Process Transformation</p>
        </div>

        <div className="footer-column">
          <h4>CONSULTING</h4>
          <p>Financial Advisory</p>
          <p>Startup Advisory</p>
          <p>BPM Solutions</p>
          <p>Virtual CFO Services</p>
        </div>

        <div className="footer-column">
          <h4>DIGITAL</h4>
          <p>Digital Enablement</p>
          <p>Data Analytics</p>
          <p>Intelligent Automation</p>
          <p>Enterprise Solutions</p>
        </div>

      </div>

      <div className="footer-social">
  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
    <FaWhatsapp />
  </a>

  <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>

  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>

  <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
    <FaFacebook />
  </a>
</div>

      <div className="footer-bottom">
        © 2026 TALME Technologies Pvt Ltd. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;