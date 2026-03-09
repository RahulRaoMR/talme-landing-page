import "./ContactPage.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const officeLocations = [
  {
    country: "India",
    offices: [
      {
        label: "India Office",
        address:
          "No.24, Vital Mallya Road, Level 14, Concorde Towers, UB City, Bangalore, Karnataka 560001, India.",
        directions:
          "https://maps.google.com/?q=UB+City+Bangalore",
      },
    ],
  },
  {
    country: "Singapore",
    offices: [
      {
        label: "Singapore Office",
        address: "8 Marina View, Singapore 018981.",
        directions: "https://maps.google.com/?q=8+Marina+View+Singapore+018981",
      },
    ],
  },
];

function ContactPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <main className="contact-premium-page">
      <header className="contact-hero">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
          alt="Corporate office environment"
        />
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
        </div>
      </header>

      <section className="contact-main-grid">
        <div className="contact-left-col">
          <p className="contact-intro">
            For over 20 years, we have built capabilities for partnering with
            global organizations and growth-stage businesses. Our team provides
            enterprise-ready engineering and staffing support across industries.
          </p>

          {officeLocations.map((country) => (
            <section key={country.country} className="country-block" id={country.country.toLowerCase()}>
              <h2>{country.country}</h2>
              <div className="office-list">
                {country.offices.map((office) => (
                  <article className="office-card" key={office.label}>
                    <h3>{office.label}</h3>
                    <p>{office.address}</p>
                    <a href={office.directions} target="_blank" rel="noreferrer">
                      Get Directions
                    </a>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="contact-right-col">
          <section className="contact-form-card">
            <h2>Get in touch with us</h2>
            <form>
              <input type="text" placeholder="Name*" />
              <input type="text" placeholder="Company Name*" />
              <input type="email" placeholder="Email*" />
              <textarea placeholder="Message" rows={4} />
              <label className="contact-consent">
                <input type="checkbox" />
                <span>
                  I confirm, I have read and agree to TALME Privacy Notice.
                </span>
              </label>
              <button type="button">Send</button>
            </form>
          </section>

          <section className="contact-coordinates-card">
            <h3>Contact Coordinates</h3>
            <div className="coordinates-grid">
              <div>
                <p>We can definitely help you.</p>
                <a href="tel:9449838000">9449838000</a>
              </div>
              <div>
                <p>
                  Whether you are a startup or a large enterprise, we have
                  solutions that can make a difference.
                </p>
                <a href="mailto:info@talme.in">info@talme.in</a>
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

export default ContactPage;
