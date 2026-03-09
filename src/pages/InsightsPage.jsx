import { Link } from "react-router-dom";
import "./InsightsPage.css";
import { insightsData } from "../data/insightsData";

function InsightsPage() {
  return (
    <section className="insights-page">
      <div className="insights-container">
        <header className="insights-header">
          <h1>Insights</h1>
          <p>
            Corporate perspectives from TALME on engineering delivery, digital
            operations, and workforce strategy for enterprise growth.
          </p>
        </header>

        <div className="insights-hero">
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1800&q=80"
            alt="Corporate strategy and decision making"
          />
          <div className="insights-hero-panel">
            <span>Executive Brief</span>
            <h2>How High-Performing Teams Build Competitive Advantage</h2>
            <p>
              Enterprises that integrate talent, process, and digital execution
              consistently outperform in speed, resilience, and quality.
            </p>
          </div>
        </div>

        <div className="insights-grid">
          {insightsData.map((card) => (
            <Link
              className="insight-card"
              key={card.slug}
              to={`/insights/${card.slug}`}
            >
              <img src={card.image} alt={card.title} />
              <div className="insight-card-content">
                <span>{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <strong className="insight-learn-more">Learn More</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsightsPage;
