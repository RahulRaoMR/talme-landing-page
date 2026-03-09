import "./ContactPage.css";
import { FaWhatsapp } from "react-icons/fa";

function ContactCard({ city, intro, address, hours, mapSrc }) {
  return (
    <section className="contact-block">
      <h2 className="contact-city-title">
        <span>{city}</span>
      </h2>

      <div className="contact-grid">
        <article className="contact-details">
          <h3 className="contact-heading">Contact Us</h3>
          <p className="contact-intro">{intro}</p>
          <p className="contact-note">
            We love our customers, so feel free to visit during normal business
            hours.
          </p>
          <a
            className="contact-whatsapp"
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            Message us on WhatsApp
          </a>

          <h4 className="contact-company">Talme Technologies</h4>
          <p className="contact-address">{address}</p>

          <h5 className="contact-hours-title">Hours</h5>
          <p className="contact-hours">{hours}</p>
        </article>

        <div className="contact-map-wrap">
          <iframe
            title={`${city} office map`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact-map"
          />
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <main className="contact-page">
      <ContactCard
        city="India"
        intro="Better yet, see us in person!"
        address="No.24, Vital Mallya Road, Level 14, Concorde Towers, UB City, Bangalore, Karnataka 560001, India."
        hours="Open today 09:00 am - 05:00 pm"
        mapSrc="https://maps.google.com/maps?q=UB%20City%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
      />

      <ContactCard
        city="Singapore"
        intro="Better yet, see us in person!"
        address="8 Marina View, Singapore 018981"
        hours="Open today 09:00 am - 05:00 pm"
        mapSrc="https://maps.google.com/maps?q=Marina%20Bay%20Singapore&t=&z=13&ie=UTF8&iwloc=&output=embed"
      />
    </main>
  );
}

export default ContactPage;
