import { Link } from "react-router-dom";
import "./ManagedServices.css";

function ManagedServices() {
  const managedItems = [
    {
      title: "Business Services",
      description: "Optimize core operations with scalable process support.",
      to: "/business-services",
    },
    {
      title: "Client Accounting Services",
      description: "Improve finance workflows with accurate, compliant delivery.",
      to: "/client-accounting",
    },
    {
      title: "People Practice",
      description: "Build stronger talent systems with structured HR operations.",
      to: "/people-practice",
    },
  ];

  return (
    <section className="managed">
      <h2 className="managed-title">Managed Services</h2>
      <p className="managed-subtitle">
        Flexible service lines designed to improve quality, speed, and business
        outcomes.
      </p>

      <div className="managed-container">
        <div className="managed-left">
          {managedItems.map((item) => (
            <article className="service-box" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.to} className="learn-btn">
                LEARN MORE
              </Link>
            </article>
          ))}
        </div>

        <div className="managed-right">
          <div className="managed-image-badge">Trusted Delivery Partner</div>
          <div className="managed-image-metric">
            <strong>98%</strong>
            <span>Client Retention</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate leadership team in modern office"
          />
        </div>
      </div>
    </section>
  );
}

export default ManagedServices;
