import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { serviceHubDetails } from "../data/serviceHubData";
import "./ServiceHubPage.css";

const defaultGalleryPool = [
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3862373/pexels-photo-3862373.jpeg?auto=compress&cs=tinysrgb&w=1400",
];

function ServiceHubPage() {
  const { slug = "" } = useParams();
  const service = serviceHubDetails[slug];
  const [showMore, setShowMore] = useState(false);

  if (!service) {
    return (
      <main className="service-hub-page">
        <section className="service-hub-container not-found">
          <h1>Page Not Found</h1>
          <p>The selected service page is not available.</p>
          <Link to="/" className="service-hub-back">
            Back to Home
          </Link>
        </section>
      </main>
    );
  }

  const offset =
    slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    defaultGalleryPool.length;
  const rotatedPool = [
    ...defaultGalleryPool.slice(offset),
    ...defaultGalleryPool.slice(0, offset),
  ];
  const gallery = (service.galleryUrls && service.galleryUrls.length > 0
    ? service.galleryUrls
    : rotatedPool
  ).slice(0, 3);
  const heroImage = gallery[0];

  return (
    <main className="service-hub-page">
      <section className="service-hub-container">
        <header className="service-hub-header">
          <div>
            <p className="service-hub-breadcrumb">
              {service.section} <span>{service.title}</span>
            </p>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
          </div>
        </header>

        <section className="service-hub-feature">
          <img src={heroImage} alt={`${service.title} main visual`} />
          <article className="service-hub-feature-panel">
            <p>
              Premium delivery models tailored for {service.title.toLowerCase()}
              , combining governance, performance visibility, and measurable
              business outcomes.
            </p>
          </article>
        </section>

        <section className="service-hub-info-grid">
          <article className="service-hub-quote-card">
            <span className="service-hub-quote-mark">"</span>
            <p>{service.details[0]}</p>
            <h3>TALME Delivery Leadership</h3>
            <small>{service.section} Practice Team</small>
          </article>

          <aside className="service-hub-updates-card">
            <h4>Updates</h4>
            <h5>{service.title} Playbook for Performance Improvement</h5>
            <p>
              Structured delivery frameworks for {service.title.toLowerCase()}{" "}
              improve control, speed, and enterprise confidence.
            </p>
            {showMore && (
              <div className="service-hub-updates-more">
                <p>{service.details[1] || service.details[0]}</p>
                <ul>
                  {service.capabilities.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              type="button"
              className="service-hub-readmore"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </aside>
        </section>

        <section className="service-hub-sections">
          <article>
            <h2>Service Overview</h2>
            {service.details.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </article>

          <article>
            <h2>Core Capabilities</h2>
            <ul>
              {service.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2>Business Outcomes</h2>
            <ul>
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {service.insights && service.insights.length > 0 && (
            <article>
              <h2>Why This Service</h2>
              <ul>
                {service.insights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          )}
        </section>

        <section className="service-hub-gallery">
          <h2>Visual Highlights</h2>
          <div className="service-hub-gallery-grid">
            {gallery.map((image, index) => (
              <img
                key={`${service.title}-${index + 1}`}
                src={image}
                alt={`${service.title} visual ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="service-hub-actions">
          <Link to="/" className="service-hub-back">
            Back to Home
          </Link>
          <Link to="/contact" className="service-hub-contact">
            Contact Us
          </Link>
        </div>

        <section className="service-hub-outcomes">
          <h2>Outcome Snapshot</h2>
          <ul>
            {service.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default ServiceHubPage;
