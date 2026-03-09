import "./ManagedServicesPage.css";

function ManagedServicesPage(){

return(

<section className="managed-page">

<h1>Managed Services</h1>

<p>
With DISTIL method as the foundational approach to arrive at a transformative
solution for your business, our broad spectrum of managed services drives
process efficiencies and agile outcomes across diverse verticals.
</p>

<div className="service-grid">

<div className="service-card">
<img src="/images/accounting.jpg"/>
<h3>Client Accounting Services</h3>
</div>

<div className="service-card">
<img src="/images/people.jpg"/>
<h3>People Practice</h3>
</div>

<div className="service-card">
<img src="/images/business.jpg"/>
<h3>Business Services</h3>
</div>

<div className="service-card">
<img src="/images/compliance.jpg"/>
<h3>Compliance Management</h3>
</div>

</div>

</section>

)

}

export default ManagedServicesPage;