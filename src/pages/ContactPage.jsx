import "./ContactPage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TALME_CONTACT_EMAIL = "hr@talme.in";

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
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    consent: false,
  });
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.consent) {
      setSubmitState({
        status: "error",
        message: "Please confirm the privacy notice before sending.",
      });
      return;
    }

    setSubmitState({
      status: "sending",
      message: "Sending your message...",
    });

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${TALME_CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            company: formData.company,
            email: formData.email,
            message: formData.message,
            _subject: `Website Contact Form from ${formData.name}`,
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitState({
        status: "success",
        message: "Message sent successfully. Our TALME team will contact you soon.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
        consent: false,
      });
    } catch {
      setSubmitState({
        status: "error",
        message: "Unable to send now. Please try again in a moment.",
      });
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name*"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label className="contact-consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <span>
                  I confirm, I have read and agree to TALME Privacy Notice.
                </span>
              </label>
              <button type="submit">
                {submitState.status === "sending" ? "Sending..." : "Send"}
              </button>
              {submitState.status !== "idle" && (
                <p className={`contact-submit-note ${submitState.status}`}>
                  {submitState.message}
                </p>
              )}
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
                <a href="mailto:hr@talme.in">hr@talme.in</a>
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

export default ContactPage;
