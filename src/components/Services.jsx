import CountUp from "react-countup";
import "./Services.css";
import {
  FaHeartbeat,
  FaLaptopCode,
  FaCogs,
  FaGlobe,
  FaBoxOpen,
  FaVideo,
  FaRobot,
  FaDesktop,
  FaMicrochip,
  FaCar,
  FaCloud,
  FaRocket,
  FaLightbulb,
  FaIndustry,
  FaTools,
  FaCog
} from "react-icons/fa";

function Services() {
  return (
    <section className="services">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <FaHeartbeat className="icon" />
          <p>Healthcare Services</p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="icon" />
          <p>IT Services</p>
        </div>

        <div className="service-card">
          <FaCogs className="icon" />
          <p>Mechanical Engineering Services</p>
        </div>

        <div className="service-card">
          <FaGlobe className="icon" />
          <p>Outsourcing & Offshoring Services</p>
        </div>

        <div className="service-card">
          <FaBoxOpen className="icon" />
          <p>Product Life Cycle Management</p>
        </div>

        <div className="service-card">
          <FaVideo className="icon" />
          <p>Video Interviewing</p>
        </div>

        <div className="service-card">
          <FaRobot className="icon" />
          <p>Robotic Process Automation</p>
        </div>

        <div className="service-card">
          <FaDesktop className="icon" />
          <p>Engineering Software Solutions</p>
        </div>

        <div className="service-card">
          <FaMicrochip className="icon" />
          <p>VLSI Services</p>
        </div>

        <div className="service-card">
          <FaCar className="icon" />
          <p>Automotive Services</p>
        </div>

        <div className="service-card">
          <FaCloud className="icon" />
          <p>Cloud Engineering Services</p>
        </div>

        <div className="service-card">
          <FaRocket className="icon" />
          <p>Aerospace Engineering Services</p>
        </div>

        <div className="service-card">
          <FaLightbulb className="icon" />
          <p>Business Solutions</p>
        </div>

        <div className="service-card">
          <FaIndustry className="icon" />
          <p>Oil & Gas Services</p>
        </div>

        <div className="service-card">
          <FaTools className="icon" />
          <p>Original Equipment Manufacture (OEM)</p>
        </div>

        <div className="service-card">
  <FaCog className="icon" />
  <p>Other Engineering Services</p>
</div>

</div>  {/* services-grid ends */}

<div className="stats-section">

  <div className="stat-box">
    <h2>
      <CountUp end={500} duration={3} enableScrollSpy scrollSpyOnce />+
    </h2>
    <p>Projects Completed</p>
  </div>

  <div className="stat-box">
    <h2>
      <CountUp end={2} duration={3} enableScrollSpy scrollSpyOnce />
    </h2>
    <p>Global Offices</p>
  </div>

  <div className="stat-box">
    <h2>
      <CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce />+
    </h2>
    <p>Years Of Experience</p>
  </div>

  <div className="stat-box">
    <h2>
      <CountUp end={1000} duration={3} separator="," enableScrollSpy scrollSpyOnce />+
    </h2>
    <p>Employees</p>
  </div>

</div>

</section>
  );
}

export default Services;