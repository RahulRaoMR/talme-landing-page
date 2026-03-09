import "./ManagedServices.css";

function ManagedServices() {
  return (
    <section className="managed">

      <h2 className="managed-title">Managed Services</h2>

      <div className="managed-container">

        <div className="managed-left">

          <div className="service-box">
            <h3>Business Services</h3>
            <button className="learn-btn">LEARN MORE</button>
          </div>

          <div className="service-box">
            <h3>Client Accounting Services</h3>
            <button className="learn-btn">LEARN MORE</button>
          </div>

          <div className="service-box">
            <h3>People Practice</h3>
            <button className="learn-btn">LEARN MORE</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ManagedServices;