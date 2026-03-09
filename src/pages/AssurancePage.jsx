import "./AssurancePage.css";

const assurancePillars = [
  {
    title: "Risk and Control Assurance",
    description:
      "Assess and strengthen internal controls to improve governance, transparency, and operational resilience.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Compliance and Regulatory Readiness",
    description:
      "Build proactive compliance frameworks aligned with statutory obligations and industry-specific requirements.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Process Quality and Audit Support",
    description:
      "Deliver audit-ready processes with measurable controls, process documentation, and performance validation.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  },
];

function AssurancePage() {
  return (
    <section className="assurance-page">
      <div className="assurance-container">
        <header className="assurance-header">
          <h1>Assurance</h1>
          <p>
            Corporate assurance services designed to improve trust, compliance,
            and long-term business performance.
          </p>
        </header>

        <div className="assurance-hero">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80"
            alt="Corporate assurance and governance team"
          />
          <div className="assurance-hero-overlay">
            <span>Enterprise Assurance</span>
            <h2>Strengthen Governance. Improve Confidence. Enable Growth.</h2>
            <p>
              We combine audit discipline, process expertise, and digital
              insights to help organizations operate with confidence.
            </p>
          </div>
        </div>

        <div className="assurance-grid">
          {assurancePillars.map((pillar) => (
            <article className="assurance-card" key={pillar.title}>
              <img src={pillar.image} alt={pillar.title} />
              <div className="assurance-card-content">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="assurance-benefits">
          <h2>What You Gain</h2>
          <ul>
            <li>Improved process reliability and decision confidence</li>
            <li>Reduced compliance and operational risk exposure</li>
            <li>Audit-ready documentation and control maturity</li>
            <li>Stronger stakeholder trust through measurable governance</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default AssurancePage;
