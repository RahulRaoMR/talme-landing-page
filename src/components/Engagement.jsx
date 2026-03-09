import "./Engagement.css";

function Engagement() {
  const engagementCards = [
    {
      title: "Employee Engagement",
      text:
        "At TALME, we build a high-trust culture where teams are mentored by experienced leaders and supported with clear growth opportunities.",
      tag: "People First",
    },
    {
      title: "Client Engagement",
      text:
        "We align sourcing strategy to your business model, culture, and growth plans to deliver talent pipelines that convert into long-term value.",
      tag: "Business Aligned",
    },
    {
      title: "Domain Expertise",
      text:
        "Our integrated workforce and engineering expertise helps organizations adapt faster, scale confidently, and execute transformation roadmaps.",
      tag: "Outcome Driven",
    },
  ];

  return (
    <section className="engagement">
      <div className="engagement-header">
        <h2>Why Organizations Partner With TALME</h2>
        <p>
          Built for enterprise expectations with dependable execution and
          measurable delivery quality.
        </p>
      </div>

      <div className="engagement-container">
        {engagementCards.map((card) => (
          <article className="engagement-card" key={card.title}>
            <span className="engagement-tag">{card.tag}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Engagement;
