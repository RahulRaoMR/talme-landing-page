import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-columns">

        <div className="footer-columns">
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
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TALME Technologies. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;