import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerSections = [
  {
    heading: "MANAGED SERVICES",
    links: [
      { to: "/client-accounting", label: "Client Accounting Services" },
      { to: "/people-practice", label: "People Practice" },
      { to: "/business-services", label: "Business Services" },
      { to: "/service-hub/compliance-management", label: "Compliance Management" },
    ],
  },
  {
    heading: "ASSURANCE",
    links: [
      { to: "/service-hub/audit-services", label: "Audit Services" },
      { to: "/service-hub/accounting-advisory", label: "Accounting Advisory" },
      { to: "/service-hub/quality-enablement", label: "Quality Enablement" },
    ],
  },
  {
    heading: "RISK ADVISORY",
    links: [
      { to: "/service-hub/internal-audit", label: "Internal Audit" },
      { to: "/service-hub/sox-compliance", label: "SOX Compliance" },
      { to: "/service-hub/technology-risk", label: "Technology Risk" },
      { to: "/service-hub/process-transformation", label: "Process Transformation" },
    ],
  },
  {
    heading: "CONSULTING",
    links: [
      { to: "/service-hub/financial-advisory", label: "Financial Advisory" },
      { to: "/service-hub/startup-advisory", label: "Startup Advisory" },
      { to: "/service-hub/bpm-solutions", label: "BPM Solutions" },
      { to: "/service-hub/virtual-cfo-services", label: "Virtual CFO Services" },
    ],
  },
  {
    heading: "DIGITAL",
    links: [
      { to: "/service-hub/digital-enablement", label: "Digital Enablement" },
      { to: "/service-hub/data-analytics", label: "Data Analytics" },
      { to: "/service-hub/intelligent-automation", label: "Intelligent Automation" },
      { to: "/service-hub/enterprise-solutions", label: "Enterprise Solutions" },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns footer-columns-desktop">
        {footerSections.map((section) => (
          <div className="footer-column" key={section.heading}>
            <h4>{section.heading}</h4>
            {section.links.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-accordion">
        {footerSections.map((section) => (
          <details className="footer-accordion-item" key={section.heading}>
            <summary>{section.heading}</summary>
            <div className="footer-accordion-links">
              {section.links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        ))}
      </div>

      <div className="footer-social">
        <a href="https://wa.me/919449838000" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/company/talme-technologies/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="https://www.facebook.com/share/1AZNp8ciy4/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>

      <div className="footer-bottom">
        <Link to="/site-map">Site Map</Link>
        <span>Copyright 2026 TALME Technologies Pvt Ltd. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
