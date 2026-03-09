import "./CareersPage.css";

function CareersPage() {
  return (
    <section className="careers-page">
      <div className="careers-container">
        <header className="careers-header">
          <h1>Careers at TALME</h1>
          <p>
            Join a high-performance team where engineering excellence, business
            impact, and continuous learning drive every project.
          </p>
        </header>

        <div className="careers-hero">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
            alt="Corporate team collaborating in office"
          />
          <div className="careers-hero-overlay">
            <span>People and Culture</span>
            <h2>Build Meaningful Work With Enterprise-Grade Teams</h2>
            <p>
              We combine structured mentorship, modern delivery practices, and
              real ownership to help professionals accelerate their careers.
            </p>
          </div>
        </div>

        <div className="careers-grid">
          <article className="careers-info-card">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Career growth and leadership discussion"
            />
            <div>
              <h3>Why TALME</h3>
              <p>
                Work on cross-industry programs, collaborate with experienced
                leaders, and grow through real business challenges in
                engineering and digital operations.
              </p>
            </div>
          </article>

          <article className="careers-info-card">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Professional development and planning"
            />
            <div>
              <h3>Learning and Development</h3>
              <p>
                Structured onboarding, role-based capability development, and
                continuous upskilling programs designed for long-term
                professional growth.
              </p>
            </div>
          </article>
        </div>

        <section className="careers-journey">
          <div className="careers-journey-image">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80"
              alt="Team collaboration and career growth"
            />
          </div>
          <div className="careers-journey-content">
            <h2>Career Journey at TALME</h2>
            <p>
              Our people model is designed for long-term growth. From onboarding
              to leadership readiness, we provide clear career pathways and
              structured support at every stage.
            </p>
            <ul>
              <li>Role-based capability development plans</li>
              <li>Mentorship by domain and delivery leaders</li>
              <li>Cross-functional project exposure</li>
              <li>Performance feedback with growth coaching</li>
            </ul>
          </div>
        </section>

        <section className="careers-benefits">
          <h2>What You Can Expect</h2>
          <div className="benefits-grid">
            <article className="benefit-card">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate mentoring program"
              />
              <h3>Leadership Access</h3>
              <p>Direct mentoring and review cycles with senior professionals.</p>
            </article>
            <article className="benefit-card">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1200&q=80"
                alt="Learning and upskilling environment"
              />
              <h3>Continuous Learning</h3>
              <p>Certification support, upskilling tracks, and practical learning.</p>
            </article>
            <article className="benefit-card">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
                alt="Modern workplace and collaboration"
              />
              <h3>Modern Work Culture</h3>
              <p>Collaborative teams, transparent communication, and ownership.</p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default CareersPage;
