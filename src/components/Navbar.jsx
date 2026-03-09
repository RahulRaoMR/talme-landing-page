import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-shell">
      <div className="navbar-top-row">
        <Link to="/" className="brand-link" aria-label="Talme Home">
          <img src="/logo.png" alt="Talme Logo" className="brand-logo" />
        </Link>

        <nav className="navbar-top" aria-label="Top navigation">
          <ul className="top-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="search-link">
              <a href="#" aria-label="Search">
                Search
              </a>
            </li>
            <li className="global-link">
              <a href="#">
                GLOBAL <span className="arrow">&#9662;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navbar-divider" />

      <nav className="navbar-bottom" aria-label="Service navigation">
        <ul className="service-links">
          <li>
            <Link to="/managed-services">MANAGED SERVICES</Link>
          </li>
          <li>
            <a href="#">ASSURANCE</a>
          </li>
          <li className="services-dropdown">
            <a href="#">
              SERVICES <span className="arrow-up">&#94;</span>
            </a>
            <ul className="services-menu">
              <li>
                <a href="#">ENGINEERING SOLUTIONS</a>
              </li>
              <li>
                <a href="#">STAFF AUGMENTATION</a>
              </li>
              <li>
                <a href="#">HEALTH CARE SERVICES</a>
              </li>
              <li>
                <a href="#">COMPUTER TECHNOLOGY</a>
              </li>
              <li>
                <a href="#">BUSINESS SOLUTIONS</a>
              </li>
              <li>
                <a href="#">PRODUCT MANUFACTURING</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">CONSULTING</a>
          </li>
          <li>
            <a href="#">DIGITAL</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
