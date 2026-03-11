import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-kicker">Engineering. Talent. Transformation.</span>
          <h1>TALME</h1>
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
              <strong>12+</strong>
              <span>Years</span>
            </div>
            <div>
              <strong>Global</strong>
              <span>Delivery Reach</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-panel-card hero-panel-card-primary">
            <span className="hero-panel-label">Delivery Focus</span>
            <h2>Execution models built for scale, speed, and control.</h2>
            <p>
              We combine engineering capability, workforce agility, and
              governance-led delivery to support ambitious growth.
            </p>
          </div>

          <div className="hero-panel-grid">
            <article className="hero-panel-card">
              <span className="hero-panel-metric">Fast Ramp-Up</span>
              <p>Specialized teams aligned to delivery timelines and business goals.</p>
            </article>
            <article className="hero-panel-card">
              <span className="hero-panel-metric">Visible Outcomes</span>
              <p>KPI-led execution with stronger control, reporting, and quality.</p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
