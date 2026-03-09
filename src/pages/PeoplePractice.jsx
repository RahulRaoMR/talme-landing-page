import { useState } from "react";
import "./PeoplePractice.css";

function PeoplePractice() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="people-premium-page">
      <section className="people-premium-header">
        <div className="people-header-copy">
          <p className="people-breadcrumb">
            Managed Services <span>People Practice</span>
          </p>
          <h1>People Practice</h1>
          <p>
            A combination of specialized professional services and
            technology-enabled solutions helps address your hire-to-retire
            processes, including customized talent plans to build tomorrow's
            agile workforce.
          </p>
        </div>
      </section>

      <section className="people-feature-band">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="People practice recruitment and collaboration"
        />
        <article className="people-feature-panel">
          <p>
            Leveraging technology for AI-driven recruitment, recruitment process
            outsourcing, and employee life cycle management.
          </p>
        </article>
      </section>

      <section className="people-content-grid">
        <article className="people-quote-card">
          <span className="people-quote-mark">"</span>
          <p>
            We critically evaluate the client's business operations to identify
            potential areas of improvement, risks, and control gaps. We then
            co-create solutions by redefining risks, controls, key performance
            indicators, and segregation of duties.
          </p>
          <h3>People Practice Leadership Team</h3>
          <small>Strategic Workforce Advisory</small>
        </article>

        <aside className="people-updates-card">
          <h4>Updates</h4>
          <h5>People Practice Playbook for Performance Improvement</h5>
          <p>
            Structured delivery frameworks for people practice improve control,
            speed, and enterprise confidence.
          </p>
          {showMore && (
            <div className="people-updates-more">
              <p>
                Our governance-led approach ensures consistency across policy
                execution and periodic review cycles.
              </p>
              <ul>
                <li>Talent acquisition operations</li>
                <li>Workforce management and HR support</li>
                <li>Policy, compliance, and employee lifecycle processes</li>
              </ul>
            </div>
          )}
          <button
            type="button"
            className="people-read-more"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </aside>
      </section>
    </main>
  );
}

export default PeoplePractice;
