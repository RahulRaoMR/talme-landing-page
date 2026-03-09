import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-kicker">Engineering. Talent. Transformation.</span>
          <h1>TALME Technologies Pvt Ltd</h1>
          <p>
            Corporate-grade engineering and staffing solutions built to improve
            delivery speed, quality, and measurable business outcomes.
          </p>

          <div className="hero-actions">
            <Link to="/managed-services" className="hero-btn hero-btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="hero-btn hero-btn-secondary">
              Talk to Us
            </Link>
          </div>

          <div className="hero-trust">
            <div>
              <strong>500+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>15+</strong>
              <span>Years</span>
            </div>
            <div>
              <strong>Global</strong>
              <span>Delivery Reach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
