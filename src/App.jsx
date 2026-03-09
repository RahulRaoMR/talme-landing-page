import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ManagedServices from "./components/ManagedServices";
import Engagement from "./components/Engagement";
import About from "./components/About";
import Footer from "./components/Footer";
import ClientAccountingServices from "./pages/ClientAccountingServices";
import ContactPage from "./pages/ContactPage";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Engagement />
              <Services />
            </>
          }
        />

        {/* Managed Services Page */}
        <Route path="/managed-services" element={<ManagedServices />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/client-accounting" element={<ClientAccountingServices />} />
        <Route path="/contact" element={<ContactPage />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
