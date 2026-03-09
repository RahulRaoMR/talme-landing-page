import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { servicePagesData } from "../data/servicePagesData";
import "./ServiceDetailPage.css";

function ServiceDetailPage() {
  const { slug = "" } = useParams();
  const service = servicePagesData[slug];
  const [showMore, setShowMore] = useState(false);
  const defaultGallery = [
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1400",
  ];

  if (!service) {
    return (
      <main className="service-detail-page">
        <section className="service-detail-container">
          <h1>Service Not Found</h1>
          <p>The requested service page is not available.</p>
          <Link to="/" className="service-back-link">
            Back to Home
          </Link>
        </section>
      </main>
    );
  }
  const gallery = (service.gallery && service.gallery.length > 0
    ? service.gallery
    : defaultGallery
  ).slice(0, 3);
  const heroImage = gallery[0];

  return (
    <main className="service-detail-page">
      <section className="service-detail-container">
        <header className="service-detail-header">
          <div>
            <p className="service-detail-breadcrumb">
              {service.tag} <span>{service.title}</span>
            </p>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
          </div>
        </header>

        <section className="service-detail-feature">
          <img src={heroImage} alt={`${service.title} main visual`} />
          <article className="service-detail-feature-panel">
            <p>
              Outcome-focused {service.title.toLowerCase()} services designed to
              strengthen governance, scale delivery, and improve measurable
              business performance.
            </p>
          </article>
        </section>

        <section className="service-detail-info-grid">
          <article className="service-detail-quote-card">
            <span className="service-detail-quote-mark">"</span>
            <p>{service.details?.[0]}</p>
            <h3>TALME Expert Team</h3>
            <small>{service.tag} Leadership</small>
          </article>

          <aside className="service-detail-updates-card">
            <h4>Updates</h4>
            <h5>{service.title} Execution Framework</h5>
            <p>
              Designed for quality, speed, and transparency across every phase
              of delivery and stakeholder engagement.
            </p>
            {showMore && (
              <div className="service-detail-updates-more">
                <p>{service.details?.[1] || service.details?.[0]}</p>
                <ul>
                  {service.highlights.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              type="button"
              className="service-detail-readmore"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </aside>
        </section>

        <section className="service-detail-sections">
          <article>
            <h2>How TALME Delivers Value</h2>
            {(service.details || []).map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </article>

          <article>
            <h2>Core Highlights</h2>
            <ul>
              {service.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2>Business Outcomes</h2>
            <ul>
              {(service.outcomes || []).map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="service-detail-gallery">
          <h2>Visual Highlights</h2>
          <div className="service-detail-gallery-grid">
            {gallery.map((image, index) => (
              <img
                key={`${service.title}-gallery-${index + 1}`}
                src={image}
                alt={`${service.title} showcase ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="service-detail-actions">
          <Link to="/" className="service-back-link">
            Back to Home
          </Link>
          <Link to="/contact" className="service-contact-link">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetailPage;
