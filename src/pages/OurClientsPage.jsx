import "./OurClientsPage.css";

const clientLogos = [
  { name: "Tata Technologies", logo: "https://logo.clearbit.com/tatatechnologies.com" },
  { name: "L&T Technology Services", logo: "https://logo.clearbit.com/ltts.com" },
  { name: "PAMP Technologies", logo: "https://logo.clearbit.com/pamp.com" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
  { name: "VVDN Technologies", logo: "https://logo.clearbit.com/vvdntech.com" },
  { name: "HL Klemove", logo: "https://logo.clearbit.com/hlklemove.com" },
  { name: "Cyient", logo: "https://logo.clearbit.com/cyient.com" },
  { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
  { name: "Yokogawa", logo: "https://logo.clearbit.com/yokogawa.com" },
  { name: "SLK", logo: "https://logo.clearbit.com/slksoftware.com" },
  { name: "Edwards", logo: "https://logo.clearbit.com/edwardsvacuum.com" },
  { name: "MindIT", logo: "https://logo.clearbit.com/mindit.io" },
  { name: "Quest Global", logo: "https://logo.clearbit.com/quest-global.com" },
  { name: "Leadsoc", logo: "https://logo.clearbit.com/leadsoc.com" },
  { name: "Enparadigm", logo: "https://logo.clearbit.com/enparadigm.com" },
  { name: "DiligenceVault", logo: "https://logo.clearbit.com/diligencevault.com" },
  { name: "ThoughtFocus", logo: "https://logo.clearbit.com/thoughtfocus.com" },
  { name: "Quinnel Soft", logo: "https://logo.clearbit.com/quinnelsoft.com" },
  { name: "NTT DATA", logo: "https://logo.clearbit.com/nttdata.com" },
  { name: "KPIT", logo: "https://logo.clearbit.com/kpit.com" },
  { name: "Turiya", logo: "https://logo.clearbit.com/turiyatech.com" },
  { name: "Aquimo", logo: "https://logo.clearbit.com/aquimo.com" },
  { name: "Radiant", logo: "https://logo.clearbit.com/radiant.com" },
];

function OurClientsPage() {
  return (
    <main className="clients-page">
      <section className="clients-hero">
        <p>Trust and Partnerships</p>
        <h1>Our Clients</h1>
        <p>
          We support enterprise and growth organizations with engineering,
          operations, staffing, and transformation services.
        </p>
      </section>

      <section className="clients-grid-wrap">
        <h2>Organizations We Work With</h2>
        <div className="clients-board">
          {clientLogos.map((client) => (
            <article className="client-logo-item" key={client.name}>
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                onError={(event) => {
                  const img = event.currentTarget;
                  if (img.dataset.fallbackApplied === "true") return;
                  img.dataset.fallbackApplied = "true";
                  img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    client.name
                  )}&background=0b244a&color=ffffff&bold=true&size=200&format=svg`;
                }}
              />
              <p>{client.name}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default OurClientsPage;
