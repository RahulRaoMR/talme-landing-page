import { useState } from "react";
import "./ClientAccountingServices.css";

function ClientAccountingServices() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="cas-premium-page">
      <section className="cas-premium-header">
        <div>
          <h1>Client Accounting Services</h1>
          <p>
            Our Client Accounting Services combine domain expertise and
            proprietary solutions for process efficiency, agility, and
            compliance.
          </p>
        </div>
      </section>

      <section className="cas-feature-band">
        <img
          src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Client accounting collaboration"
        />
        <article className="cas-feature-panel">
          <p>
            Co-building effective financial processes through transformative
            tools and automation frameworks.
          </p>
        </article>
      </section>

      <section className="cas-content-grid">
        <article className="cas-quote-card">
          <span className="cas-quote-mark">\"</span>
          <p>
            We critically evaluate the client's business operations to identify
            potential areas of improvement, risks, and control gaps. We then
            co-create solutions by redefining risks, controls, key performance
            indicators, and segregation of duties.
          </p>
          <h3>Chetan Venugopal</h3>
          <small>Co-Founder and Board Member</small>
        </article>

        <aside className="cas-updates-card">
          <h4>Updates</h4>
          <h5>CAS Rationalization Improves Control and Visibility</h5>
          <p>
            The revised operating model for finance functions enables stronger
            governance, faster reporting, and higher business confidence.
          </p>
          {showMore && (
            <div className="cas-updates-more">
              <p>
                Our governance-led approach ensures consistency across policy
                execution and periodic review cycles.
              </p>
              <ul>
                <li>Control framework setup</li>
                <li>Regulatory tracking and adherence support</li>
                <li>Documentation and policy management</li>
              </ul>
            </div>
          )}
          <button
            type="button"
            className="cas-read-more"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </aside>
      </section>

      <section className="cas-sections">
        <article>
          <h2>Our Approach</h2>
          <p>
            We combine finance domain expertise, digital enablers, and process
            intelligence to deliver a transparent and scalable accounting
            ecosystem.
          </p>
        </article>

        <article>
          <h2>Scope of Engagement</h2>
          <ul>
            <li>Procure to Pay (P2P)</li>
            <li>Order to Cash (O2C)</li>
            <li>Record to Analyze (R2A)</li>
            <li>Compliance and Regulatory Support</li>
          </ul>
        </article>

        <article>
          <h2>Why TALME</h2>
          <ul>
            <li>Outcome-focused accounting delivery model</li>
            <li>Strong governance and control orientation</li>
            <li>Scalable team structures across business phases</li>
            <li>Actionable insights for decision-ready finance operations</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default ClientAccountingServices;
