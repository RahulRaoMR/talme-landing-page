import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>MANAGED SERVICES</h4>
          <Link to="/client-accounting">Client Accounting Services</Link>
          <Link to="/people-practice">People Practice</Link>
          <Link to="/business-services">Business Services</Link>
          <Link to="/service-hub/compliance-management">Compliance Management</Link>
        </div>

        <div className="footer-column">
          <h4>ASSURANCE</h4>
          <Link to="/service-hub/audit-services">Audit Services</Link>
          <Link to="/service-hub/accounting-advisory">Accounting Advisory</Link>
          <Link to="/service-hub/quality-enablement">Quality Enablement</Link>
        </div>

        <div className="footer-column">
          <h4>RISK ADVISORY</h4>
          <Link to="/service-hub/internal-audit">Internal Audit</Link>
          <Link to="/service-hub/sox-compliance">SOX Compliance</Link>
          <Link to="/service-hub/technology-risk">Technology Risk</Link>
          <Link to="/service-hub/process-transformation">Process Transformation</Link>
        </div>

        <div className="footer-column">
          <h4>CONSULTING</h4>
          <Link to="/service-hub/financial-advisory">Financial Advisory</Link>
          <Link to="/service-hub/startup-advisory">Startup Advisory</Link>
          <Link to="/service-hub/bpm-solutions">BPM Solutions</Link>
          <Link to="/service-hub/virtual-cfo-services">Virtual CFO Services</Link>
        </div>

        <div className="footer-column">
          <h4>DIGITAL</h4>
          <Link to="/service-hub/digital-enablement">Digital Enablement</Link>
          <Link to="/service-hub/data-analytics">Data Analytics</Link>
          <Link to="/service-hub/intelligent-automation">Intelligent Automation</Link>
          <Link to="/service-hub/enterprise-solutions">Enterprise Solutions</Link>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://wa.me/919449838000" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <a href="https://www.instagram.com/talme_tech?igsh=bm5nbXBydTAwdHNh" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/company/talme-technologies/posts/?feedView=all" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://www.facebook.com/share/1AZNp8ciy4/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>

      <div className="footer-bottom">
        Copyright 2026 TALME Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
