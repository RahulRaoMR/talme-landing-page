import { Link, useParams } from "react-router-dom";
import { insightsData } from "../data/insightsData";
import "./InsightDetailPage.css";

function InsightDetailPage() {
  const { slug } = useParams();
  const insight = insightsData.find((item) => item.slug === slug);

  if (!insight) {
    return (
      <section className="insight-detail-page">
        <div className="insight-detail-container">
          <h1>Insight Not Found</h1>
          <p>The selected insight is not available.</p>
          <Link to="/insights" className="insight-back-link">
            Back to Insights
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="insight-detail-page">
      <div className="insight-detail-container">
        <Link to="/insights" className="insight-back-link">
          Back to Insights
        </Link>

        <div className="insight-detail-hero">
          <img src={insight.heroImage} alt={insight.title} />
          <div className="insight-detail-overlay">
            <span>{insight.tag}</span>
            <h1>{insight.title}</h1>
            <p>{insight.description}</p>
          </div>
        </div>

        <div className="insight-detail-content">
          {insight.sections.map((section) => (
            <article key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>

        <div className="insight-detail-gallery">
          {insight.gallery.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`${insight.title} visual ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsightDetailPage;
